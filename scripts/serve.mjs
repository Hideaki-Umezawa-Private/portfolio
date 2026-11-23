// ローカル確認用の簡易サーバー(Node.js 標準機能のみ・インストール不要)。
//   node scripts/serve.mjs          → http://localhost:5173
//   PORT=8080 node scripts/serve.mjs
// 本番(Cloudflare Pages)と同じく /works → works.html のように拡張子なしURLで配信する。
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(process.argv[2] ?? path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public'))
const port = Number(process.env.PORT) || 5173

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

async function isFile(file) {
  try {
    return (await stat(file)).isFile()
  } catch {
    return false
  }
}

async function resolve(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '')
  const file = path.join(root, clean)
  if (!file.startsWith(root)) return null
  for (const candidate of [file, `${file}.html`, path.join(file, 'index.html')]) {
    if (await isFile(candidate)) return candidate
  }
  return null
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost')
  const file = await resolve(pathname)
  const status = file ? 200 : 404
  const target = file ?? path.join(root, '404.html')
  try {
    const body = await readFile(target)
    res.writeHead(status, { 'Content-Type': types[path.extname(target)] ?? 'application/octet-stream', 'Cache-Control': 'no-cache' })
    res.end(body)
  } catch {
    res.writeHead(404).end('Not found')
  }
}).listen(port, () => console.log(`http://localhost:${port}  (${root})`))
