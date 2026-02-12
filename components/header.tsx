"use client";

import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLandingContent } from "@/components/providers/landing-content-provider";
import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  localizePath,
  stripLocalePrefix,
} from "@/lib/i18n";
import { persistPreferredLocale } from "@/lib/i18n-client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || "";

export default function Header() {
  const { content, locale } = useLandingContent();
  const { header, contact } = content;
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const strippedPath = stripLocalePrefix(pathname);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
        <div className="flex items-center gap-2 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
          <Image
            src={`${basePath}/logo-dark.svg`}
            alt={header.brand.logoAlt}
            width={16}
            height={16}
            className="h-10 w-10"
          />
            <span className="text-2xl font-bold text-foreground">{header.brand.name}</span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label={isOpen ? header.mobileMenu.closeAriaLabel : header.mobileMenu.openAriaLabel}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center rounded-md border border-border/60 bg-card/40 p-1">
                {SUPPORTED_LOCALES.map((lang) => (
                  <Link
                    key={lang}
                    href={localizePath(strippedPath, lang)}
                    onClick={() => persistPreferredLocale(lang)}
                    className={`rounded px-2 py-1 text-xs font-semibold transition-colors ${
                      lang === locale
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {LOCALE_LABELS[lang]}
                  </Link>
                ))}
              </div>
              <a href={header.cta.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label={header.cta.githubLabel}>
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => document.getElementById(contact.id)?.scrollIntoView({ behavior: "smooth" })}
              >
                {header.cta.primaryLabel}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? "max-h-[calc(100dvh-5rem)] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-border/60 bg-background/90 p-4 shadow-lg">
            <nav className="flex flex-col gap-3 items-center">
            {header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base text-foreground/90 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-2 py-2">
              {SUPPORTED_LOCALES.map((lang) => (
                <Link
                  key={lang}
                  href={localizePath(strippedPath, lang)}
                  onClick={() => {
                    persistPreferredLocale(lang);
                    closeMenu();
                  }}
                  className={`rounded px-2 py-1 text-xs font-semibold transition-colors ${
                    lang === locale
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {LOCALE_LABELS[lang]}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
            <a
              href={header.cta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button
                variant="outline"
                className="flex w-full items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>{header.cta.githubLabel}</span>
              </Button>
            </a>
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => {
                closeMenu();
                document.getElementById(contact.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {header.cta.primaryLabel}
            </Button>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
