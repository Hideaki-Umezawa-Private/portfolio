import camelLogo from '../assets/camel.png'

const DUST = [
  { left: '8%', size: '3px', dur: '4.2s', delay: '0s' },
  { left: '18%', size: '2px', dur: '5.1s', delay: '.6s' },
  { left: '28%', size: '4px', dur: '4.6s', delay: '.2s' },
  { left: '38%', size: '2px', dur: '5.6s', delay: '1.1s' },
  { left: '50%', size: '3px', dur: '4.9s', delay: '.4s' },
  { left: '62%', size: '2px', dur: '5.3s', delay: '.9s' },
  { left: '72%', size: '4px', dur: '4.4s', delay: '.1s' },
  { left: '82%', size: '2px', dur: '5.8s', delay: '.7s' },
  { left: '90%', size: '3px', dur: '4.7s', delay: '1.3s' },
  { left: '46%', size: '2px', dur: '5.4s', delay: '1.6s' },
]

// モジュール読み込み時に一度だけ判定する(StrictModeのレンダー二重実行の影響を受けないように)。
const shouldShowIntro = (() => {
  if (typeof sessionStorage === 'undefined' || sessionStorage.getItem('sabakuIntroShown')) {
    return false
  }
  sessionStorage.setItem('sabakuIntroShown', '1')
  return true
})()

// 初回訪問時のみ表示するブランドの導入演出(セッション単位で1回)。
export function IntroSplash() {
  if (!shouldShowIntro) {
    return null
  }

  return (
    <div className="intro-splash" aria-hidden="true">
      <div className="intro-splash__base" />
      <div className="intro-splash__glow-bg" />
      <div className="intro-splash__glow-orb" />
      {DUST.map((dust, index) => (
        <span
          key={index}
          className="intro-splash__dust"
          style={{
            left: dust.left,
            width: dust.size,
            height: dust.size,
            animation: `introDust ${dust.dur} ease-in-out ${dust.delay} infinite`,
          }}
        />
      ))}
      <div className="intro-splash__content">
        <div className="intro-splash__logo">
          <img src={camelLogo} alt="砂漠の梅" />
        </div>
        <span className="intro-splash__word">砂漠の梅</span>
        <span className="intro-splash__line" />
        <span className="intro-splash__tag">the ship of the desert</span>
      </div>
    </div>
  )
}
