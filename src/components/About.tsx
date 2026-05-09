import profilePhoto from '../assets/profile.jpg'
import { Section } from './Section'

export function About() {
  return (
    <Section eyebrow="About Me" id="about">
      <div className="about-grid">
        <h2 className="about-title">
          課題を技術で解決する、寄り添うWebパートナー。
        </h2>

        <div className="about-main">
          <img className="about-photo" src={profilePhoto} alt="Hideaki Umezawa portrait" />

          <div className="about-copy">
          <p>
            プログラミングで画面や仕組みが動き出す瞬間に、まるで魔法のような面白さを感じたことが、
            <br />
            Web開発に惹かれたきっかけです。
            <br />
            現在は、ホームページ制作やWebシステム開発、業務改善のサポートを行っています。            
            <br />
            <br />
            お客様に喜んでいただけることを励みにしながら、良い点も改善点も率直に受け止め、
            <br />
            一緒により良い形をつくることを大切にしています。
            <br />
            <br />
            「まずは相談してみたい」と思っていただけるような、身近で頼れるWebパートナーを目指しています。
          </p>
          <span className="signature">Umehide</span>
          </div>
        </div>

        <p className="about-name">梅澤 英昭 / Umezawa Hideaki</p>
      </div>
    </Section>
  )
}
