import { useEffect, useRef, useState } from 'react'
import profilePhoto from '../assets/profile.jpg'
import { Section } from './Section'

export function About() {
  const photoRef = useRef<HTMLImageElement>(null)
  const [isPhotoVisible, setIsPhotoVisible] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const photo = photoRef.current

    if (!photo || isPhotoVisible) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPhotoVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.3,
      },
    )

    observer.observe(photo)

    return () => observer.disconnect()
  }, [isPhotoVisible])

  return (
    <Section eyebrow="About Me" id="about">
      <div className="about-grid">
        <h2 className="about-title">
          課題を技術で解決する、寄り添うWebパートナー。
        </h2>

        <div className="about-main">
          <img
            className={`about-photo${isPhotoVisible ? ' is-visible' : ''}`}
            ref={photoRef}
            src={profilePhoto}
            alt="梅澤英昭のポートレート写真"
          />

          <div className="about-copy">
          <p>
            プログラミングで画面や仕組みが動き出す瞬間に、まるで魔法のような面白さを感じたことが、
            <br className="desktop-break" />
            Web開発に惹かれたきっかけです。
            <br className="desktop-break" />
            現在は、ホームページ制作やWebシステム開発、業務改善のサポートを行っています。            
            <br />
            <br />
            お客様に喜んでいただけることを励みにしながら、良い点も改善点も率直に受け止め、
            <br className="desktop-break" />
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
