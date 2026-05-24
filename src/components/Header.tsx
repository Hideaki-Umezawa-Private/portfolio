import { useEffect, useRef, useState } from 'react'
import { mailToUrl } from '../data/profile'
import { Icon } from './Icon'

const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'service', label: 'Service' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState('top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)
    let frameId = 0

    const updateActiveSection = () => {
      const marker = window.scrollY + 128
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      const current = isAtBottom
        ? sections.at(-1)?.id
        : sections.reduce((active, section) => {
            return section.offsetTop <= marker ? section.id : active
          }, 'top')

      setActiveSection(current ?? 'top')
    }

    const requestUpdate = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

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
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header" aria-label="サイトナビゲーション" ref={headerRef}>
      <a
        className="brand"
        href="#top"
        aria-label="Umehide Portfolio top"
        onClick={() => handleNavClick('top')}
      >
        <strong>UH</strong>
        <span>
          Umehide
          <br />
          Portfolio
        </span>
      </a>

      <nav className={`site-nav${isMenuOpen ? ' is-open' : ''}`}>
        {navItems.map((item) => (
          <a
            aria-current={activeSection === item.id ? 'page' : undefined}
            href={`#${item.id}`}
            key={item.id}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href={mailToUrl} onClick={() => setIsMenuOpen(false)}>
        <Icon name="mail" />
        お問い合わせ
      </a>
      <button
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  )
}
