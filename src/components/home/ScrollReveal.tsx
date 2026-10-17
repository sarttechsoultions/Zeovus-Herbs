"use client";
import { useEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(element.children) as HTMLElement[];
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -60px 0px" });
    items.forEach(item => {
      // Keep sections already in view visible when restoring a scroll position.
      if (item.getBoundingClientRect().top < window.innerHeight - 60) {
        item.classList.add("is-visible");
      }
      observer.observe(item);
    });
    element.classList.add("reveal-ready");
    return () => { observer.disconnect(); element.classList.remove("reveal-ready"); };
  }, []);
  return <div className="home-scroll-reveal" ref={root}>{children}</div>;
}
