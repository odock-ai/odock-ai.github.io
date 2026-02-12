import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/footer';
import {
  getLandingContent,
  isLocale,
  localizePath,
  type Locale,
} from '@/lib/i18n';
import { buildSubpageMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getLandingContent(locale);
  return buildSubpageMetadata(
    locale as Locale,
    '/privacy',
    content.privacyPage.metadata.title,
    content.privacyPage.metadata.description
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getLandingContent(locale);
  const { privacyPage } = content;
  const infoBullets = privacyPage.sections.informationCollected.bullets;
  const usageBullets = privacyPage.sections.usage.bullets;
  const cookiesBullets = privacyPage.sections.cookies.bullets;
  const sharingBullets = privacyPage.sections.sharing.bullets;
  const retentionBullets = privacyPage.sections.retention.bullets;

  return (
    <main className="min-h-screen bg-background gradient-ocean">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 space-y-10">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-border/60 bg-card/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {privacyPage.badge}
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{privacyPage.title}</h1>
              <p className="text-lg text-muted-foreground">{privacyPage.intro}</p>
              <p className="text-sm text-muted-foreground">
                {privacyPage.lastUpdatedLabel}: {privacyPage.lastUpdatedDate}
              </p>
            </div>
            <Link
              href={localizePath('/', locale as Locale)}
              className="text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent/90"
            >
              {privacyPage.backToHomepageLabel}
            </Link>
          </div>
        </div>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">{privacyPage.sections.informationCollected.title}</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>{privacyPage.sections.informationCollected.intro}</p>
            <ul className="list-disc space-y-2 pl-5">
              {infoBullets.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-foreground">{item.label}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">{privacyPage.sections.usage.title}</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            {usageBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">{privacyPage.sections.cookies.title}</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            {cookiesBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">{privacyPage.sections.sharing.title}</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            {sharingBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">{privacyPage.sections.retention.title}</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground">
            {retentionBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">{privacyPage.sections.rights.title}</h2>
          <p className="text-sm text-muted-foreground">
            {privacyPage.sections.rights.copyBeforeEmail}{' '}
            <a className="font-semibold text-accent underline decoration-accent/50" href={`mailto:${privacyPage.email}`}>
              {privacyPage.email}
            </a>
            {privacyPage.sections.rights.copyAfterEmail}
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
