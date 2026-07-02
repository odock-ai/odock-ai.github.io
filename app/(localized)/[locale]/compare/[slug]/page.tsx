import { notFound } from 'next/navigation';
import { BlogPostContent } from '@/components/blog/blog-post-content';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { formatBlogDate } from '@/lib/blog';
import {
  buildComparePostMetadata,
  buildComparePostStructuredData,
  getAllComparePosts,
  getCompareIndexPath,
  getComparePost,
  getCompareUi,
  getRelatedComparePostPath,
  getRelatedComparePosts,
} from '@/lib/compare';
import { isLocale, NON_DEFAULT_LOCALES, type Locale } from '@/lib/i18n';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.flatMap((locale) =>
    getAllComparePosts().map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = getComparePost(slug, locale as Locale);
  if (!post) notFound();

  return buildComparePostMetadata(locale as Locale, post);
}

export default async function LocaleComparePostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const post = getComparePost(slug, locale);
  if (!post) notFound();
  const relatedPosts = getRelatedComparePosts(post, locale);
  const structuredData = buildComparePostStructuredData(locale, post);

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LocalizedContentProvider locale={locale}>
        <BlogPostContent
          locale={locale}
          post={post}
          ui={getCompareUi(locale)}
          relatedPosts={relatedPosts.map((relatedPost) => ({
            ...relatedPost,
            publishedAtLabel: formatBlogDate(locale, relatedPost.publishedAt),
          }))}
          structuredData={structuredData}
          blogIndexPath={getCompareIndexPath(locale)}
          relatedPostPaths={Object.fromEntries(
            relatedPosts.map((relatedPost) => [
              relatedPost.slug,
              getRelatedComparePostPath(relatedPost.slug, locale),
            ])
          )}
          publishedAtLabel={formatBlogDate(locale, post.publishedAt)}
          updatedAtLabel={formatBlogDate(locale, post.updatedAt)}
        />
      </LocalizedContentProvider>
    </>
  );
}
