"use client";

import { useState } from "react";

const quality = [
  {
    title: "Ingredient Identity",
    summary: "The starting point for evaluating every ingredient.",
    detail: "Botanical species and plant part, collagen source and type, protein origin, and microbial strain or preparation identity establish the starting point for evaluation.",
  },
  {
    title: "Defined Specifications",
    summary: "Measurable parameters that support batch consistency.",
    detail: "Standardised markers and extract ratios, collagen peptide profiles, protein isolate or concentrate grades, and category-specific biotic parameters provide a measurable basis for consistency. Batches are assessed against agreed specifications.",
  },
  {
    title: "Analytical Documentation",
    summary: "Quality information accompanies every supplied batch.",
    detail: "An agreed specification and COA accompany every supplied batch. Supporting documentation covers relevant allergen, GMO, irradiation and solvent declarations, together with TSE/BSE information for applicable collagen materials.",
  },
  {
    title: "Purity and Safety",
    summary: "Testing matched to the ingredient and its destination market.",
    detail: "Testing addresses agreed parameters for heavy metals, microbiology, pesticide residues and mycotoxins, with ethylene oxide and residual-solvent testing where relevant. The testing scope is matched to the ingredient, application and destination market.",
  },
  {
    title: "Batch Traceability",
    summary: "Batch records connect source, processing and dispatch.",
    detail: "Batch-level records connect source, processing and dispatch. Supplier audit information, change-control arrangements and retained-sample provisions support the qualification process.",
  },
] as const;

export function AboutQuality() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return <div className="about-quality-list">
    {quality.map(({ title, summary, detail }, index) => {
      const isOpen = activeIndex === index;
      return <article className={isOpen ? "is-open" : undefined} key={title}>
        <button type="button" aria-expanded={isOpen} aria-controls={`about-quality-detail-${index}`} onClick={() => setActiveIndex(isOpen ? null : index)}>
          <span><strong>{title}</strong><small>{summary}</small></span>
          <svg className="about-quality-toggle" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 12h14" /><path className="about-quality-toggle-vertical" d="M12 5v14" /></svg>
        </button>
        <div className="about-quality-detail" id={`about-quality-detail-${index}`} aria-hidden={!isOpen}><div className="about-quality-detail-inner"><p>{detail}</p></div></div>
      </article>;
    })}
  </div>;
}
