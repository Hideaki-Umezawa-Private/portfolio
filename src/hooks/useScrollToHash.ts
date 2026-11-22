import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType, type Location } from 'react-router-dom'

export type ScrollRestoreState = { restoreScroll?: boolean }

// 履歴エントリごとのスクロール位置(ブラウザの「戻る」で元の位置に戻すため)
const positionsByKey = new Map<string, number>()
// トップページで最後に見ていた位置(「トップページへ」ボタンで戻すため)
let lastHomeScrollY = 0

// 画像の読み込みなどでページの高さが足りないうちは目的の位置まで届かないため、
// 届くまで少しの間だけ再試行する。
function scrollToRestored(y: number) {
  let tries = 0
  const attempt = () => {
    window.scrollTo({ top: y, behavior: 'instant' })
    if (Math.abs(window.scrollY - y) > 2 && tries++ < 40) {
      window.setTimeout(attempt, 25)
    }
  }
  attempt()
}

// ページ遷移時のスクロール位置を制御する。
// - ブラウザの戻る/進む: そのページで見ていた位置へ戻す
// - 「トップページへ」ボタン(state.restoreScroll): トップページで最後に見ていた位置へ戻す
// - URLに hash がある: 該当セクションへ
// - それ以外の新しいページ: 先頭へ
export function useScrollToHash() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const currentLocation = useRef<Location>(location)

  // スクロールイベントより先に「今どのページか」を更新しておき、遷移直後の
  // スクロールが前のページの位置として記録されないようにする。
  useLayoutEffect(() => {
    currentLocation.current = location
  }, [location])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const onScroll = () => {
      const { key, pathname } = currentLocation.current
      positionsByKey.set(key, window.scrollY)
      if (pathname === '/') lastHomeScrollY = window.scrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const state = location.state as ScrollRestoreState | null

    if (navigationType === 'POP' && positionsByKey.has(location.key)) {
      scrollToRestored(positionsByKey.get(location.key) ?? 0)
      return
    }

    if (state?.restoreScroll && location.pathname === '/') {
      scrollToRestored(lastHomeScrollY)
      return
    }

    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
    // location.key が変わったとき(=遷移したとき)だけ実行する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key])
}
