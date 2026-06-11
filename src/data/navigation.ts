export type NavHash = 'top' | 'service' | 'works' | 'story' | 'about' | 'contact'

// hash はホームページ内のセクションIDと対応する。ヘッダー/フッターはどのページからでも
// `/` または `/#hash` へのリンクとして解決する(src/components/Header.tsx 等参照)。
export const navItems: { hash: NavHash; label: string }[] = [
  { hash: 'top', label: 'Home' },
  { hash: 'service', label: 'Service' },
  { hash: 'works', label: 'Works' },
  { hash: 'story', label: 'Story' },
  { hash: 'about', label: 'About' },
  { hash: 'contact', label: 'Contact' },
]

export const homeHref = (hash: NavHash) => (hash === 'top' ? '/' : `/#${hash}`)
