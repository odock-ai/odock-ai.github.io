import { notFound } from 'next/navigation';
import { BlogIndexContent } from '@/components/blog/blog-index-content';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { formatBlogDate } from '@/lib/blog';
import {
  buildCompareIndexMetadata,
  buildCompareIndexStructuredData,
  getAllComparePosts,
  getCompareIndexCopy,
  getComparePostPath,
  getCompareUi,
} from '@/lib/compare';
import { isLocale, NON_DEFAULT_LOCALES, type Locale } from '@/lib/i18n';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return buildCompareIndexMetadata(locale as Locale);
}

export default async function LocaleComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const posts = getAllComparePosts(locale);
  const [featuredPost, ...restPosts] = posts;
  const structuredData = buildCompareIndexStructuredData(locale);
  const categoryCount = new Set(posts.map((post) => post.category)).size;
  const latestUpdatedPost = posts.reduce((latest, post) =>
    post.updatedAt > latest.updatedAt ? post : latest
  );

  const ui = {
    ...getCompareUi(locale),
    description: getCompareIndexCopy(locale).description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LocalizedContentProvider locale={locale}>
        <BlogIndexContent
          ui={ui}
          featuredPost={featuredPost}
          featuredPostHref={getComparePostPath(featuredPost.slug, locale)}
          featuredPublishedAtLabel={formatBlogDate(locale, featuredPost.publishedAt)}
          postCount={posts.length}
          categoryCount={categoryCount}
          latestUpdatedAtLabel={formatBlogDate(locale, latestUpdatedPost.updatedAt)}
          postCards={restPosts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            category: post.category,
            readingTime: post.readingTime,
            keywords: post.keywords,
            publishedAtLabel: formatBlogDate(locale, post.publishedAt),
            href: getComparePostPath(post.slug, locale),
            author: post.author,
          }))}
          structuredData={structuredData}
        />
      </LocalizedContentProvider>
    </>
  );
}
