import { BackToTop } from '../components/BackToTop'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'

export function ServiceDetailPage() {
  return (
    <div className="page">
      <Header activeHash="service" />

      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <span className="eyebrow">Service</span>
            <h1>できること</h1>
            <p>Webの力で課題を整理し、最適な形へ。ご相談から公開後の運用まで、必要な工程をまとめてお任せいただけます。</p>
          </div>
        </section>

        <section className="section section--paper" style={{ paddingTop: 0 }}>
          <div className="service-card-list">
            {services.map((service) => (
              <Reveal key={service.no} className="service-card">
                <span className="bg-no" aria-hidden="true">
                  {service.no}
                </span>
                <div>
                  <span className="no">{service.no}</span>
                  <h2>{service.title}</h2>
                </div>
                <div>
                  <p className="body">{service.body}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {service.link && (
                    <a className="service-link" href={service.link} target="_blank" rel="noopener noreferrer">
                      関連リンクを見る ↗
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <ContactCta
          heading={
            <>
              まずは、お気軽に
              <br />
              ご相談ください。
            </>
          }
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
