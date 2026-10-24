"use client";

import { useState } from "react";

type AccordionItem = readonly [string, string];

export function ScienceAccordion({ items, className = "", formatMethods = false }: { items: readonly AccordionItem[]; className?: string; formatMethods?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return <div className={`science-accordion ${className}`.trim()}>
    {items.map(([title, copy], index) => {
      const isOpen = activeIndex === index;
      return <article className={isOpen ? "is-open" : ""} key={title}>
        <button type="button" onClick={() => setActiveIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`science-accordion-${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
          <span>{title}</span><img src="/science-assets/imgAntDesignCloseOutlined.svg" alt="" />
        </button>
        <div className="science-accordion__copy" id={`science-accordion-${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}><p>{formatMethods ? copy.split("\n").map((line) => {
          const separator = line.indexOf(" — ");
          return <span className="science-method-line" key={line}>{separator >= 0 ? <><strong>{line.slice(0, separator)}</strong>{line.slice(separator)}</> : line}</span>;
        }) : copy}</p></div>
      </article>;
    })}
  </div>;
}
