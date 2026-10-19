"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PageScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const sections = Array.from(element.querySelectorAll(":scope > section")) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -48px 0px" });
    sections.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight - 48) section.classList.add("is-visible");
      observer.observe(section);
    });
    element.classList.add("reveal-ready");
    return () => { observer.disconnect(); element.classList.remove("reveal-ready"); };
  }, []);

  return <div ref={root} className={`page-scroll-reveal ${className}`.trim()}>{children}</div>;
}
