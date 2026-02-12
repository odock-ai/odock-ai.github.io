'use client';

import { useEffect, useRef, useState } from 'react';

const terminalOutput = [
  { type: 'command', text: 'odock start' },
  { type: 'blank' },
  { type: 'ascii' },
  { type: 'brand' },
  { type: 'tagline' },
  { type: 'blank' },
  { type: 'box' },
  { type: 'blank' },
  { type: 'log', tag: 'RATELIMIT', text: 'allowed=true event=allowed request_id=6964f9b7ffd683 shadow=false stage=pre_auth' },
  { type: 'log', tag: 'RATELIMIT', text: 'event=ok request_id=6964f9b7ffd683 stage=policy_resolve' },
  { type: 'log', tag: 'RATELIMIT', text: 'allowed=true event=allowed request_id=6964f9b7ffd683 shadow=false stage=early_gate' },
  { type: 'log', tag: 'PLUGIN', text: 'event=active phase=pre_route plugin=request_transform request_id=6964f9b7ffd683' },
  { type: 'log', tag: 'PLUGIN', text: 'contact=contact@odock.ai event=org_loaded phase=pre_route plugin=request_transform status=active' },
  { type: 'log', tag: 'PLUGIN', text: 'event=active phase=pre_route plugin=pii_mask request_id=6964f9b7ffd683' },
  { type: 'log', tag: 'RATELIMIT', text: 'event=ok request_id=6964f9b7ffd683 stage=policy_resolve_final' },
  { type: 'log', tag: 'RATELIMIT', text: 'allowed=true event=allowed request_id=6964f9b7ffd683 shadow=false stage=final_gate' },
  { type: 'log', tag: 'BUDGET', text: 'event=budget_reserve_start fields=map[api_key_id:0xc000316900]' },
  { type: 'log', tag: 'BUDGET', text: 'event=budget_reserve_ok fields=map[request_id:6964f9b7ffd683]' },
  { type: 'log', tag: 'SAFETYSEC', text: 'mode=sequential module=sensitive_redaction phase=pre_upstream request_id=6964f9b7ffd683' },
  { type: 'log', tag: 'SAFETYSEC', text: 'mode=parallel module=prompt_injection phase=pre_upstream request_id=6964f9b7ffd683' },
  { type: 'log', tag: 'PLUGIN', text: 'event=active phase=pre_upstream plugin=request_transform request_id=6964f9b7ffd683' },
  { type: 'log', tag: 'BILLING', text: 'api_key_id=cml7xr7rs000lsb completion_tokens=2163 price_usd=0.006489 model=gemini-2.5-flash' },
  { type: 'log', tag: 'BILLING', text: 'event=usage_insert metric=TOKENS organisation_id=0xc0002e67c0' },
  { type: 'log', tag: 'BILLING', text: 'event=usage_insert metric=COST organisation_id=0xc0002e67c0 usage_id=cfe5f44f96c' },
  { type: 'log', tag: 'BILLING', text: 'event=usage_record_insert model_id=0xc0002e67f0 record_id=64e9ba2bea request_id=0xc00012e700' },
];

const boxLineIndex = terminalOutput.findIndex((line) => line.type === 'box');

const tagColors: Record<string, { bg: string; text: string }> = {
  RATELIMIT: { bg: 'bg-blue-500/40', text: 'text-blue-300' },
  SAFETYSEC: { bg: 'bg-yellow-500/40', text: 'text-yellow-300' },
  PLUGIN: { bg: 'bg-cyan-500/40', text: 'text-cyan-300' },
  BILLING: { bg: 'bg-green-500/40', text: 'text-green-300' },
  BUDGET: { bg: 'bg-green-500/40', text: 'text-green-300' },
  ERROR: { bg: 'bg-red-500/40', text: 'text-red-300' },
};

interface LogEntry {
  type: string;
  text?: string;
  tag?: string;
}

