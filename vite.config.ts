import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// GitHub Pages はリポジトリ名のサブパス(/portfolio/)配下、Cloudflare Pages は
// ルート(/)で配信するため、デプロイ先ごとにbaseを切り替える。
// Cloudflare向けビルドは `DEPLOY_TARGET=cloudflare npm run build` で実行する。
export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === 'cloudflare' ? '/' : '/portfolio/',
})
