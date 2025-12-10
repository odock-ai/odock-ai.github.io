'use client';

import { useState } from 'react';
import landingContent from '@/lib/landing-content.json';
import { buildGridClasses } from '@/lib/layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

const { whyDifferent } = landingContent;

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

const CODE_SNIPPETS: Record<Lang, string> = {
  javascript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "YOUR_VIRTUAL_API_KEY",
  baseURL: "https://your-gateway-url", // ← replace with your URL
});

const response = await client.chat.completions.create({
  model: "any-model",
  messages: [
    { role: "user", content: "Say hello from your gateway." },
  ],
});

console.log(response.choices[0].message.content);`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="YOUR_VIRTUAL_API_KEY",
    base_url="https://your-gateway-url",  # ← replace with your URL
)

response = client.chat.completions.create(
    model="any-model",
    messages=[
        {"role": "user", "content": "Say hello from your gateway."},
    ],
)

print(response.choices[0].message.content)`,
  curl: `curl https://your-gateway-url/chat/completions \\
  -H "Authorization: Bearer YOUR_VIRTUAL_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "any-model",
    "messages": [
      {"role": "user", "content": "Say hello from your gateway."}
    ]
  }'`,
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

// NEW: per-language header titles
const HEADER_TITLES: Record<Lang, string> = {
  javascript: 'inference.js — nano',
  python: 'inference.py — nano',
  curl: 'inference.sh — nano',
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

function HighlightedCode({ code, lang }: { code: string; lang: Lang }) {
  const tokens = tokenizeCode(code, lang);

  return (
    <div className="relative overflow-hidden rounded-lg border border-border/70 bg-gradient-to-br from-[#0f172a] via-[#0c1224] to-[#0d162c] shadow-inner">
      {/* Linux-style window header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-7 items-center justify-between border-b border-white/5 bg-black/30 px-3 text-[11px] text-zinc-300">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-emerald-400/80" />
          <span className="font-mono text-[11px] text-zinc-300">
            {HEADER_TITLES[lang]}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border border-white/15 text-[9px] leading-none">
            _
          </span>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border border-white/15 text-[9px] leading-none">
            🗗
          </span>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border border-white/15 text-[9px] leading-none">
            ×
          </span>
        </div>
      </div>

      <pre className="relative w-full px-4 pb-4 pt-10 text-[12px] leading-relaxed text-[#d4d4d4]">
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
    </div>
  );
}

export default function WhyDifferent() {
  const gridClasses = buildGridClasses(whyDifferent.layout?.grid);
  const [activeLang, setActiveLang] = useState<Lang>('python');

  return (
    <section id="why-different" className="relative py-24 px-4">
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
                  OpenAI-style usage
                </p>
              </div>

              <Badge
                variant="default"
                className="rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-wide "
              >
                Drop-in compatible
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              Just replace the URL and virtual API key.
            </p>
            {/* Language tabs */}
            <div className="mb-3 flex flex-wrap gap-2 text-xs font-mono">
              {(['python', 'javascript', 'curl'] as Lang[]).map((lang) => (
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
                  {lang === 'javascript' ? 'JavaScript' : lang}
                </button>
              ))}
            </div>

            {/* Code block - responsive, no scrolling */}
            <HighlightedCode
              code={CODE_SNIPPETS[activeLang]}
              lang={activeLang}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
