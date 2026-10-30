"use client";

import { useEffect, useRef, useState } from "react";

const statistics = [
  { value: 8, suffix: "%", label: "of Global Flora" },
  { value: 56177, suffix: "", label: "Documented Floristic Elements" },
  { value: 4, suffix: "", label: "Global Biodiversity Hotspots" },
];

export function HeritageStatistics() {
  const root = useRef<HTMLDListElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = root.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = Math.min((now - start) / 1800, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return <dl ref={root} className="heritage-statistics">{statistics.map(({ value, suffix, label }) => <div key={label}>
    <dt aria-label={`${value.toLocaleString("en-US")}${suffix}`} style={{ fontVariantNumeric: "tabular-nums" }}><span aria-hidden="true">{Math.round(value * progress).toLocaleString("en-US")}{suffix}</span></dt>
    <dd>{label}</dd>
  </div>)}</dl>;
}
