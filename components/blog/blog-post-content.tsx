'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Calendar, Tag, User, ChevronRight, Share2, Bookmark, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { BlogMarkdown } from '@/components/blog/blog-markdown';
import type { BlogPost, BlogUi } from '@/lib/blog';
import { localizePath, type Locale } from '@/lib/i18n';

function getAuthorBadge(name: string, avatarLabel?: string) {
  if (avatarLabel) {
    return avatarLabel;
  }

  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function getAuthorProfileHref(locale: Locale, pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return localizePath(pathOrUrl, locale);
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressValue = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, progressValue)));
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-14 z-40 h-1 bg-border/50">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function BlogPostContent({
  locale,
  post,
  ui,
  relatedPosts,
  structuredData: _structuredData,
  blogIndexPath,
  relatedPostPaths,
  publishedAtLabel,
  updatedAtLabel,
}: {
  locale: Locale;
  post: BlogPost;
  ui: BlogUi;
  relatedPosts: Array<BlogPost & { publishedAtLabel: string }>;
  structuredData: unknown[];
  blogIndexPath: string;
  relatedPostPaths: Record<string, string>;
  publishedAtLabel: string;
  updatedAtLabel: string;
}) {
  const [activeHeading, setActiveHeading] = useState<string>('');
  const hasMermaidChart = /^```mermaid\s*$/im.test(post.body);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px', threshold: 0 }
    );

    post.headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [post.headings]);

  useEffect(() => {
    if (!hasMermaidChart) {
      return;
    }

    void import('mermaid');
  }, [hasMermaidChart]);

  return (
    <main className="relative min-h-screen bg-background">
      <ReadingProgress />
      
      {/* Subtle background */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10">
        <Header />

        <article className="px-4 pb-24 pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href={blogIndexPath} className="transition-colors hover:text-foreground">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              {/* Main Content */}
              <div className="min-w-0">
                {/* Article Header */}
                <header className="mb-12">
                  {/* Category & Meta */}
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                      {post.category}
                    </span>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {publishedAtLabel}
                      </span>
                      {post.updatedAt !== post.publishedAt && (
                        <span className="flex items-center gap-1.5">
                          Updated: {updatedAtLabel}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    {post.title}
                  </h1>

                  {/* Description */}
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                    {post.description}
                  </p>

                  {/* Author Card */}
                  <div className="flex flex-wrap items-center gap-6 rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                        {getAuthorBadge(post.author.name, post.author.avatarLabel)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{post.author.name}</p>
                          {post.author.profileHref && (
                            <Link
                              href={getAuthorProfileHref(locale, post.author.profileHref)}
                              className="text-primary transition-colors hover:text-primary/80"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.author.bio}
                    </p>
                  </div>
                </header>

                {/* Key Takeaways - Mobile */}
                <section className="mb-10 rounded-xl border border-primary/20 bg-primary/5 p-6 lg:hidden">
                  <div className="mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {ui.takeawaysLabel}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {post.keyTakeaways.map((item, index) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Intro */}
                <section className="mb-10 rounded-xl border border-border bg-card p-6 lg:p-8">
                  <p className="text-base leading-8 text-muted-foreground lg:text-lg lg:leading-8">
                    {post.intro}
                  </p>
                </section>

                {/* Article Body */}
                <BlogMarkdown markdown={post.body} />

                {/* Key Takeaways - Bottom */}
                <section className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
                  <div className="mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">
                      {ui.takeawaysLabel}
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {post.keyTakeaways.map((item, index) => (
                      <li key={item} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {index + 1}
                        </span>
                        <p className="text-base leading-relaxed text-foreground">{item}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* FAQ Section */}
                {post.faq.length > 0 && (
                  <section className="mt-12">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
                      {ui.faqLabel}
                    </h2>
                    <div className="space-y-4">
                      {post.faq.map((item) => (
                        <details
                          key={item.question}
                          className="group rounded-xl border border-border bg-card transition-colors open:border-primary/30"
                        >
                          <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-lg font-medium text-foreground">
                            <span>{item.question}</span>
                            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                          </summary>
                          <div className="border-t border-border px-5 pb-5 pt-4">
                            <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* CTA Section */}
                <section className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 lg:p-8">
                  <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
                    {post.cta.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {post.cta.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={localizePath(post.cta.primaryHref, locale)}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <span>{post.cta.primaryLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={post.cta.secondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      <span>{post.cta.secondaryLabel}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <section className="mt-16">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
                      {ui.relatedPostsLabel}
                    </h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      {relatedPosts.map((relatedPost) => (
                        <article
                          key={relatedPost.slug}
                          className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                          <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                              {relatedPost.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {relatedPost.readingTime}
                            </span>
                          </div>
                          <h3 className="mb-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                            {relatedPost.title}
                          </h3>
                          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <Link
                            href={relatedPostPaths[relatedPost.slug]}
                            className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                          >
                            <span>{ui.readArticleLabel}</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar - Desktop */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* Author Card */}
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {ui.authorLabel}
                    </h3>
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {getAuthorBadge(post.author.name, post.author.avatarLabel)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                        {post.author.profileHref && (
                          <Link
                            href={getAuthorProfileHref(locale, post.author.profileHref)}
                            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                          >
                            <span>Profile</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Table of Contents */}
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {ui.tocLabel}
                    </h3>
                    <nav className="space-y-1">
                      {post.headings.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            section.level === 3 ? 'pl-6 text-muted-foreground' : 'font-medium'
                          } ${
                            activeHeading === section.id
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                          }`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Key Takeaways */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {ui.takeawaysLabel}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {post.keyTakeaways.map((item, index) => (
                        <li key={item} className="flex gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            {index + 1}
                          </span>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Back to Blog */}
                  <Link
                    href={blogIndexPath}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>{ui.backToBlogLabel}</span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
