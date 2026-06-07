"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ChevronRight, Menu } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath } from "@/lib/i18n"
import { cn } from "@/lib/utils"

/**
 * Navigation link that renders a native anchor for in-page hash targets.
 * Native anchors fire the `hashchange` event, which `LazySection` listens for
 * to eagerly render + scroll to lazily-loaded sections. Next.js `<Link>` would
 * do a soft pushState that skips that event, breaking first-load anchor links.
 */
function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  if (href.includes("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} prefetch={false} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

const LocaleSwitcher = dynamic(
  () =>
    import("@/components/landing/locale-switcher").then(
      (mod) => mod.LocaleSwitcher
    ),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-8 min-w-16 border border-border/70 bg-card/60"
      />
    ),
  }
)

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div aria-hidden="true" className="h-8 w-8" />,
  }
)

type NavItem = {
  label: string
  href?: string
  children?: Array<{
    label: string
    href: string
  }>
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileGroup, setActiveMobileGroup] = useState<NavItem | null>(null)
  const { content, locale } = useLandingContent()
  const navItems = content.header.navLinks as NavItem[]
  const docsHref = content.header.docsHref
  const docsLabel = content.header.docsLabel
  const ctaHref = localizePath(content.header.ctaHref, locale)
  const logoProps = {
    src: "/logo-dark.svg",
    alt: content.header.brand.logoAlt,
    width: 28,
    height: 32,
    priority: true as const,
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link
          href={localizePath("/", locale)}
          prefetch={false}
          aria-label={content.header.brand.name}
          className="group flex items-center gap-2.5"
        >
          <Image
            {...logoProps}
            alt=""
            className="hidden h-8 w-auto shrink-0 object-contain dark:block"
          />
          <Image
            {...logoProps}
            alt=""
            className="block h-8 w-auto shrink-0 object-contain invert dark:hidden"
          />
          <span className="text-sm font-medium tracking-[0.18em] text-foreground uppercase">
            {content.header.brand.name}
          </span>
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex lg:flex-none">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children?.length ? (
                  <>
                    <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64">
                      <div className="flex flex-col gap-1 p-1">
                        {item.children.map((child) => (
                          <NavigationMenuLink key={child.label} asChild>
                            <Link
                              href={localizePath(child.href, locale)}
                              prefetch={false}
                              className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground"
                            >
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : item.href ? (
                  <NavigationMenuLink asChild>
                    <Link
                      href={localizePath(item.href, locale)}
                      prefetch={false}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-9 bg-transparent px-3 text-xs uppercase tracking-wider text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                ) : null}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="text-xs" asChild>
            <Link href={docsHref}>{docsLabel}</Link>
          </Button>
          <Button size="sm" className="text-xs" asChild>
            <Link href={ctaHref} prefetch={false}>
              {content.header.ctaLabel}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <Drawer
            direction="left"
            open={mobileMenuOpen}
            onOpenChange={(open) => {
              setMobileMenuOpen(open)
              if (!open) setActiveMobileGroup(null)
            }}
          >
            <DrawerTrigger
              aria-label={content.header.mobileMenu.openAriaLabel}
              className="p-2"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </DrawerTrigger>
            <DrawerContent className="max-w-sm">
              <DrawerHeader className="border-b border-border">
                <DrawerTitle className="text-sm uppercase tracking-[0.18em]">
                  {content.header.brand.name}
                </DrawerTitle>
                <DrawerDescription>
                  Browse product sections and solution pages.
                </DrawerDescription>
              </DrawerHeader>
              <nav className="flex flex-col p-4">
                {navItems.map((item) =>
                  item.children?.length ? (
                    <button
                      key={item.label}
                      type="button"
                      className="flex items-center justify-between border-b border-border/50 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => {
                        setActiveMobileGroup(item)
                        setMobileMenuOpen(false)
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : item.href ? (
                    <NavLink
                      key={item.label}
                      href={localizePath(item.href, locale)}
                      className="border-b border-border/50 py-3 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ) : null
                )}
                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="text-xs" asChild>
                    <Link href={docsHref}>{docsLabel}</Link>
                  </Button>
                  <Button size="sm" className="text-xs" asChild>
                    <Link href={ctaHref} prefetch={false}>
                      {content.header.ctaLabel}
                    </Link>
                  </Button>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <Drawer
        direction="right"
        open={Boolean(activeMobileGroup)}
        onOpenChange={(open) => {
          if (!open) setActiveMobileGroup(null)
        }}
      >
        <DrawerContent className="max-w-sm">
          <DrawerHeader className="border-b border-border">
            <DrawerTitle className="text-sm uppercase tracking-[0.18em]">
              {activeMobileGroup?.label}
            </DrawerTitle>
            <DrawerDescription>
              {activeMobileGroup ? `Jump to ${activeMobileGroup.label} sections.` : ""}
            </DrawerDescription>
          </DrawerHeader>
          <nav className="flex flex-col p-4">
            {activeMobileGroup?.children?.map((child) => (
              <NavLink
                key={child.label}
                href={localizePath(child.href, locale)}
                className="border-b border-border/50 py-3 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => {
                  setActiveMobileGroup(null)
                  setMobileMenuOpen(false)
                }}
              >
                {child.label}
              </NavLink>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
