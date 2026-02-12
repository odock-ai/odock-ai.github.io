import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/footer';
import {
  getLandingContent,
  isLocale,
  localizePath,
  type Locale,
} from '@/lib/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getLandingContent(locale);
  return {
    title: content.termsPage.metadata.title,
    description: content.termsPage.metadata.description,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getLandingContent(locale);
  const { termsPage } = content;

  return (
    <main className="min-h-screen bg-background gradient-ocean">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-10">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-border/60 bg-card/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {termsPage.badge}
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{termsPage.title}</h1>
              <p className="text-lg text-muted-foreground">{termsPage.intro}</p>
              <p className="text-sm text-muted-foreground">
                {termsPage.lastUpdatedLabel}: {termsPage.lastUpdatedDate}
              </p>
            </div>
            <Link
              href={localizePath('/', locale as Locale)}
              className="text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent/90"
            >
              {termsPage.backToHomepageLabel}
            </Link>
          </div>
        </div>

        {termsPage.sections.map((section) => (
          <section
            key={section.title}
            className={`rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur ${
              section.contactPrefix ? 'space-y-3' : 'space-y-5'
            }`}
          >
            <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-sm text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.contactPrefix ? (
              <p className="text-sm text-muted-foreground">
                {section.contactPrefix}{' '}
                <a className="font-semibold text-accent underline decoration-accent/50" href={`mailto:${termsPage.email}`}>
                  {termsPage.email}
                </a>
                {section.contactSuffix}
              </p>
            ) : null}
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
