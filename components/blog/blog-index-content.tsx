'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Tag, User, ChevronRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { BlogPostGrid } from '@/components/blog/blog-post-grid';
import type { BlogPost, BlogUi } from '@/lib/blog';

type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  keywords: string[];
  publishedAtLabel: string;
  href: string;
  author: {
    name: string;
    role: string;
    avatarLabel?: string;
  };
};

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

export function BlogIndexContent({
  ui,
  featuredPost,
  featuredPostHref,
  featuredPublishedAtLabel,
  postCards,
  structuredData: _structuredData,
  postCount,
  categoryCount,
  latestUpdatedAtLabel,
}: {
  ui: BlogUi;
  featuredPost: BlogPost;
  featuredPostHref: string;
  featuredPublishedAtLabel: string;
  postCards: BlogCard[];
  structuredData: unknown;
  postCount: number;
  categoryCount: number;
  latestUpdatedAtLabel: string;
}) {
  const archiveStats = [
    { label: ui.allPostsLabel, value: String(postCount).padStart(2, '0'), icon: Sparkles },
    { label: ui.topicsLabel, value: String(categoryCount).padStart(2, '0'), icon: Tag },
    { label: ui.updatedLabel, value: latestUpdatedAtLabel, icon: Calendar },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle background patterns */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />
      <div className="fixed inset-0 grid-pattern-large pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute left-1/4 top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-24 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div aria-hidden="true" className="fixed inset-0 z-[5] scanline pointer-events-none" />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="px-4 pb-16 pt-28 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Blog</span>
            </nav>

            {/* Page Header */}
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-primary pulse-glow" />
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {ui.badge}
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {ui.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                {ui.description}
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 border-t border-border pt-8 lg:gap-12">
              {archiveStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="px-4 pb-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                {ui.featuredLabel}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
                {/* Content Side */}
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    {/* Meta */}
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {featuredPublishedAtLabel}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {featuredPost.readingTime}
                        </span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
                      {featuredPost.excerpt}
                    </p>

                    {/* Keywords */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {featuredPost.keywords.slice(0, 4).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {getAuthorBadge(featuredPost.author.name, featuredPost.author.avatarLabel)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{featuredPost.author.name}</p>
                        <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={featuredPostHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <span>{ui.readArticleLabel}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Key Takeaways Side */}
                <div className="border-t border-border bg-secondary/30 p-8 lg:border-l lg:border-t-0 lg:p-12">
                  <div className="mb-6 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-medium uppercase tracking-wider text-primary">
                      {ui.takeawaysLabel}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {featuredPost.keyTakeaways.map((item, index) => (
                      <li key={item} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="px-4 pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {ui.allPostsLabel}
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                  {ui.archiveHeadline}
                </h2>
              </div>
            </div>

            <BlogPostGrid
              posts={postCards}
              readArticleLabel={ui.readArticleLabel}
              loadMoreLabel={ui.loadMoreLabel}
            />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
