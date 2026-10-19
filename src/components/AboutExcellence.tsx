"use client";

import { useState } from "react";

const steps = [
  ["Understand the Science", "We look at the research, standardisation and technical context behind the ingredients we work with."],
  ["Know the Source", "We understand the origin, identity and cultivation of every botanical ingredient."],
  ["Understand the Application", "We connect ingredient science with relevant formulations and product applications."],
  ["Connect the Right Markets", "We bring Indian botanical innovation to the world and global ingredient science closer to India."],
  ["Build Long Term Partnerships", "We build lasting partnerships around science, quality and market understanding."],
] as const;

export function AboutExcellence() {
  const [activeIndex, setActiveIndex] = useState(0);

  return <section className="about-excellence">
    <h2>How We Deliver Excellence</h2>
    {steps.map(([title, copy], index) => {
      const isOpen = activeIndex === index;
      return <article className={isOpen ? "about-excellence__item is-open" : "about-excellence__item"} key={title}>
        <button type="button" onClick={() => setActiveIndex(index)} aria-expanded={isOpen} aria-controls={`about-excellence-${index}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>{title}<b className="about-plus">{isOpen ? "−" : "+"}</b>
        </button>
        <div className="about-excellence__copy" id={`about-excellence-${index}`}><p>{copy}</p></div>
      </article>;
    })}
  </section>;
}
