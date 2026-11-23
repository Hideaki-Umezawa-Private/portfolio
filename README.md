<div align="center">

# 砂漠の梅 — Hideaki Umezawa Portfolio

**Web Engineer / Web・IT相談 / 業務改善・自動化サポート**

[![Site](https://img.shields.io/badge/Portfolio-sabaume.com-B0693B?style=for-the-badge)](https://sabaume.com)
[![HTML/CSS/JS](https://img.shields.io/badge/HTML%20%2F%20CSS%20%2F%20JS-no%20dependencies-E34F26?style=flat-square&logo=html5&logoColor=white)](#構成)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-deployed-F38020?style=flat-square&logo=cloudflarepages&logoColor=white)](https://pages.cloudflare.com)

</div>

---

> あなたに寄り添い、ともに前へ進めるパートナーです。
> ホームページ制作からWebシステム開発、業務改善・運用サポートまで一貫して対応します。

## サイト

| | |
|---|---|
| 本番 | **[sabaume.com](https://sabaume.com)** |
| 旧URL | [hideaki-umezawa-private.github.io/portfolio](https://hideaki-umezawa-private.github.io/portfolio/) |

---

## 構成

ビルド不要・外部ライブラリなしの静的サイトです。`public/` の中身がそのまま公開されます。

| ファイル | 内容 |
|---|---|
| `public/*.html` | 各ページ(`index.html` がトップ、`works.html` が `/works` など) |
| `public/style.css` | 全ページ共通のスタイル |
| `public/script.js` | 全ページ共通の動き(スクロール表示・メニュー・トップページの演出など) |
| `public/images/` | 画像 |
| `public/sitemap.xml` / `public/llms.txt` | 検索エンジン・AI向けの案内(ページを増やしたら手で更新) |

ヘッダー・フッターは各HTMLに直接書いてあるため、変更するときは全ページを同じように直してください。

### ローカルで確認

```bash
node scripts/serve.mjs
```

http://localhost:5173 で表示されます(Node.js の標準機能だけで動き、`npm install` は不要)。

### 公開(Cloudflare Pages)

ビルドコマンドなし・出力ディレクトリ `public` の設定で、`main` へのpushがそのまま公開されます。

---

<div align="center">

Contact: [お問い合わせ](https://sabaume.com/#contact) · [GitHub](https://github.com/Hideaki-Umezawa-Private) · [Qiita](https://qiita.com/ume_hide)

</div>
