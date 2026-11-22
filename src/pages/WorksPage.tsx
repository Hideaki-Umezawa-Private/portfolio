import { BackToTop } from '../components/BackToTop'
import { Breadcrumb } from '../components/Breadcrumb'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import iphoneImage from '../assets/iphone.png'
import macbookImage from '../assets/macbook.png'
import { workApproach } from '../data/works'

export function WorksPage() {
  usePageMeta('works')

  return (
    <div className="page">
      <Header activeHash="works" />

      <main id="main">
        <section className="case-hero">
          <div className="case-hero__inner">
            <Breadcrumb current="主な実績" tone="light" />
            <div className="case-hero__head">
              <span className="case-hero__kicker">Case Study</span>
              <p className="case-hero__client">西南学院大学 外国語学部様</p>
              <h1>
                英語音声研究向け
                <br />
                実験システム
              </h1>
            </div>
            <dl className="case-meta">
              <div>
                <dt>利用者</dt>
                <dd>
                  約<strong>1,300</strong>名の研究参加者
                </dd>
              </div>
              <div>
                <dt>主な機能</dt>
                <dd>回答収集・反応時間計測・データ出力・音声解析・管理画面</dd>
              </div>
              <div>
                <dt>担当範囲</dt>
                <dd>ヒアリング・設計・開発・運用</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="case-showcase">
          <div className="case-showcase__media">
            <img className="macbook-shot" src={macbookImage} alt="研究向けWebアプリのダッシュボード" />
            <img className="iphone-shot" src={iphoneImage} alt="スマートフォン画面" />
          </div>
        </div>

        <section className="section section--paper case-body">
          <div className="section-inner">
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
