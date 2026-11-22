import { faqs } from './faq'
import { emailAddress, githubUrl, qiitaUrl } from './profile'
import { services } from './services'
import { shopPlanPrice } from './shopPlan'

export const SITE_URL = 'https://sabaume.com'
export const SITE_NAME = '砂漠の梅'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/camel.png`

export type PageKey = 'home' | 'service' | 'shopPlan' | 'works' | 'process' | 'faq' | 'privacy'

export type PageMeta = {
  path: string
  title: string
  description: string
  // パンくずに出す名前(ホームは不要)
  crumb?: string
  changefreq: 'monthly' | 'yearly'
  priority: number
}

// 各ページのタイトル・説明文。クライアント側の usePageMeta と、ビルド時に静的HTMLを
// 書き出す scripts/prerender.mjs の両方がここを参照する。
export const pages: Record<PageKey, PageMeta> = {
  home: {
    path: '/',
    title: '砂漠の梅｜ホームページ制作・Webシステム開発・AI導入',
    description:
      '砂漠の梅（梅澤英昭）は、ホームページ制作・Webシステム開発・ECサイト構築・AI導入・業務改善を、ご相談から公開後の運用・伴走型支援まで一貫して手がけるWebパートナーです。',
    changefreq: 'monthly',
    priority: 1,
  },
  service: {
    path: '/service',
    title: 'できること',
    description:
      'ホームページ制作、Webシステム開発、ECサイト構築、AI導入・業務自動化、業務改善サポート、伴走型支援、技術顧問・IT相談まで、砂漠の梅が提供するサービス内容をご紹介します。',
    crumb: 'できること',
    changefreq: 'monthly',
    priority: 0.8,
  },
  shopPlan: {
    path: '/shop-plan',
    title: 'お店専用ホームページ 月々4,980円プラン',
    description:
      '業種を問わず、地元のお店向けにスマホ対応・Googleマップ掲載・電話やお問い合わせへの導線つきの1ページホームページを月々4,980円で制作・公開・管理します。月1回の軽微な修正込み、解約金0円。無料相談受付中。',
    crumb: 'お店のホームページプラン',
    changefreq: 'monthly',
    priority: 0.9,
  },
  works: {
    path: '/works',
    title: '実績：英語音声研究向け実験システム',
    description:
      '西南学院大学 外国語学部様向けに開発した、約1,300名の研究参加者が利用する英語音声研究用の実験Webシステム。課題・提供内容・成果と、開発で大切にしたことをご紹介します。',
    crumb: '主な実績',
    changefreq: 'monthly',
    priority: 0.8,
  },
  process: {
    path: '/process',
    title: '制作の流れ',
    description:
      'ヒアリングから設計・仕様策定、実装、品質・セキュリティ確認、公開・運用体制の構築まで、砂漠の梅の制作プロセスをご紹介します。',
    crumb: '制作の流れ',
    changefreq: 'monthly',
    priority: 0.6,
  },
  faq: {
    path: '/faq',
    title: 'よくある質問',
    description:
      '料金や開発体制、納期、セキュリティ対応、公開後のサポート、契約方法など、砂漠の梅へのご相談前によくいただく質問にお答えします。',
    crumb: 'よくある質問',
    changefreq: 'monthly',
    priority: 0.6,
  },
  privacy: {
    path: '/privacy',
    title: 'プライバシーポリシー・特定商取引法に基づく表記',
    description:
      '砂漠の梅における個人情報の取り扱いについてのプライバシーポリシー、および特定商取引法に基づく表記を掲載しています。',
    crumb: 'プライバシーポリシー',
    changefreq: 'yearly',
    priority: 0.3,
  },
}

export const fullTitle = (meta: PageMeta) => (meta.path === '/' ? meta.title : `${meta.title}｜${SITE_NAME}`)
export const pageUrl = (meta: PageMeta) => `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`

const BUSINESS_ID = `${SITE_URL}/#business`
const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

// 全ページ共通: 事業者・代表者・サイトの関係を一つのグラフで示す(検索エンジン/AI検索向け)
const siteGraph = [
  {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    alternateName: ['Sabaku no Ume', 'さばくのうめ'],
    url: `${SITE_URL}/`,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    slogan: 'ともに、その先へ。',
    description:
      'ホームページ制作・Webシステム開発・ECサイト構築・AI導入・業務改善を、ご相談から公開後の運用まで一貫して手がけるWebパートナー。',
    email: emailAddress,
    founder: { '@id': PERSON_ID },
    areaServed: { '@type': 'Country', name: '日本' },
    availableLanguage: 'ja',
    knowsAbout: ['ホームページ制作', 'Webシステム開発', 'ECサイト構築', 'AI導入', '業務自動化', '業務改善', '伴走型支援', 'React', 'TypeScript'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: emailAddress,
      availableLanguage: 'ja',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'できること',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.body,
          url: `${SITE_URL}/service#${service.id}`,
        },
      })),
    },
    sameAs: [githubUrl, qiitaUrl],
  },
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: '梅澤 英昭',
    alternateName: 'Umezawa Hideaki',
    jobTitle: 'Webエンジニア / 代表',
    worksFor: { '@id': BUSINESS_ID },
    sameAs: [githubUrl, qiitaUrl],
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'ja',
    publisher: { '@id': BUSINESS_ID },
  },
]

function pageSpecificGraph(key: PageKey): object[] {
  const meta = pages[key]
  const url = pageUrl(meta)
  const graph: object[] = [
    {
      '@type': key === 'faq' ? ['WebPage', 'FAQPage'] : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: fullTitle(meta),
      description: meta.description,
      inLanguage: 'ja',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      ...(key === 'faq' && {
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }),
      ...(meta.crumb && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
    },
  ]

  if (meta.crumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: meta.crumb, item: url },
      ],
    })
  }

  if (key === 'shopPlan') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: 'お店専用ホームページ 月々4,980円プラン',
      serviceType: 'ホームページ制作・運用',
      description: meta.description,
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Country', name: '日本' },
      url,
      offers: {
        '@type': 'Offer',
        url,
        priceCurrency: 'JPY',
        price: shopPlanPrice,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: shopPlanPrice,
          priceCurrency: 'JPY',
          unitCode: 'MON',
          unitText: '月',
        },
      },
    })
  }

  if (key === 'works') {
    graph.push({
      '@type': 'CreativeWork',
      name: '英語音声研究向け実験システム',
      description:
        '西南学院大学 外国語学部様向けに開発した、回答収集・反応時間計測・データ出力・音声解析を一貫して行える実験用Webシステム。約1,300名の研究参加者が利用。',
      creator: { '@id': BUSINESS_ID },
      url,
    })
  }

  return graph
}

export function buildJsonLd(key: PageKey) {
  return {
    '@context': 'https://schema.org',
    '@graph': [...siteGraph, ...pageSpecificGraph(key)],
  }
}
