import { mailToUrl } from '../data/profile'
import { Icon } from './Icon'

export function Contact() {
  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-icon" aria-hidden="true">
        <Icon name="contact" />
      </div>
      <div>
        <h2>まずはお気軽にご相談ください</h2>
        <p>
          「何から相談すればいいかわからない」という段階でも大丈夫です。
          <br className="desktop-break" />
          一緒に課題を整理し、最適な方法をご提案します。
        </p>
      </div>
      <div className="contact-actions">
        <a className="button button--primary" href={mailToUrl}>
          無料で相談してみる
        </a>
      </div>
    </section>
  )
}
