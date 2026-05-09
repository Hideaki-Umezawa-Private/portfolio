import { mailToUrl } from '../data/profile'

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">
          想いを、
          <br />
          <em>カタチ</em>に。
        </h1>
        <svg
          className="hero-underline"
          viewBox="0 0 520 72"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className="hero-underline__stroke"
            d="M8 24 C84 45 160 43 235 31 C310 19 395 20 468 31"
            pathLength="1"
          />
        </svg>
        <p className="hero__note">
          ホームページ制作から業務を支えるWebシステムまで、
          <br />
          相談しながら形にし、公開後の運用までサポートします。
        </p>
        <div className="hero__actions" aria-label="Primary links">
          <a className="button button--primary" href={mailToUrl}>
            無料で相談してみる
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="soft-orbit soft-orbit--one" />
        <div className="soft-orbit soft-orbit--two" />
        <div className="glow-ball" />
        <article className="floating-card floating-card--top">
          <span>💬</span>
          <div>
            <strong>相談しやすい対応</strong>
            <p>初めての方でも安心してご相談いただけます</p>
          </div>
        </article>
        <article className="floating-card floating-card--middle">
          <span>💡</span>
          <div>
            <strong>設計から運用まで一貫対応</strong>
            <p>ワンストップで対応するので安心してお任せいただけます</p>
          </div>
        </article>
        <article className="floating-card floating-card--bottom">
          <span>♡</span>
          <div>
            <strong>業務改善までサポート</strong>
            <p>Webの力で課題を効率化し、改善サポートも行います</p>
          </div>
        </article>
      </div>
    </section>
  )
}
