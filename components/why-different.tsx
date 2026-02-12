'use client';

import { useState } from 'react';
import { buildGridClasses } from '@/lib/layout';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLandingContent } from '@/components/providers/landing-content-provider';

type Lang = 'javascript' | 'python' | 'curl';

type TokenType =
  | 'keyword'
  | 'string'
  | 'comment'
  | 'number'
  | 'builtin'
  | 'property'
  | 'identifier'
  | 'punctuation'
  | 'whitespace';

type Token = {
  type: TokenType;
  value: string;
};

const KEYWORDS: Record<Lang, Set<string>> = {
  javascript: new Set([
    'import',
    'from',
    'const',
    'let',
    'var',
    'new',
    'await',
    'async',
    'return',
  ]),
  python: new Set(['from', 'import', 'def', 'return', 'None', 'True', 'False']),
  curl: new Set(['curl']),
};

const BUILTINS: Record<Lang, Set<string>> = {
  javascript: new Set(['OpenAI', 'console']),
  python: new Set(['OpenAI', 'print']),
  curl: new Set(['https']),
};

const PROPERTIES = new Set([
  'apiKey',
  'baseURL',
  'api_key',
  'base_url',
  'model',
  'messages',
  'content',
  'role',
]);

const TOKEN_CLASSES: Record<TokenType, string> = {
  keyword: 'text-[#569cd6]',
  string: 'text-[#ce9178]',
  comment: 'text-[#6a9955]',
  number: 'text-[#b5cea8]',
  builtin: 'text-[#4fc1ff]',
  property: 'text-[#9cdcfe]',
  identifier: 'text-[#d4d4d4]',
  punctuation: 'text-[#d4d4d4]',
  whitespace: '',
};

function tokenizeCode(code: string, lang: Lang): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    const char = code[i];
    const nextTwo = code.slice(i, i + 2);

    // Line comments
    if ((lang === 'javascript' || lang === 'curl') && nextTwo === '//') {
      const start = i;
      while (i < code.length && code[i] !== '\n') i += 1;
      tokens.push({ type: 'comment', value: code.slice(start, i) });
      continue;
    }

    if (lang === 'python' && char === '#') {
      const start = i;
      while (i < code.length && code[i] !== '\n') i += 1;
      tokens.push({ type: 'comment', value: code.slice(start, i) });
      continue;
    }

    // Strings
    if (char === '"' || char === "'") {
      const quote = char;
      const start = i;
      i += 1;
      while (i < code.length) {
        if (code[i] === '\\') {
          i += 2;
          continue;
        }
        if (code[i] === quote) {
          i += 1;
          break;
        }
        i += 1;
      }
      tokens.push({ type: 'string', value: code.slice(start, i) });
      continue;
    }

    // Whitespace
    if (/\s/.test(char)) {
      const start = i;
      while (i < code.length && /\s/.test(code[i])) i += 1;
      tokens.push({ type: 'whitespace', value: code.slice(start, i) });
      continue;
    }

    // Numbers
    if (/[0-9]/.test(char)) {
      const start = i;
      while (i < code.length && /[0-9.]/.test(code[i])) i += 1;
      tokens.push({ type: 'number', value: code.slice(start, i) });
      continue;
    }

    // Identifiers / keywords
    if (/[A-Za-z_]/.test(char)) {
      const start = i;
      while (i < code.length && /[A-Za-z0-9_-]/.test(code[i])) i += 1;
      const word = code.slice(start, i);
      if (KEYWORDS[lang].has(word)) {
        tokens.push({ type: 'keyword', value: word });
      } else if (BUILTINS[lang].has(word)) {
        tokens.push({ type: 'builtin', value: word });
      } else if (PROPERTIES.has(word)) {
        tokens.push({ type: 'property', value: word });
      } else {
        tokens.push({ type: 'identifier', value: word });
      }
      continue;
    }

    tokens.push({ type: 'punctuation', value: char });
    i += 1;
  }

  return tokens;
}

function HighlightedCode({
  code,
  lang,
  headerTitles,
}: {
  code: string;
  lang: Lang;
  headerTitles: Record<Lang, string>;
}) {
  const tokens = tokenizeCode(code, lang);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg blur-xl" />

      <div className="linux-terminal relative overflow-hidden rounded-lg border border-cyan-400/30 bg-[#0a0f0a]/95 shadow-inner">
        <div className="pointer-events-none relative z-10 flex h-8 items-center justify-between border-b border-cyan-400/20 px-3 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            {headerTitles[lang]}
          </span>
          <span className="w-10" />
        </div>

        <pre className="relative w-full px-4 pb-4 pt-4 text-[12px] leading-relaxed text-[#d4d4d4]">
          <code className="block w-full whitespace-pre-wrap break-words font-mono">
            {tokens.map((token, index) =>
              token.type === 'whitespace' ? (
                token.value
              ) : (
                <span
                  key={`${token.type}-${index}`}
                  className={TOKEN_CLASSES[token.type]}
                >
                  {token.value}
                </span>
              ),
            )}
          </code>
        </pre>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none rounded-lg" />
      </div>

      <style jsx>{`
        .linux-terminal::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            to bottom,
            rgba(34, 211, 238, 0.05) 0px,
            rgba(34, 211, 238, 0.05) 1px,
            transparent 2px,
            transparent 4px
          );
          opacity: 0.25;
        }
      `}</style>
    </div>
  );
}

export default function WhyDifferent() {
  const { content } = useLandingContent();
  const { whyDifferent } = content;
  const gridClasses = buildGridClasses(whyDifferent.layout?.grid);
  const [activeLang, setActiveLang] = useState<Lang>('python');
  const codeSnippets = whyDifferent.codeCard.codeSnippets as Record<Lang, string>;
  const headerTitles = whyDifferent.codeCard.headerTitles as Record<Lang, string>;
  const languageOrder = whyDifferent.codeCard.languageOrder as Lang[];
  const languageLabels = whyDifferent.codeCard.languageLabels as Record<Lang, string>;

  return (
    <section id={whyDifferent.id} className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className={`${gridClasses} items-center gap-10`}>
          {/* Left: copy & reasons */}
          <div className="flex flex-col items-center space-y-6 text-center lg:items-start md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              {whyDifferent.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {whyDifferent.description}
            </p>

            <div className="grid grid-cols-1 gap-4">
              {whyDifferent.reasons.map((reason: string, index: number) => (
                <Card key={index} className="p-4">
                  <CardContent className="flex items-start gap-3 p-0">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                    <p className="text-sm md:text-base text-foreground">
                      {reason}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: OpenAI-style usage card */}
          <Card className="border border-border/70 bg-card/60 backdrop-blur-sm p-6 md:p-7 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {whyDifferent.codeCard.title}
                </p>
              </div>

              <Badge
                variant="default"
                className="rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-wide "
              >
                {whyDifferent.codeCard.badge}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              {whyDifferent.codeCard.description}
            </p>
            {/* Language tabs */}
            <div className="mb-3 flex flex-wrap gap-2 text-xs font-mono">
              {languageOrder.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setActiveLang(lang)}
                  className={`rounded-full border px-3 py-1 capitalize transition-colors ${
                    activeLang === lang
                      ? 'border-accent bg-accent '
                      : 'border-border/70 bg-muted hover:bg-muted/80'
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>

            {/* Code block - responsive, no scrolling */}
            <HighlightedCode
              code={codeSnippets[activeLang]}
              lang={activeLang}
              headerTitles={headerTitles}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
