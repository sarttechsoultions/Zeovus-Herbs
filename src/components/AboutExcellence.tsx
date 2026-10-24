"use client";

import { useState } from "react";

const steps = [
  ["Start with the Science", "We look at what defines an ingredient: its identity, composition, processing and relevant research. This creates a clearer foundation for selection and technical discussions."],
  ["Know the Source", "Origin matters across every category. Botanical species, collagen source, protein raw materials and microbial identity each contribute to a fuller understanding of the ingredient."],
  ["Understand the Application", "We consider ingredients in the context of your product. Processing conditions, formulation format, solubility, stability and composition help shape a more relevant sourcing conversation."],
  ["Connect the Right Markets", "We connect Indian ingredient capabilities with international buyers and welcome global ingredient partners exploring India. Our market focus includes the UK, Europe, USA, South America, Australia and Russia."],
  ["Build Lasting Relationships", "We value clear communication, practical collaboration and an understanding of your business over time. Our aim is to become a dependable part of your ingredient sourcing relationship."],
] as const;

export function AboutExcellence() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return <section className="about-excellence">
    <h2>How We Deliver Excellence</h2>
    {steps.map(([title, copy], index) => {
      const isOpen = activeIndex === index;
      return <article className={isOpen ? "about-excellence__item is-open" : "about-excellence__item"} key={title}>
        <button type="button" onClick={() => setActiveIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`about-excellence-${index}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>{title}<b className="about-plus">{isOpen ? "−" : "+"}</b>
        </button>
        <div className="about-excellence__copy" id={`about-excellence-${index}`}><p>{copy}</p></div>
      </article>;
    })}
  </section>;
}
