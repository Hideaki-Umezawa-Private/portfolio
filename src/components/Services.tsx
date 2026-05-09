import { Section } from './Section'

const services = [
  ['🖥', 'ホームページ制作', '企業・店舗・個人の魅力を伝えるホームページをスピーディーに制作します。', 'https://hp-factory-showcase.pages.dev/'],
  ['⌘', 'Webシステム開発', '研究支援システムや業務システムなど、ご要望に合わせて設計・開発します。'],
  ['↗', '業務改善サポート', '手作業の効率化や仕組みづくりを、ご相談から一緒に解決します。'],
  ['☁', '運用・保守サポート', '公開後の更新・改善・セキュリティ対策まで、長期的に安心してご利用いただけるようサポートします。'],
]

export function Services() {
  return (
    <Section eyebrow="できること" id="service">
      <div className="service-grid">
        {services.map(([icon, title, body, link]) => (
          <article className="service-card" key={title}>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            {link && (
              <a className="service-link" href={link} target="_blank">
                関連リンクを見る
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
