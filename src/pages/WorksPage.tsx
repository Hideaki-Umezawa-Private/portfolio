import { BackToTop } from '../components/BackToTop'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import iphoneImage from '../assets/iphone.png'
import macbookImage from '../assets/macbook.png'
import { workApproach } from '../data/works'

export function WorksPage() {
  usePageMeta({
    title: '主な実績',
    description:
      '西南学院大学 外国語学部様向けの英語音声研究用実験システムなど、砂漠の梅が手がけたWeb開発の実績と大切にしている開発アプローチをご紹介します。',
    path: '/works',
  })

  return (
    <div className="page">
      <Header activeHash="works" />

      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <span className="eyebrow">Works</span>
            <h1>主な実績</h1>
            <p>お客様と向き合いながら形にしてきた、Web開発の実績をご紹介します。</p>
          </div>
        </section>

        <section className="section section--paper" style={{ paddingTop: 0 }}>
          <div className="section-inner">
            <div className="work-grid" style={{ marginBottom: 'clamp(60px, 10vh, 110px)' }}>
              <Reveal className="work-copy">
                <span className="work-tag">西南学院大学 外国語学部様</span>
                <h2>
                  英語音声研究向け
                  <br />
                  実験システム
                </h2>
                <div className="work-stat">
                  <strong>
                    約1,300<small>名</small>
                  </strong>
                  <span>の研究参加者が利用</span>
                </div>
                <ul className="work-list">
                  <li>回答収集・反応時間計測・データ出力・音声解析</li>
                  <li>研究者が使いやすい管理画面</li>
                </ul>
              </Reveal>

              <Reveal className="work-media" delay={0.12}>
                <div className="work-media__glow" aria-hidden="true" />
                <img className="macbook-shot" src={macbookImage} alt="研究向けWebアプリのダッシュボード" />
                <img className="iphone-shot" src={iphoneImage} alt="スマートフォン画面" />
              </Reveal>
            </div>

            <Reveal className="tile-grid tile-grid--sand2">
              <div className="tile">
                <span className="tile-eyebrow">課題</span>
                <p>英語音声の研究のため、多人数の回答と反応時間を正確に収集できる仕組みが必要でした。</p>
              </div>
              <div className="tile">
                <span className="tile-eyebrow">提供内容</span>
                <p>回答収集・反応時間計測・データ出力・音声解析までを一貫して行える実験用Webシステムを構築しました。</p>
              </div>
              <div className="tile">
                <span className="tile-eyebrow">成果</span>
                <p>約1,300名の研究参加者に利用され、研究者にとって使いやすい管理画面を実現しました。</p>
              </div>
            </Reveal>

            <div className="approach-block">
              <Reveal className="approach-heading">
                <span className="eyebrow">Our Approach</span>
                <span className="rule" aria-hidden="true" />
                <span className="sub">開発において大切にしたこと</span>
              </Reveal>

              <Reveal className="tile-grid tile-grid--paper">
                {workApproach.map((item) => (
                  <div className="tile" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <ContactCta
          heading={
            <>
              あなたの挑戦を
              <br />
              サポートします
            </>
          }
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
