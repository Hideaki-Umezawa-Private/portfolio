export const emailAddress = 'hideaki.umezawa.works@gmail.com'
export const githubUrl = 'https://github.com/Hideaki-Umezawa-Private'
export const qiitaUrl = 'https://qiita.com/ume_hide'

const mailSubject = 'Web・IT相談のお問い合わせ'
const mailBody = `こんにちは。

Web・IT相談について問い合わせしたいです。

【相談内容】

【現在困っていること】

【希望する進め方・時期】

【お名前】
`

const encodeMailBody = (body: string) =>
  encodeURIComponent(body).replace(/%0A/g, '%0D%0A')

// mailto の件名・本文はURL用に変換してから結合します。
export const mailToUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
  mailSubject,
)}&body=${encodeMailBody(mailBody)}`
