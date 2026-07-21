<div align="center">

# 砂漠の梅 — Hideaki Umezawa Portfolio

**Web Engineer / Web・IT相談 / 業務改善・自動化サポート**

[![Site](https://img.shields.io/badge/Portfolio-sabaume.com-B0693B?style=for-the-badge)](https://sabaume.com)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-deployed-F38020?style=flat-square&logo=cloudflarepages&logoColor=white)](https://pages.cloudflare.com)

</div>

---

> あなたに寄り添い、ともに前へ進めるパートナーです。
> ホームページ制作からWebシステム開発、業務改善・運用サポートまで一貫して対応します。

## サイト

| | |
|---|---|
| 本番 | **[sabaume.com](https://sabaume.com)**(Cloudflare Pages) |
| 旧URL | [hideaki-umezawa-private.github.io/portfolio](https://hideaki-umezawa-private.github.io/portfolio/)(sabaume.comへ自動転送) |

## Service

- ホームページ制作
- Webシステム開発
- ECサイト構築
- AI導入・業務自動化
- 業務改善サポート
- 技術顧問・IT相談
- 運用・保守サポート

## Tech Stack

| Category | Stack |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | React Router 7 |
| Style | Plain CSS(design tokens ベース) |
| Hosting | Cloudflare Pages(本番)/ GitHub Pages(転送用) |

## Development

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動
npm run lint     # ESLint
npm run build    # 型チェック + 本番ビルド
npm run preview  # ビルド結果のプレビュー
```

Cloudflare Pages向けにビルドする場合(`base`をルート`/`に切り替え):

```bash
DEPLOY_TARGET=cloudflare npm run build
```

## Project Structure

```
src/
├─ pages/        # ルーティング単位のページ(Home / Works / Service / Process / FAQ / Privacy)
├─ components/   # Header・Footer・ContactCta など共通レイアウト部品
├─ data/         # 掲載コンテンツ(サービス・実績・FAQ・法的表記など)
└─ hooks/        # スクロール制御などの共通フック
```

---

<div align="center">

Contact: [お問い合わせ](https://sabaume.com/#contact) · [GitHub](https://github.com/Hideaki-Umezawa-Private) · [Qiita](https://qiita.com/ume_hide)

</div>