function formatTimestamp(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

function formatTimestampShort(date: Date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

const statusRows = [
  { label: 'ENVIRONMENT', value: 'development' },
  { label: 'HOST/ADDR', value: '0.0.0.0:8080' },
  { label: 'DATABASE', value: 'localhost:5432' },
  { label: 'REDIS', value: 'localhost:6379' },
  { label: 'SAFETY ENGINE', value: 'security' },
];

export function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [timestamp, setTimestamp] = useState(() => new Date());
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopScrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const fullTimestamp = formatTimestamp(timestamp);
  const shortTimestamp = formatTimestampShort(timestamp);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (desktopScrollContainerRef.current) {
      desktopScrollContainerRef.current.scrollTop = desktopScrollContainerRef.current.scrollHeight;
    }
    if (mobileScrollContainerRef.current) {
      mobileScrollContainerRef.current.scrollTop = mobileScrollContainerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  useEffect(() => {
    if (!isInView) return;

    if (visibleLines >= terminalOutput.length) {
      const resetTimer = setTimeout(() => {
        setVisibleLines(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const delay = visibleLines === boxLineIndex + 1 ? 3000 : 100;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleLines, isInView]);

  useEffect(() => {
    if (visibleLines === 0) {
      setTimestamp(new Date());
    }
  }, [visibleLines]);

  const getTagColor = (tag: string) => {
    return tagColors[tag] || { bg: 'bg-cyan-500/40', text: 'text-cyan-300' };
  };

  const renderDesktopLine = (line: LogEntry, index: number) => {
    if (line.type === 'command') {
      return (
        <div key={index} className="text-cyan-300 font-mono text-sm">
          <span className="text-cyan-400">{'odock@server:~$ '}</span>
          {line.text}
        </div>
      );
    }

    if (line.type === 'blank') {
      return <div key={index} className="h-2" />;
    }

    if (line.type === 'ascii') {
      return (
        <div key={index} className="max-w-full overflow-hidden">
          <img
            src="/odock_branding.png"
            alt="ODOCK branding"
            className="block w-full h-auto max-w-2xl"
            draggable={false}
          />
        </div>
      );
    }

    if (line.type === 'brand' || line.type === 'tagline') {
      return null;
    }

    if (line.type === 'box') {
      return (
        <div key={index} className="border border-cyan-400/30 bg-black/20 p-4 rounded w-fit">
          <div className="font-mono text-sm whitespace-pre leading-tight">
            {statusRows.map((row, i) => (
              <div key={i}>
                <span style={{ color: '#6c6f73' }}>{row.label.padEnd(18, ' ')}</span>
                <span> </span>
                <span style={{ color: '#00afaf' }}>{row.value.padEnd(39, ' ')}</span>
              </div>
            ))}
            <div className="h-1" />
          </div>
        </div>
      );
    }

    if (line.type === 'text') {
      return (
        <div key={index} className="text-cyan-300 font-mono text-sm">
          {line.text}
        </div>
      );
    }

    if (line.type === 'log' && line.tag) {
      const colors = getTagColor(line.tag);
      return (
        <div key={index} className="text-slate-300 font-mono text-sm">
          <span className="text-slate-500">{fullTimestamp}</span>
          <span className={`ml-2 px-2 py-1 rounded text-xs font-bold inline-block ${colors.bg} ${colors.text}`}>
            {line.tag}
          </span>
          <span className="ml-2 text-slate-300">{line.text}</span>
        </div>
      );
    }

    return null;
  };

  const renderMobileLine = (line: LogEntry, index: number) => {
    if (line.type === 'command') {
      return (
        <div key={index} className="text-cyan-300 font-mono text-xs whitespace-nowrap min-w-max">
          <span className="text-cyan-400">{'odock@server:~$ '}</span>
          {line.text}
        </div>
      );
    }

    if (line.type === 'blank') {
      return <div key={index} className="h-1.5" />;
    }

    if (line.type === 'ascii') {
      return (
        <div key={index} className="max-w-full overflow-hidden">
          <img
            src="/odock_branding.png"
            alt="ODOCK branding"
            className="block w-full h-auto max-w-lg"
            draggable={false}
          />
        </div>
      );
    }

    if (line.type === 'brand' || line.type === 'tagline') {
      return null;
    }

    if (line.type === 'box') {
      return (
        <div key={index} className="border border-cyan-400/30 bg-black/20 p-3 rounded w-full">
          <div className="font-mono text-xs leading-tight space-y-1">
            {statusRows.map((row, i) => (
              <div key={i} className="flex justify-between gap-3">
                <span className="text-slate-500">{row.label}</span>
                <span className="text-cyan-300 text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (line.type === 'text') {
      return (
        <div key={index} className="text-cyan-300 font-mono text-xs">
          {line.text}
        </div>
      );
    }

    if (line.type === 'log' && line.tag) {
      const colors = getTagColor(line.tag);
      return (
        <div key={index} className="text-slate-300 font-mono text-xs whitespace-nowrap min-w-max">
          <span className="text-slate-500">{shortTimestamp}</span>
          <span className={`ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold inline-block ${colors.bg} ${colors.text}`}>
            {line.tag}
          </span>
          <span className="ml-1.5 text-slate-300">{line.text}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div ref={sectionRef} className="w-full">
      <div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg blur-xl" />

          <div className="linux-terminal relative border border-cyan-400/30 rounded-lg p-3 sm:p-6 bg-[#0a0f0a]/95 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-cyan-400/20">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono">odock@server: ~/bash</span>
              <div className="w-10" />
            </div>

            <div className="hidden sm:block">
              <div ref={desktopScrollContainerRef} className="h-96 overflow-y-auto overflow-x-auto space-y-1 pr-4 scrollbar-hide">
                {terminalOutput.slice(0, visibleLines).map((line, index) => renderDesktopLine(line, index))}
                {visibleLines < terminalOutput.length && (
                  <div className="text-slate-300 font-mono text-sm">
                    <span className="animate-pulse">▌</span>
                  </div>
                )}
              </div>
            </div>

            <div className="sm:hidden">
              <div ref={mobileScrollContainerRef} className="h-[18rem] overflow-y-auto overflow-x-auto space-y-1 pr-1 scrollbar-hide">
                {terminalOutput.slice(0, visibleLines).map((line, index) => renderMobileLine(line, index))}
                {visibleLines < terminalOutput.length && (
                  <div className="text-slate-300 font-mono text-xs">
                    <span className="animate-pulse">▌</span>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none rounded-lg" />
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl opacity-40" />
        </div>
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
