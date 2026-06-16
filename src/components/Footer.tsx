import { Link } from 'react-router-dom'
import { homeHref, navItems } from '../data/navigation'

type FooterProps = {
  currentPage?: 'process' | 'faq' | 'privacy'
}

const extraLinks = [
  { to: '/process', label: 'Process', page: 'process' as const },
  { to: '/faq', label: 'FAQ', page: 'faq' as const },
  { to: '/privacy', label: 'Privacy', page: 'privacy' as const },
]

export function Footer({ currentPage }: FooterProps) {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" to="/">
        <strong>砂漠の梅</strong>
        <span className="brand-sub">Sabaku no Ume</span>
      </Link>

      <nav className="footer-nav" aria-label="フッターナビゲーション">
        {navItems.map((item) => (
          <Link key={item.hash} to={homeHref(item.hash)}>
            {item.label}
          </Link>
        ))}
        {extraLinks.map((link) => (
          <Link key={link.page} to={link.to} className={currentPage === link.page ? 'is-current' : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>

      <small className="footer-copy">© {new Date().getFullYear()} Sabaku no Ume. All rights reserved.</small>
    </footer>
  )
}
