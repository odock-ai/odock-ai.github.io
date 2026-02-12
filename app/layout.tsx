import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { DEFAULT_LOCALE } from '@/lib/i18n';
import HtmlLangSync from '@/components/html-lang-sync';

import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || '';

const withBasePath = (path: string) => `${basePath}${path}`;

const geistSans = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: withBasePath('/favicon.ico'),
      },
      {
        url: withBasePath('/logo.svg'),
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <HtmlLangSync />
        {children}
      </body>
    </html>
  );
}
