import iphoneImage from '../assets/iphone.png'
import macbookImage from '../assets/macbook.png'
import { Section } from './Section'

export function Works() {
  return (
    <Section eyebrow="主な実績" id="works">
      <div className="work-card">
        <div className="project-copy">
          <span className="project-label">大学研究向けWebアプリ</span>
          <h2>
            英語音声研究向け
            <br />
            実験システム
          </h2>
          <div className="project-achievement">
            <strong>約1,300名</strong>
            <span>の研究参加者が利用</span>
          </div>
          <p>
            大学の研究室で使用されている、英語リスニング研究のための
            <br />
            Webアプリケーションを開発しました。
          </p>
          <ul>
            <li>回答収集・反応時間計測・データ出力機能</li>
            <li>研究者が使いやすい管理画面</li>
            <li>AWSを活用した安全でスケーラブルな構成</li>
          </ul>
        </div>

        <div className="project-device-media" aria-label="University research application screenshots">
          <img
            className="macbook-shot"
            src={macbookImage}
            alt="大学研究向けWebアプリのダッシュボード画面"
          />
          <img
            className="iphone-shot"
            src={iphoneImage}
            alt="大学研究向けWebアプリのスマートフォン画面"
          />
        </div>
      </div>
    </Section>
  )
}
