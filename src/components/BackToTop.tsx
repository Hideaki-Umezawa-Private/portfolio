import { Link } from 'react-router-dom'
import type { ScrollRestoreState } from '../hooks/useScrollToHash'

const restoreState: ScrollRestoreState = { restoreScroll: true }

// サブページからトップページへ戻るボタン。トップページで見ていた位置に戻す。
export function BackToTop() {
  return (
    <Link className="back-to-top" to="/" state={restoreState}>
      <span className="arrow" aria-hidden="true">
        ←
      </span>
      トップページへ戻る
    </Link>
  )
}
