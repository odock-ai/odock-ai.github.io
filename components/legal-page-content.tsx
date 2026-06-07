'use client';

import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { localizePath, type Locale, type SiteContent } from '@/lib/i18n';

type LegalPageContentProps = {
  locale: Locale;
  content: SiteContent;
  page: 'privacyPage' | 'termsPage';
};

export function LegalPageContent({
  locale,
  content,
  page,
}: LegalPageContentProps) {
  const pageContent = content[page];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="fixed inset-0 z-0 grid-pattern pointer-events-none opacity-40" />
      <div className="fixed inset-0 z-0 grid-pattern-large pointer-events-none opacity-20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="fixed inset-0 z-[5] scanline pointer-events-none" />

      <div className="relative z-10">
        <Header />
        <section className="px-4 pb-20 pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex border border-border bg-card px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
              {pageContent.badge}
            </div>
            <h1 className="mb-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {pageContent.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {pageContent.intro}
            </p>

            <div className="mt-10 border border-border bg-card/50 p-6 backdrop-blur">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5 text-sm text-muted-foreground">
                <span>
                  {pageContent.lastUpdatedLabel}: {pageContent.lastUpdatedDate}
                </span>
                <Link
                  href={localizePath('/', locale)}
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  {pageContent.backToHomepageLabel}
                </Link>
              </div>

              {page === 'termsPage' ? (
                <div className="space-y-8">
                  {content.termsPage.sections.map((section) => (
                    <section key={section.title} className="space-y-3">
                      <h2 className="text-2xl font-medium text-foreground">{section.title}</h2>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-muted-foreground md:text-base">
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets ? (
                        <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-muted-foreground md:text-base">
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {Object.values(content.privacyPage.sections).map((section) => (
                    <section key={section.title} className="space-y-3">
                      <h2 className="text-2xl font-medium text-foreground">{section.title}</h2>
                      {'intro' in section && section.intro ? (
                        <p className="text-sm leading-7 text-muted-foreground md:text-base">{section.intro}</p>
                      ) : null}
                      {section.bullets ? (
                        <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-muted-foreground md:text-base">
                          {section.bullets.map((bullet) =>
                            typeof bullet === 'string' ? (
                              <li key={bullet}>{bullet}</li>
                            ) : (
                              <li key={`${bullet.label}-${bullet.text}`}>
                                <strong className="text-foreground">{bullet.label}</strong> {bullet.text}
                              </li>
                            )
                          )}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
