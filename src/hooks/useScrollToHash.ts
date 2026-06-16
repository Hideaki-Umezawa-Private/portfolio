import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ページ遷移時、URLにhashがあれば該当セクションへ、なければ先頭へスクロールする。
// react-router の Link はブラウザ標準のアンカー挙動を発火させないため明示的に行う。
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])
}
