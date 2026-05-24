import type { ReactNode } from 'react'

type IconName =
  | 'chat'
  | 'idea'
  | 'support'
  | 'desktop'
  | 'code'
  | 'growth'
  | 'cloud'
  | 'contact'
  | 'mail'

type IconProps = {
  name: IconName
  className?: string
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}

const paths: Record<IconName, ReactNode> = {
  chat: (
    <>
      <path d="M5.5 6.5h13v8.5h-8l-4.5 3v-3H5.5z" />
      <path d="M8.5 9.5h7" />
      <path d="M8.5 12h4.5" />
    </>
  ),
  idea: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.2 13.4a6 6 0 1 1 7.6 0c-.9.7-1.3 1.5-1.3 2.6h-5c0-1.1-.4-1.9-1.3-2.6z" />
      <path d="M12 5.2v2.2" />
    </>
  ),
  support: (
    <>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
      <path d="M9.2 11.6h5.6" />
    </>
  ),
  desktop: (
    <>
      <path d="M4 5h16v10H4z" />
      <path d="M9 19h6" />
      <path d="M12 15v4" />
    </>
  ),
  code: (
    <>
      <path d="M9 8l-4 4 4 4" />
      <path d="M15 8l4 4-4 4" />
      <path d="M13 6l-2 12" />
    </>
  ),
  growth: (
    <>
      <path d="M5 17l5-5 3 3 6-7" />
      <path d="M15 8h4v4" />
      <path d="M5 20h14" />
    </>
  ),
  cloud: (
    <>
      <path d="M7.5 17.5h9a4 4 0 0 0 .4-8 5.2 5.2 0 0 0-10-1.3A4.7 4.7 0 0 0 7.5 17.5z" />
      <path d="M9 14h6" />
    </>
  ),
  contact: (
    <>
      <path d="M5 7h14v10H5z" />
      <path d="M5.5 7.5l6.5 5 6.5-5" />
      <path d="M8 17l3-3" />
      <path d="M16 17l-3-3" />
    </>
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
}
