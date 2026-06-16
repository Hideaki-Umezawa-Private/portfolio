import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import camelLogo from '../assets/camel.png'
import { homeHref, navItems, type NavHash } from '../data/navigation'
import { mailToUrl } from '../data/profile'

type HeaderProps = {
  // 現在ページに対応するnav項目(サブページは固定、ホームはスクロール追従)
  activeHash?: NavHash
  scrollSpy?: boolean
  // ホームのみ:ページ先頭では透明、スクロールで背景が現れる
  transparentAtTop?: boolean
}

const SCROLL_SECTION_IDS: NavHash[] = ['top', 'service', 'works', 'story', 'about', 'contact']

export function Header({ activeHash, scrollSpy = false, transparentAtTop = false }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [spyHash, setSpyHash] = useState<NavHash>('top')

  useEffect(() => {
    if (!scrollSpy) {
      return
    }

    const sections = SCROLL_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const marker = window.scrollY + 140
      let current: NavHash = 'top'
      sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id as NavHash
      })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = (sections.at(-1)?.id as NavHash | undefined) ?? current
      }
      setSpyHash(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollSpy])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  const currentHash = scrollSpy ? spyHash : activeHash
  const isTransparent = transparentAtTop && !scrolled
  const headerClassName = [
    'site-header',
    isTransparent && 'site-header--transparent',
    transparentAtTop && scrolled && 'site-header--scrolled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName} ref={headerRef}>
      <Link className="brand" to="/" aria-label="砂漠の梅 トップページ" onClick={() => setIsMenuOpen(false)}>
        <img src={camelLogo} alt="砂漠の梅 ロゴ" />
        <span className="brand-text">
          <strong>砂漠の梅</strong>
          <span className="brand-sub">Sabaku no Ume</span>
        </span>
      </Link>

      <nav aria-label="main" className={`site-nav${isMenuOpen ? ' is-open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.hash}
            to={homeHref(item.hash)}
            aria-current={currentHash === item.hash ? 'page' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="header-cta" href={mailToUrl} onClick={() => setIsMenuOpen(false)}>
        お問い合わせ
      </a>

      <button
        type="button"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
