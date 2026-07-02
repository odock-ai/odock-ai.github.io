import type { Metadata, Viewport } from 'next';
import { Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import HtmlLangSync from '@/components/html-lang-sync';
import { getSiteContent, isLocale, NON_DEFAULT_LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import '../../globals.css';

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

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return buildMetadata(locale, getSiteContent(locale));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono antialiased bg-background`}>
        <HtmlLangSync />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
