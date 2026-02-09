"use client";

import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import landingContent from "@/data/landing-content.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || "";

const { header, contact } = landingContent;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-border/60 bg-background/90 p-4 shadow-lg">
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
