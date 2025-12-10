'use client';

import { Github } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Image
                src={`${process.env.PAGES_BASE_PATH || ''}/logo-dark.svg`}
                alt="odock.ai logo"
                width={16}
                height={16}
                className="h-10 w-10"
              />
              <span className="font-bold text-foreground text-lg">odock.ai</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Unified API gateway for all LLM providers and MCP servers.
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it works</Link></li>
              <li><Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/#offers" className="text-muted-foreground hover:text-foreground transition-colors">Offers</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/odock-ai" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="https://x.com/odock_ai" className="text-muted-foreground hover:text-foreground transition-colors">X</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Odock.ai. Made for developers by developers.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/odock-ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="h-5 w-5" />
            </a>
           
            <a href="https://x.com/odock_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Image
                src={`${process.env.PAGES_BASE_PATH || ''}/X_logo_2023.svg`}
                alt="X (Twitter)"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
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
