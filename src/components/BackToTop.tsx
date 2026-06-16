import { Link } from 'react-router-dom'

export function BackToTop() {
  return (
    <Link className="back-to-top" to="/">
      <span className="arrow">←</span> トップページへ
    </Link>
  )
}
