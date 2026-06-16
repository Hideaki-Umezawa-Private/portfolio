import type { ReactNode } from 'react'
import { mailToUrl } from '../data/profile'
import { Reveal } from './Reveal'

type ContactCtaProps = {
  heading: ReactNode
  body?: ReactNode
  variant?: 'home' | 'plain'
}

export function ContactCta({ heading, body, variant = 'plain' }: ContactCtaProps) {
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
        <a className="button-light" href={mailToUrl}>
          無料で相談してみる<span className="arrow">→</span>
        </a>
      </Reveal>
    </section>
  )
}
