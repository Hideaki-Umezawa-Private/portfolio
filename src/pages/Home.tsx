import { Link } from 'react-router-dom'
import desertBg from '../assets/desert-bg.jpg'
import iphoneImage from '../assets/iphone.png'
import macbookImage from '../assets/macbook.png'
import cameLIllustration from '../assets/camel-illustration.png'
import profilePhoto from '../assets/profile.jpg'
import { ContactCta } from '../components/ContactCta'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { IntroSplash } from '../components/IntroSplash'
import { Reveal } from '../components/Reveal'
import { githubUrl, mailToUrl, qiitaUrl } from '../data/profile'
import { services } from '../data/services'

export function Home() {
  return (
    <div className="page">
      <IntroSplash />
      <div className="desert-bg" style={{ backgroundImage: `url(${desertBg})` }} aria-hidden="true" />
      <div className="desert-veil" aria-hidden="true" />

      <Header scrollSpy transparentAtTop />

      <main>
        <section id="top" className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__inner">
            <Reveal className="hero__tagline">
              <span className="rule" aria-hidden="true" />
              <span>the ship of the desert</span>
            </Reveal>

            <Reveal>
              <h1>
                ともに、
                <br />
                <span className="underline-wrap">
                  その先へ。
                  <svg className="hero-underline" viewBox="0 0 320 40" aria-hidden="true">
                    <path
                      d="M6 26 C80 38 180 34 250 20 C280 15 300 16 314 20"
                      fill="none"
                      stroke="#B0693B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="1"
                      strokeDashoffset="1"
                      pathLength={1}
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="lead">
                あなたに寄り添い、ともに前へ進める<span className="accent">パートナー</span>です。
              </p>
            </Reveal>

            <Reveal className="hero__actions">
              <a className="button-primary" href={mailToUrl}>
                無料で相談してみる<span className="arrow">→</span>
              </a>
              <a className="link-underline" href="#story">
                ブランドの物語を読む
              </a>
            </Reveal>
          </div>

          <a className="scroll-hint" href="#story" aria-label="scroll">
            <span className="label">scroll</span>
            <span className="track">
              <span className="dot" />
            </span>
          </a>
        </section>

        <section id="service" className="section section--paper">
          <div className="section-inner">
            <Reveal className="section-heading">
              <span className="eyebrow">01 — Service</span>
              <span className="rule" aria-hidden="true" />
            </Reveal>
            <div className="section-title-row">
              <h2>できること</h2>
              <Link className="detail-link" to="/service">
                詳細を見る →
              </Link>
            </div>

            <div className="service-row-list">
              {services.map((service) => (
                <Reveal key={service.no} className="service-row">
                  <span className="label">
                    <span className="no">{service.no}</span>
                    <span className="title">{service.title}</span>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="section section--sand2">
          <div className="section-inner">
            <Reveal className="section-heading">
              <span className="eyebrow">02 — Works</span>
              <span className="rule" aria-hidden="true" />
            </Reveal>
            <div className="section-title-row">
              <h2>主な実績</h2>
              <Link className="detail-link" to="/works">
                詳細を見る →
              </Link>
            </div>

            <div className="work-grid">
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
          </div>
        </section>

        <section id="story" className="section section--paper section--top-line">
          <div className="section-inner">
            <Reveal className="section-heading">
              <span className="eyebrow">03 — Story</span>
              <span className="rule" aria-hidden="true" />
              <span className="sub">はじまりの、ひとこと。</span>
            </Reveal>

            <Reveal className="story-quote">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <span className="accent">「</span>
              <span className="text">ラクダに似ているね。</span>
              <span className="accent">」</span>
            </Reveal>

            <div className="story-grid">
              <Reveal className="story-copy" delay={0.1}>
                <p>代表が昔からよく言われてきた、この一言が、ブランドの始まりでした。</p>
                <p>
                  調べてみると、ラクダは<span className="underline">「砂漠の船」</span>
                  と呼ばれ、過酷な環境でも、人や荷物を目的地まで運ぶ存在だと知りました。
                </p>
                <p>その姿に、私たちが目指す仕事のあり方を重ねました。お客様の挑戦に寄り添い、ともに前へ進み、目的地まで支え続ける。</p>
                <p className="muted">そんな想いを込めて生まれたブランドが、</p>
                <p className="brand-line">「砂漠の梅」です。</p>
              </Reveal>

              <Reveal delay={0.16}>
                <figure className="story-figure">
                  <div className="frame">
                    <img src={cameLIllustration} alt="ラクダのイラスト" />
                  </div>
                  <figcaption>“The ship of the desert”</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="section section--paper">
          <div className="section-inner">
            <Reveal className="section-heading">
              <span className="eyebrow">04 — About</span>
              <span className="rule" aria-hidden="true" />
            </Reveal>

            <div className="about-grid">
              <Reveal className="about-photo-wrap">
                <div className="frame">
                  <img src={profilePhoto} alt="梅澤英昭のポートレート" />
                </div>
                <div className="caption">
                  <p className="name">梅澤 英昭</p>
                  <p className="romaji">Umezawa Hideaki / Founder</p>
                </div>
              </Reveal>

              <Reveal className="about-body" delay={0.1}>
                <h2>
                  課題を技術で解決する、
                  <br />
                  寄り添うWebパートナー。
                </h2>
                <div className="about-copy">
                  <p>プログラミングで、画面や仕組みが動き出す瞬間。まるで魔法のようなその面白さに惹かれたことが、Web開発の原点でした。</p>
                  <p>お客様に喜んでいただけることを励みに、良い点も改善点も率直に受け止め、一緒により良い形をつくることを大切にしています。</p>
                  <p className="muted">「まずは相談してみたい」と思っていただける、身近で頼れる存在でありたいと思っています。</p>
                </div>
                <div className="about-links">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    GITHUB
                  </a>
                  <a href={qiitaUrl} target="_blank" rel="noopener noreferrer">
                    QIITA
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="info-links section--top-line">
          <div className="info-links__inner">
            <Reveal>
              <Link className="info-link" to="/faq">
                <span className="label">
                  <span className="tag">FAQ</span>
                  <span className="title">よくあるご質問</span>
                </span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <Link className="info-link info-link--last" to="/privacy">
                <span className="label">
                  <span className="tag">Privacy</span>
                  <span className="title">プライバシーポリシー</span>
                </span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        <div id="contact">
          <ContactCta
            variant="home"
            heading={
              <>
                まずは、お気軽に
                <br />
                ご相談ください。
              </>
            }
            body="「何から相談すればいいかわからない」——その段階でも大丈夫です。一緒に課題を整理し、目的地までの最適な道のりをご提案します。"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
