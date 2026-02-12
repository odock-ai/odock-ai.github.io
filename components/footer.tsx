'use client';

import { Github } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useLandingContent } from "@/components/providers/landing-content-provider";
import { localizePath } from "@/lib/i18n";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || "";

export default function Footer() {
  const { content, locale } = useLandingContent();
  const { footer } = content;
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Image
                src={`${basePath}/logo-dark.svg`}
                alt={footer.brand.logoAlt}
                width={16}
                height={16}
                className="h-10 w-10"
              />
              <span className="font-bold text-foreground text-lg">{footer.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {footer.description}
            </p>
          </div>

          {/* Links */}
          {footer.linkGroups.map((group) => (
            <div key={group.title} className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-3 text-sm">{group.title}</h4>
              <ul className="space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={localizePath(link.href, locale)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {footer.copyright}
          </p>
          <div className="flex gap-4">
            {footer.social.map((item) =>
              item.type === "github" ? (
                <a
                  key={item.type}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={item.label}
                >
                  <Github className="h-5 w-5" />
                </a>
              ) : (
                <a
                  key={item.type}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={item.label}
                >
                  <Image
                    src={`${basePath}/X_logo_2023.svg`}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </a>
              )
            )}
             {/* Bottom 
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}
