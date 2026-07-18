import { useEffect } from 'react'

const SITE_URL = 'https://sabaume.com'
const SITE_NAME = '砂漠の梅'
const DEFAULT_OG_IMAGE = `${SITE_URL}/camel.png`

type PageMetaOptions = {
  title: string
  description: string
  path: string
}

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

// ページ遷移ごとにタイトル・description・canonical・OG/Twitterタグを更新する。
// SPAのためindex.htmlの静的metaだけでは全ページ同じ内容になってしまうのを防ぐ。
export function usePageMeta({ title, description, path }: PageMetaOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const fullTitle = path === '/' ? title : `${title}｜${SITE_NAME}`

    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setLinkTag('canonical', url)

    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE)

    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE)
  }, [title, description, path])
}
