import { Link } from 'react-router-dom'
import { BackToTop } from '../components/BackToTop'
import { Breadcrumb } from '../components/Breadcrumb'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../data/services'

export function ServiceDetailPage() {
  usePageMeta('service')

  return (
    <div className="page">
      <Header activeHash="service" />

      <main id="main">
        <section className="page-hero">
          <div className="page-hero__inner">
            <Breadcrumb current="できること" />
            <span className="eyebrow">Service</span>
            <h1>できること</h1>
            <p>Webの力で課題を整理し、最適な形へ。ご相談から公開後の運用まで、必要な工程をまとめてお任せいただけます。</p>
          </div>
        </section>

        <section className="section section--paper" style={{ paddingTop: 0 }}>
          <div className="service-card-list">
            {services.map((service) => (
              <Reveal key={service.id} id={service.id} className="service-card">
                <h2>{service.title}</h2>
                <div>
                  <p className="body">{service.body}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {service.id === 'website' && (
                    <Link className="plan-callout" to="/shop-plan">
                      <span className="plan-callout__label">お店向け</span>
                      <span className="plan-callout__text">
                        お店専用のホームページが<strong>月々4,980円</strong>で持てるプランもあります
                      </span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  )}
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
