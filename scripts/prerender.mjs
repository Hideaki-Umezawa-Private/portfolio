// ビルド後に各ページの静的HTMLを書き出す。
//
// これまでは index.html 1枚だけを配信していたため、/works などへ直接アクセスすると
// ホスティングが 404 を返し(404.html経由でトップへ転送)、検索エンジンにページとして
// 認識されていなかった。ここでページごとに本文・title・description・canonical・
// 構造化データを入れたHTMLを作り、どのURLも 200 で中身のあるページとして返るようにする。
//
// 使い方: vite build(クライアント) → vite build --ssr(サーバー描画用) → このスクリプト
import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const base = process.env.DEPLOY_TARGET === 'cloudflare' ? '/' : '/portfolio/'

const ssr = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const {
  pages,
  buildJsonLd,
  fullTitle,
  pageUrl,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  faqs,
  services,
  emailAddress,
  consultFormUrl,
  shopPlanPrice,
  shopPlanFeatures,
  shopPlanCancelNotes,
} = ssr

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')

// 中身が同じ画像(例: camel.png と camel-illustration.png)はビルドごとに別名で出力されることが
// あるため、サーバー描画側の画像パスをクライアント側に実在するファイル名(ハッシュで照合)に揃える。
const clientAssets = new Map(
  (await readdir(path.join(distDir, 'assets'))).map((file) => [file.replace(/^.*-(?=[\w-]{8}\.\w+$)/, ''), file]),
)
const fixAssetPaths = (html) =>
  html.replace(/(\/assets\/)[^"'\s)]*?-([\w-]{8}\.\w+)/g, (match, prefix, hashAndExt) =>
    clientAssets.has(hashAndExt) ? `${prefix}${clientAssets.get(hashAndExt)}` : match,
  )

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
// JSON-LD内に </script> が現れても壊れないようにする
const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c')

function replaceOnce(html, pattern, replacement, label) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html)
  if (!found) throw new Error(`prerender: index.html に ${label} が見つかりません`)
  // 置換文字列中の "$&" などが特殊解釈されないよう関数で渡す
  return html.replace(pattern, () => replacement)
}

function setMeta(html, attr, key, content) {
  const pattern = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`)
  return replaceOnce(html, pattern, `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`, `meta[${attr}=${key}]`)
}

function buildPage(key) {
  const meta = pages[key]
  const title = fullTitle(meta)
  const url = pageUrl(meta)
  const location = meta.path === '/' ? base : `${base}${meta.path.slice(1)}`

  // 改行を含む属性値(複数行の content="...")を1行に揃えてから置き換える
  let html = template.replace(/content="\s*([^"]*?)\s*"/g, (_, value) => `content="${value.replace(/\s*\n\s*/g, ' ')}"`)

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`, 'title')
  html = setMeta(html, 'name', 'description', meta.description)
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`, 'canonical')
  html = setMeta(html, 'property', 'og:type', meta.path === '/' ? 'website' : 'article')
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', meta.description)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'property', 'og:image', DEFAULT_OG_IMAGE)
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', meta.description)
  html = replaceOnce(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${safeJson(buildJsonLd(key))}</script>`,
    'JSON-LD',
  )
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${fixAssetPaths(ssr.render(location))}</div>`, '#root')
  return html
}

for (const key of Object.keys(pages)) {
  const meta = pages[key]
  // /works → works.html(Cloudflare Pages・GitHub Pages とも拡張子なしURLで 200 を返す)
  const file = meta.path === '/' ? 'index.html' : `${meta.path.slice(1)}.html`
  await writeFile(path.join(distDir, file), buildPage(key))
  console.log(`prerender: ${meta.path} → dist/${file}`)
}

// サイトマップ(更新日はビルド日)
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(pages)
  .map(
    (meta) => `  <url>
    <loc>${pageUrl(meta)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)

// llms.txt: ChatGPT・Perplexity などのAIがサイトの要点を正しく把握・引用できるよう、
// 事業内容・ページ構成・よくある質問をMarkdownでまとめたもの(https://llmstxt.org/)
const llms = `# ${SITE_NAME}（Sabaku no Ume）

> ${pages.home.description}

- 代表: 梅澤 英昭（Umezawa Hideaki）
- お問い合わせ: ${emailAddress}（メールにて随時受付、返信は原則2〜3営業日以内。初回のご相談は無料）
- 主な実績: 西南学院大学 外国語学部様向け 英語音声研究用の実験Webシステム（約1,300名の研究参加者が利用）

## ページ

${Object.values(pages)
  .map((meta) => `- [${fullTitle(meta)}](${pageUrl(meta)}): ${meta.description}`)
  .join('\n')}

## できること

${services.map((service) => `- **${service.title}**: ${service.body}（${service.points.join('、')}）`).join('\n')}

## お店専用ホームページ 月々${shopPlanPrice.toLocaleString('ja-JP')}円プラン

${pages.shopPlan.description}
詳細: ${pageUrl(pages.shopPlan)}

${shopPlanFeatures.map((feature) => `- **${feature.title}**: ${feature.body}`).join('\n')}
- 解約金・違約金は発生しません（${shopPlanCancelNotes.join(' ')}）
- 無料相談フォーム: ${consultFormUrl}（通常1〜2日以内にメールで返信）

## よくある質問

${faqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join('\n\n')}
`
await writeFile(path.join(distDir, 'llms.txt'), llms)
console.log(`prerender: sitemap.xml, llms.txt (${SITE_URL})`)

await rm(ssrDir, { recursive: true, force: true })
