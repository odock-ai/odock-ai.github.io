import type { Metadata, Viewport } from 'next';
import { Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import HtmlLangSync from '@/components/html-lang-sync';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';
import { buildRootMetadata } from '@/lib/seo';
import '../globals.css';

const baseMetadata = buildRootMetadata(getSiteContent(DEFAULT_LOCALE));

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e14' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LOCALE} suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono antialiased bg-background`}>
        <HtmlLangSync />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
