'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

type CodeSnippetProps = {
  filename: string;
  code: string;
  copyLabel?: string;
  copiedLabel?: string;
};

export function CodeSnippet({
  filename,
  code,
  copyLabel = 'Copy',
  copiedLabel = 'Copied',
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-destructive/60" />
            <div className="h-2 w-2 rounded-full bg-chart-3/60" />
            <div className="h-2 w-2 rounded-full bg-primary/60" />
          </div>
          <span className="ml-3 truncate text-[10px] text-muted-foreground">{filename}</span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>

      <div className="overflow-x-auto p-4">
        <div className="min-w-full font-mono text-xs leading-6 text-foreground">
          <code className="block min-w-full">
            {code.split('\n').map((line, index) => (
              <div key={`${filename}-${index}`} className="grid grid-cols-[2.5rem_minmax(0,1fr)]">
                <span className="select-none pr-4 text-right text-muted-foreground/70">
                  {index + 1}
                </span>
                <span className="whitespace-pre">{renderHighlightedLine(line)}</span>
              </div>
            ))}
          </code>
        </div>
      </div>
    </div>
  );
}

function renderHighlightedLine(line: string): ReactNode {
  if (!line) {
    return <span>&nbsp;</span>;
  }

  if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
    return <span className="text-muted-foreground">{line}</span>;
  }

  const tokens = line.match(
    /https?:\/\/[^\s\\]+|"(?:[^"\\]|\\.)*"(?=\s*:)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\bODOCK_[A-Z_]+\b|\b(?:curl|import|from|const|new|await|return|print|requests|Client|OpenAI|StreamableHTTPClientTransport|Authorization|Content-Type|jsonrpc|method|params|headers|response|timeout|name|arguments)\b|-[A-Za-z]|\b\d+(?:\.\d+)?\b/g
  );

  if (!tokens) {
    return <span>{line}</span>;
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  tokens.forEach((token, index) => {
    const start = line.indexOf(token, cursor);

    if (start > cursor) {
      parts.push(line.slice(cursor, start));
    }

    let className = 'text-foreground';

    if (/ODOCK_[A-Z_]+|api\.odock\.ai|github-tools-http/.test(token)) {
      className = 'text-emerald-500';
    } else if (
      /^https?:\/\//.test(token) ||
      /^-[A-Za-z]$/.test(token) ||
      /^(Authorization|Content-Type|jsonrpc|method|params|headers|name|arguments)$/.test(token)
    ) {
      className = 'text-chart-2';
    } else if (
      /^"(?:[^"\\]|\\.)*"$/.test(token) ||
      /^'(?:[^'\\]|\\.)*'$/.test(token) ||
      /^`(?:[^`\\]|\\.)*`$/.test(token)
    ) {
      className = 'text-chart-3';
    } else if (
      /^(?:curl|import|from|const|new|await|return|print|requests|Client|OpenAI|StreamableHTTPClientTransport|response|timeout)$/.test(
        token
      ) ||
      /^\d+(?:\.\d+)?$/.test(token)
    ) {
      className = 'text-primary';
    }

    parts.push(
      <span key={`${token}-${index}`} className={className}>
        {token}
      </span>
    );
    cursor = start + token.length;
  });

  if (cursor < line.length) {
    parts.push(line.slice(cursor));
  }

  return <>{parts}</>;
}
