import { BlogIndexContent } from '@/components/blog/blog-index-content';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { formatBlogDate } from '@/lib/blog';
import {
  buildCompareIndexMetadata,
  buildCompareIndexStructuredData,
  getAllComparePosts,
  getCompareIndexCopy,
  getComparePostPath,
  getCompareUi,
} from '@/lib/compare';
import { DEFAULT_LOCALE } from '@/lib/i18n';

export const dynamic = 'force-static';

export function generateMetadata() {
  return buildCompareIndexMetadata(DEFAULT_LOCALE);
}

export default function ComparePage() {
  const posts = getAllComparePosts(DEFAULT_LOCALE);
  const [featuredPost, ...restPosts] = posts;
  const structuredData = buildCompareIndexStructuredData(DEFAULT_LOCALE);
  const categoryCount = new Set(posts.map((post) => post.category)).size;
  const latestUpdatedPost = posts.reduce((latest, post) =>
    post.updatedAt > latest.updatedAt ? post : latest
  );

  const ui = {
    ...getCompareUi(DEFAULT_LOCALE),
    description: getCompareIndexCopy(DEFAULT_LOCALE).description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DefaultLocaleContentProvider>
        <BlogIndexContent
          ui={ui}
          featuredPost={featuredPost}
          featuredPostHref={getComparePostPath(featuredPost.slug, DEFAULT_LOCALE)}
          featuredPublishedAtLabel={formatBlogDate(DEFAULT_LOCALE, featuredPost.publishedAt)}
          postCount={posts.length}
          categoryCount={categoryCount}
          latestUpdatedAtLabel={formatBlogDate(DEFAULT_LOCALE, latestUpdatedPost.updatedAt)}
          postCards={restPosts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            category: post.category,
            readingTime: post.readingTime,
            keywords: post.keywords,
            publishedAtLabel: formatBlogDate(DEFAULT_LOCALE, post.publishedAt),
            href: getComparePostPath(post.slug, DEFAULT_LOCALE),
            author: post.author,
          }))}
          structuredData={structuredData}
        />
      </DefaultLocaleContentProvider>
    </>
  );
}
