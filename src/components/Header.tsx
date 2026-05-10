import { useEffect, useState } from 'react'
import { mailToUrl } from '../data/profile'

const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'service', label: 'Service' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState('top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (current?.target.id) {
          setActiveSection(current.target.id)
        }
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: [0.12, 0.28, 0.48],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header" aria-label="サイトナビゲーション">
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

      <a className="header-contact" href={mailToUrl}>お問い合わせ</a>
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
