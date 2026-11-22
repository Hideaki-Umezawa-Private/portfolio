import { useEffect } from 'react'
import { DEFAULT_OG_IMAGE, fullTitle, pages, pageUrl, type PageKey } from '../data/seo'

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// クライアント側でページ遷移したときに title・description・canonical・OG/Twitter を更新する。
// 直接アクセス時の内容は scripts/prerender.mjs がビルド時に各ページのHTMLへ書き込んでいる。
export function usePageMeta(key: PageKey) {
  useEffect(() => {
    const meta = pages[key]
    const url = pageUrl(meta)
    const title = fullTitle(meta)

    document.title = title
    setMetaTag('name', 'description', meta.description)
    setLinkTag('canonical', url)

    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', meta.description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE)

    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', meta.description)
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE)
  }, [key])
}
