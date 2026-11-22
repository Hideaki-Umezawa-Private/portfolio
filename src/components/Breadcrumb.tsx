import { Link } from 'react-router-dom'

type BreadcrumbProps = {
  current: string
  // 濃色背景の上に置くとき用
  tone?: 'light' | 'dark'
}

// サブページ先頭に「ホーム / 現在のページ」を示し、ページを移動したことと現在地を分かりやすくする。
export function Breadcrumb({ current, tone = 'dark' }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className={`breadcrumb breadcrumb--${tone}`}>
      <ol>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}
