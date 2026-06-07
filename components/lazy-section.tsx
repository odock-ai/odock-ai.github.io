'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export function LazySection({
  id,
  children,
  fallback,
  rootMargin = '320px 0px',
  minHeight,
}: {
  /**
   * The anchor id for this section. It is applied to the persistent wrapper
   * element so in-page links (e.g. `#pricing`) always resolve to a real DOM
   * node, even before the heavy section has been hydrated/rendered.
   */
  id?: string;
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
  /**
   * Approximate rendered height of the section. Reserving the space while the
   * placeholder is shown prevents layout shift (CLS) and keeps anchor scroll
   * positions accurate before the real content loads.
   */
  minHeight?: number;
}) {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  // Eagerly render (and scroll to) this section when it is the URL hash target.
  // This makes navigation links work on first load while sections are lazy.
  useEffect(() => {
    if (!id) return;

    const reveal = () => {
      if (window.location.hash === `#${id}`) {
        pendingScrollRef.current = true;
        setIsVisible(true);
      }
    };

    reveal();
    window.addEventListener('hashchange', reveal);
    return () => window.removeEventListener('hashchange', reveal);
  }, [id]);

  // Render the section once it is close to the viewport.
  useEffect(() => {
    if (isVisible || !anchorRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(anchorRef.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  // Once the real content has rendered after a hash navigation, scroll it into
  // view so the link lands on the correct, fully-sized section. Because other
  // lazy sections above the target may reveal (and change height) while we
  // scroll, we re-correct the position a few times as the layout settles.
  useEffect(() => {
    if (!isVisible || !pendingScrollRef.current || !anchorRef.current) {
      return;
    }
    pendingScrollRef.current = false;

    const el = anchorRef.current;
    const timers: number[] = [];

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Corrective passes after intermediate sections have a chance to render.
    [200, 450, 750].forEach((delay) => {
      timers.push(
        window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, delay)
      );
    });

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [isVisible]);

  return (
    <div
      ref={anchorRef}
      id={id}
      className="scroll-mt-16"
      style={!isVisible && minHeight ? { minHeight } : undefined}
    >
      {isVisible ? children : fallback}
    </div>
  );
}
