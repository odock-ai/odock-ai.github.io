export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Odock.ai',
    url: 'https://odock.ai',
    logo: 'https://odock.ai/logo-dark.svg',
    sameAs: [
      'https://github.com/odock-ai',
      'https://x.com/odock_ai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://odock.ai/contact/',
    },
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Odock.ai',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Linux, macOS, Windows',
    url: 'https://odock.ai',
    description:
      'AI governance gateway for LLM and MCP traffic. Enforce access policies, security guardrails, budgets, quotas, routing, and compliance controls from one controlled plane.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Open-source self-hosted tier available',
    },
  };
}

export function articleSchema({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  authorName = 'Odock Editorial Team',
}: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: `https://odock.ai/blog/${slug}/`,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    image: 'https://odock.ai/odock-ai.png',
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://odock.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Odock.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://odock.ai/logo-dark.svg',
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
