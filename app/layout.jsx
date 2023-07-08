import 'prismjs/themes/prism-okaidia.css'
import '@style/site.css'

import Footer from '@component/Footer'
import Header from '@component/Header'
import HeaderBanner from '@component/HeaderBanner'

export const metadata = {
  title: 'Free Open Source Tailwind CSS Components | GPTUI',
  description:
    'Free Tailwind CSS components that can be used in your next project.',
  openGraph: {
    title: 'Free Open Source Tailwind CSS Components | GPTUI',
    description:
      'Free Tailwind CSS components that can be used in your next project.',
    url: 'https://www.gptui.dev/',
    siteName: 'GPTUI',
    type: 'website',
    image: 'https://www.gptui.dev/og.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Open Source Tailwind CSS Components | GPTUI',
    description:
      'Free Tailwind CSS components that can be used in your next project.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html className="h-full scroll-smooth" lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body className="bg-slate-900 antialiased">
        <Header />
        {/* <HeaderBanner /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
