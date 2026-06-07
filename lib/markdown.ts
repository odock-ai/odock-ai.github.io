export type MarkdownHeading = {
  id: string;
  title: string;
  level: 2 | 3;
};

const FENCED_CODE_PATTERN = /^```([\w-]+)?\s*$/;
const IMAGE_PATTERN = /^!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]*)")?\)$/;
const LINKED_IMAGE_PATTERN = /^\[!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]*)")?\)\]\((\S+?)\)$/;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function renderInlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded-md border border-border bg-secondary/80 px-1.5 py-0.5 text-[0.9em] font-medium text-foreground">$1</code>'
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic text-foreground/90">$1</em>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary font-medium underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary/60">$1</a>'
    );
}

function renderImageBlock({
  alt,
  src,
  caption,
  href,
}: {
  alt: string;
  src: string;
  caption?: string;
  href?: string;
}) {
  const figureImage = `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" class="w-full rounded-lg border border-border bg-card object-cover shadow-sm" />`;
  const imageContent = href
    ? `<a href="${escapeHtml(href)}" class="block transition-opacity hover:opacity-90" target="_blank" rel="noopener noreferrer">${figureImage}</a>`
    : figureImage;

  return [
    '<figure class="my-10">',
    imageContent,
    caption
      ? `<figcaption class="mt-4 text-center text-sm text-muted-foreground">${renderInlineMarkdown(caption)}</figcaption>`
      : '',
    '</figure>',
  ].join('');
}

function renderCodeBlock(language: string | undefined, content: string) {
  const languageLabel = language ? escapeHtml(language) : 'code';

  return [
    '<div class="my-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">',
    `<div class="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2.5">`,
    `<span class="text-xs font-medium text-primary">${languageLabel}</span>`,
    '<span class="text-xs text-muted-foreground">snippet</span>',
    '</div>',
    `<pre class="overflow-x-auto p-5 text-sm leading-7 text-foreground"><code class="font-mono">${escapeHtml(content)}</code></pre>`,
    '</div>',
  ].join('');
}

function isImageLine(line: string) {
  return IMAGE_PATTERN.test(line) || LINKED_IMAGE_PATTERN.test(line);
}

function isFenceLine(line: string) {
  return FENCED_CODE_PATTERN.test(line);
}

function isHeadingLine(line: string) {
  return line.startsWith('## ') || line.startsWith('### ');
}

function isListLine(line: string) {
  return line.startsWith('- ');
}

function isBlockquoteLine(line: string) {
  return line.startsWith('> ');
}

export function extractMarkdownHeadings(markdown: string): MarkdownHeading[] {
  const headings: MarkdownHeading[] = [];
  let inFence = false;

  markdown
    .replace(/\r\n/g, '\n')
    .split('\n')
    .forEach((rawLine) => {
      const line = rawLine.trim();

      if (isFenceLine(line)) {
        inFence = !inFence;
        return;
      }

      if (inFence || !isHeadingLine(line)) {
        return;
      }

      const level = line.startsWith('### ') ? 3 : 2;
      const title = line.replace(/^#{2,3}\s+/, '').trim();

      headings.push({
        id: slugifyHeading(title),
        title,
        level,
      });
    });

  return headings;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) {
      index += 1;
      continue;
    }

    // Headings
    if (isHeadingLine(line)) {
      const level = line.startsWith('### ') ? 3 : 2;
      const title = line.replace(/^#{2,3}\s+/, '').trim();
      const id = slugifyHeading(title);
      
      if (level === 2) {
        blocks.push(
          `<h2 id="${id}" class="group mt-16 mb-6 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">` +
          `<a href="#${id}" class="no-underline">${renderInlineMarkdown(title)}</a>` +
          '</h2>'
        );
      } else {
        blocks.push(
          `<h3 id="${id}" class="group mt-10 mb-4 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground lg:text-2xl">` +
          `<a href="#${id}" class="no-underline">${renderInlineMarkdown(title)}</a>` +
          '</h3>'
        );
      }
      index += 1;
      continue;
    }

    // Fenced code blocks
    if (isFenceLine(line)) {
      const match = line.match(FENCED_CODE_PATTERN);
      const language = match?.[1]?.toLowerCase();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !isFenceLine(lines[index].trim())) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      blocks.push(renderCodeBlock(language, codeLines.join('\n').trim()));
      continue;
    }

    // Images
    if (isImageLine(line)) {
      const linkedMatch = line.match(LINKED_IMAGE_PATTERN);
      const imageMatch = line.match(IMAGE_PATTERN);

      if (linkedMatch) {
        blocks.push(
          renderImageBlock({
            alt: linkedMatch[1],
            src: linkedMatch[2],
            caption: linkedMatch[3],
            href: linkedMatch[4],
          })
        );
      } else if (imageMatch) {
        blocks.push(
          renderImageBlock({
            alt: imageMatch[1],
            src: imageMatch[2],
            caption: imageMatch[3],
          })
        );
      }

      index += 1;
      continue;
    }

    // Blockquotes
    if (isBlockquoteLine(line)) {
      const quoteLines: string[] = [];

      while (index < lines.length && isBlockquoteLine(lines[index].trim())) {
        quoteLines.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push(
        `<blockquote class="my-8 border-l-4 border-primary/40 bg-secondary/30 py-4 pl-6 pr-4 text-base leading-relaxed text-muted-foreground italic rounded-r-lg">${renderInlineMarkdown(quoteLines.join(' '))}</blockquote>`
      );
      continue;
    }

    // Unordered lists
    if (isListLine(line)) {
      const items: string[] = [];

      while (index < lines.length && isListLine(lines[index].trim())) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push(
        `<ul class="my-6 space-y-3 text-base leading-relaxed text-muted-foreground lg:text-lg">${items
          .map(
            (item) =>
              `<li class="relative pl-6 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">${renderInlineMarkdown(item)}</li>`
          )
          .join('')}</ul>`
      );
      continue;
    }

    // Paragraphs
    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (
        !current ||
        isHeadingLine(current) ||
        isListLine(current) ||
        isFenceLine(current) ||
        isImageLine(current) ||
        isBlockquoteLine(current)
      ) {
        break;
      }

      paragraphLines.push(current);
      index += 1;
    }

    blocks.push(
      `<p class="my-6 max-w-prose text-base leading-8 text-muted-foreground lg:text-lg lg:leading-8">${renderInlineMarkdown(
        paragraphLines.join(' ')
      )}</p>`
    );
  }

  return blocks.join('');
}
