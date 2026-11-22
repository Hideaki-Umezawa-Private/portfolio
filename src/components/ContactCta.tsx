import type { ReactNode } from 'react'
import { mailToUrl } from '../data/profile'
import { Reveal } from './Reveal'

type ContactCtaProps = {
  heading: ReactNode
  body?: ReactNode
  variant?: 'home' | 'plain'
  // 指定するとメールに加えて相談フォームへのボタンも表示する
  formUrl?: string
}

export function ContactCta({ heading, body, variant = 'plain', formUrl }: ContactCtaProps) {
  const isHome = variant === 'home'

  return (
    <section className={`cta${isHome ? ' cta--home' : ''}`}>
      <div className="cta__ring" aria-hidden="true" />
      <Reveal className="cta__inner">
        {isHome && (
          <>
            <span className="cta__gold-line" aria-hidden="true" />
            <br />
          </>
        )}
        <span className="cta__eyebrow">Let's begin the journey.</span>
        <h2>{heading}</h2>
        {body && <p>{body}</p>}
        {formUrl ? (
          <div className="cta__actions">
            <a className="button-light" href={formUrl} target="_blank" rel="noopener noreferrer">
              無料相談フォームを開く<span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a className="button-ghost" href={mailToUrl}>
              メールで相談する
            </a>
          </div>
        ) : (
          <a className="button-light" href={mailToUrl}>
            無料で相談してみる<span className="arrow">→</span>
          </a>
        )}
      </Reveal>
    </section>
  )
}
