import { navItems } from '../data/navigation'
import { githubUrl, qiitaUrl } from '../data/profile'

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top" aria-label="Umehide Portfolio top">
        <strong>UH</strong>
        Umehide Portfolio
      </a>

      <nav className="footer-nav" aria-label="フッターナビゲーション">
        {navItems.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="footer-social">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={qiitaUrl} target="_blank" rel="noopener noreferrer">
          Qiita
        </a>
      </div>

      <small className="footer-copy">
        © {new Date().getFullYear()} Umehide. All rights reserved.
      </small>
    </footer>
  )
}
