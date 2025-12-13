import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { buildMetadata } from '@/lib/seo';
import { CookieConsent } from "@/components/cookie-consent"

import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || '';
const googleAnalyticsId = process.env.NEXT_PUBLIC_G_ANALYTICS


const withBasePath = (path: string) => `${basePath}${path}`;

const geistSans = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = buildMetadata();

  return {
    ...baseMetadata,
    icons: {
      icon: [
        {
          url: withBasePath('/icon-light-32x32.png'),
          media: '(prefers-color-scheme: light)',
        },
        {
          url: withBasePath('/icon-dark-32x32.png'),
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: withBasePath('/icon.svg'),
          type: 'image/svg+xml',
        },
      ],
      apple: withBasePath('/apple-icon.png'),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`font-sans antialiased`}>
        {children}
        <CookieConsent gaId={googleAnalyticsId} />

      </body>
    </html>
  );
}
