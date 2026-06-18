import { BackToTop } from '../components/BackToTop'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { processSteps } from '../data/process'

export function ProcessPage() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <span className="eyebrow">Process</span>
            <h1>制作の流れ</h1>
            <p>ご相談から公開後のサポートまで、一つひとつの工程を丁寧に進めます。要件を丁寧に言語化し、AIも活用しながらスピーディーかつ精度高く形にしていきます。</p>
          </div>
        </section>

        <section className="section section--paper" style={{ paddingTop: 0 }}>
          <div className="process-list">
            {processSteps.map((step) => (
              <Reveal key={step.no} className="process-step">
                <div className="no-col">
                  <span className="no">{step.no}</span>
                  <span className="rule" aria-hidden="true" />
                </div>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
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

      <Footer currentPage="process" />
      <BackToTop />
    </div>
  )
}
