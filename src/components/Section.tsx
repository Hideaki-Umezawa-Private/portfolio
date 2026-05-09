import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow: string
  id?: string
  children: ReactNode
}

export function Section({ eyebrow, id, children }: SectionProps) {
  return (
    <section className="content-section section-shell" id={id}>
      <div className="section-kicker">
        <span className="dot" />
        {eyebrow}
      </div>
      {children}
    </section>
  )
}
