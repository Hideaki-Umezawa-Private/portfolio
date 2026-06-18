import { BackToTop } from '../components/BackToTop'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { legalRows } from '../data/legal'
import { emailAddress } from '../data/profile'

export function PrivacyPage() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="page-hero">
          <div className="page-hero__inner">
            <span className="eyebrow">Legal</span>
            <h1>プライバシーポリシー / 特定商取引法に基づく表記</h1>
          </div>
        </section>

        <section className="section section--paper" style={{ paddingTop: 0 }}>
          <div className="legal">
            <h2>プライバシーポリシー</h2>
            <p className="intro">砂漠の梅（以下「当方」）は、本ウェブサイト（以下「本サイト」）における個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。</p>

            <h3>1. 取得する情報</h3>
            <p>お問い合わせフォームやメールでのご連絡の際に、お名前・メールアドレス・お問い合わせ内容などをご提供いただく場合があります。</p>

            <h3>2. 利用目的</h3>
            <p>取得した情報は、お問い合わせへの回答、ご依頼内容の確認・ご提案、その他必要なご連絡のためにのみ利用し、目的外の利用は行いません。</p>

            <h3>3. 第三者提供</h3>
            <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>

            <h3>4. 管理・保護</h3>
            <p>取得した個人情報は、適切に管理し、漏えい・滅失・毀損の防止に努めます。</p>

            <h3>5. 開示・訂正・削除</h3>
            <p>ご本人からの個人情報の開示・訂正・削除のご請求には、本人確認の上、法令に従い対応します。下記お問い合わせ先までご連絡ください。</p>

            <h3>6. お問い合わせ窓口</h3>
            <p>
              {/* eslint-disable-next-line no-irregular-whitespace -- 全角スペースは原本の表記に合わせている */}
              砂漠の梅　梅澤 英昭
              <br />
              メール：<a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>

            <h2 className="legal-second">特定商取引法に基づく表記</h2>
            <div className="legal-table">
              {legalRows.map((row) => (
                <div className="legal-row" key={row.label}>
                  <span className="label">{row.label}</span>
                  <span className="value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer currentPage="privacy" />
      <BackToTop />
    </div>
  )
}
