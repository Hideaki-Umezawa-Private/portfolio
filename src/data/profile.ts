export const emailAddress = 'umehide.dev@gmail.com'
export const githubUrl = 'https://github.com/umehide-dev'
export const xUrl = 'https://x.com/umehide_dev'

const mailSubject = 'Web・IT相談のお問い合わせ'
const mailBody = `こんにちは。

Web・IT相談について問い合わせしたいです。

【相談内容】

【現在困っていること】

【希望する進め方・時期】

【お名前】
`

// mailto の件名・本文はURL用に変換してから結合します。
export const mailToUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
  mailSubject,
)}&body=${encodeURIComponent(mailBody)}`
