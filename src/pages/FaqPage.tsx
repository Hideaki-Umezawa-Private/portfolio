import { BackToTop } from '../components/BackToTop'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { faqs } from '../data/faq'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export function FaqPage() {
  usePageMeta({
    title: 'よくある質問',
    description:
      '料金や開発体制、セキュリティ対応、公開後のサポートなど、砂漠の梅へのご相談前によくいただく質問にお答えします。',
    path: '/faq',
  })

  return (
    <div className="page">
      {/* faqデータからFAQPage構造化データを生成し、検索結果でのQ&Aリッチリザルト表示を狙う */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />

      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <span className="eyebrow">FAQ</span>
            <h1>よくある質問</h1>
            <p>ご相談前によくいただく質問をまとめました。その他ご不明な点はお気軽にお問い合わせください。</p>
          </div>
        </section>

        <section className="section section--paper" style={{ paddingTop: 0 }}>
          <div className="faq-list">
            {faqs.map((faq) => (
              <Reveal key={faq.q} className="faq-item">
                <div className="faq-row">
                  <span className="qa-mark">Q</span>
                  <h2>{faq.q}</h2>
                </div>
                <div className="faq-row answer">
                  <span className="qa-mark">A</span>
                  <p>{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <ContactCta
          heading={
            <>
              解決しない疑問は、
              <br />
              そのままご相談ください。
            </>
          }
        />
      </main>

      <Footer currentPage="faq" />
      <BackToTop />
    </div>
  )
}
