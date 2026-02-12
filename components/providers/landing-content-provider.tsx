'use client';

import { createContext, useContext } from 'react';
import type { LandingContent, Locale } from '@/lib/i18n';

type LandingContentContextValue = {
  locale: Locale;
  content: LandingContent;
};

const LandingContentContext = createContext<LandingContentContextValue | null>(null);

export function LandingContentProvider({
  locale,
  content,
  children,
}: {
  locale: Locale;
  content: LandingContent;
  children: React.ReactNode;
}) {
  return (
    <LandingContentContext.Provider value={{ locale, content }}>
      {children}
    </LandingContentContext.Provider>
  );
}

export function useLandingContent() {
  const context = useContext(LandingContentContext);
  if (!context) {
    throw new Error('useLandingContent must be used inside LandingContentProvider');
  }
  return context;
}
