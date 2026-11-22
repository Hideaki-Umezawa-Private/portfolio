import { BackToTop } from '../components/BackToTop'
import { Breadcrumb } from '../components/Breadcrumb'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { consultFormUrl, mailToUrl } from '../data/profile'
import {
  shopPlanCancelFootnote,
  shopPlanCancelNotes,
  shopPlanFeatures,
  shopPlanPrice,
  shopPlanSteps,
  shopPlanWorries,
} from '../data/shopPlan'

const priceLabel = shopPlanPrice.toLocaleString('ja-JP')

export function ShopPlanPage() {
  usePageMeta('shopPlan')

  return (
    <div className="page">
      <Header activeHash="service" />

      <main id="main">
        <section className="plan-hero">
          <div className="plan-hero__inner">
            <Breadcrumb current="お店のホームページプラン" />
            <div className="plan-hero__grid">
              <div className="plan-hero__copy">
                <p className="plan-hero__kicker">地元のお店を、もっと多くの人へ。</p>
                <h1>
                  お店専用の
                  <br />
                  ホームページを、
                  <br />
                  月々{priceLabel}円で。
                </h1>
                <p className="plan-hero__lead">
                  スマホで見やすく、お店の場所も連絡先もすぐにわかるホームページを制作します。公開から管理・更新まで、まるごとお任せいただけます。
                </p>
                <div className="plan-hero__actions">
                  <a className="button-primary" href={consultFormUrl} target="_blank" rel="noopener noreferrer">
                    無料相談フォームを開く<span className="arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="link-underline" href={mailToUrl}>
                    メールで相談する
                  </a>
                </div>
              </div>

              <dl className="plan-price">
                <div className="plan-price__main">
                  <dt>月額</dt>
                  <dd>
                    <strong>{priceLabel}</strong>円
                  </dd>
                </div>
                <div>
                  <dt>解約金・違約金</dt>
                  <dd>
                    <strong className="plan-price__sub">0</strong>円
                  </dd>
                </div>
                <div>
                  <dt>修正対応</dt>
                  <dd>月1回の軽微な修正込み</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="section-inner">
            <Reveal className="approach-heading">
              <h2 className="plan-heading">このプランに含まれる内容</h2>
              <span className="rule" aria-hidden="true" />
            </Reveal>
            <Reveal className="tile-grid tile-grid--paper">
              {shopPlanFeatures.map((feature) => (
                <div className="tile" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section section--sand2">
          <div className="section-inner plan-worries">
            <Reveal>
              <h2 className="plan-heading">こんなお悩みありませんか？</h2>
              <ul className="check-list">
                {shopPlanWorries.map((worry) => (
                  <li key={worry}>{worry}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="plan-worries__answer" delay={0.1}>
              <p>
                お客様に寄り添い、
                <br />
                魅力が伝わる
                <br />
                ホームページを制作します。
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section--paper">
          <div className="section-inner plan-cancel">
            <Reveal className="plan-cancel__badge">
              <span>解約金</span>
              <strong>
                0<small>円</small>
              </strong>
            </Reveal>
            <Reveal className="plan-cancel__body" delay={0.08}>
              <h2 className="plan-heading">解約金・違約金は発生しません。</h2>
              <ul className="check-list check-list--plain">
                {shopPlanCancelNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <p className="plan-footnote">※{shopPlanCancelFootnote}</p>
            </Reveal>
          </div>
        </section>

        <section className="section section--paper section--top-line">
          <div className="section-inner">
            <Reveal className="approach-heading">
              <h2 className="plan-heading">ご相談の流れ</h2>
              <span className="rule" aria-hidden="true" />
            </Reveal>
            <ol className="plan-steps">
              {shopPlanSteps.map((step, index) => (
                <li key={step.title} className="plan-step">
                  <Reveal delay={index * 0.06}>
                    <span className="plan-step__no" aria-hidden="true">
                      {index + 1}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="plan-steps__note">
              メールでのご相談も受け付けています。
              <a href={mailToUrl}>メールで相談する</a>
            </p>
          </div>
        </section>

        <ContactCta
          heading={
            <>
              お店のホームページ、
              <br />
              まずは無料でご相談ください。
            </>
          }
          body="「何を載せればいいかわからない」という段階でも大丈夫です。お店の魅力を一緒に整理するところからお手伝いします。"
          formUrl={consultFormUrl}
        />
      </main>

      <Footer currentPage="shopPlan" />
      <BackToTop />
    </div>
  )
}
