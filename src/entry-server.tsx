import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export { buildJsonLd, fullTitle, pages, pageUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './data/seo'
export { faqs } from './data/faq'
export { services } from './data/services'
export { consultFormUrl, emailAddress } from './data/profile'
export { shopPlanCancelNotes, shopPlanFeatures, shopPlanPrice } from './data/shopPlan'

// ビルド時(scripts/prerender.mjs)に各ページのHTMLを書き出すための描画関数。
// 検索エンジンやAIのクローラーはJavaScriptを実行しないことがあるため、本文をHTMLに含めておく。
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
