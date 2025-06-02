import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Leonard Lai - 後端工程師 | Java 專家',
    template: '%s | Leonard Lai Portfolio',
  },
  description:
    '專精於 Java 後端開發的軟體工程師，擁有豐富的企業級系統開發經驗，致力於構建高效、可擴展的軟體解決方案。',
  keywords: [
    '後端工程師',
    'Java 開發',
    'Spring Boot',
    '微服務',
    '軟體工程師',
    'Leonard Lai',
  ],
  authors: [{ name: 'Leonard Lai' }],
  creator: 'Leonard Lai',
  publisher: 'Leonard Lai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leonard-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://leonard-portfolio.vercel.app',
    title: 'Leonard Lai - 後端工程師 | Java 專家',
    description:
      '專精於 Java 後端開發的軟體工程師，擁有豐富的企業級系統開發經驗，致力於構建高效、可擴展的軟體解決方案。',
    siteName: 'Leonard Lai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonard Lai - 後端工程師 | Java 專家',
    description:
      '專精於 Java 後端開發的軟體工程師，擁有豐富的企業級系統開發經驗，致力於構建高效、可擴展的軟體解決方案。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Leonard Lai',
  jobTitle: '後端工程師',
  description: '專精於 Java 後端開發的軟體工程師，擁有豐富的企業級系統開發經驗',
  url: 'https://leonard-portfolio.vercel.app',
  email: 'egroup.leonard@gmail.com',
  knowsAbout: [
    'Java',
    'Spring Boot',
    'MySQL',
    'PostgreSQL',
    'RESTful API',
    'Microservices',
    '微服務架構',
    '後端開發',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Software Development',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Software Engineer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
