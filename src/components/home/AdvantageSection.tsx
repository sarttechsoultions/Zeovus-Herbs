"use client";

import { useState } from "react";
import { HomeImage } from "./shared";

const accordionRows = [
  { heading: "Understanding Beyond the Ingredient", detail: "Our experience across multiple product categories helps us understand ingredients in the context of formulation, application and market relevance." },
  { heading: "Two Decades of Leadership Experience", detail: "Our leadership brings more than two decades of experience across healthcare, pharmaceuticals, nutrition and related industries." },
  { heading: "Science Led Ingredient Selection", detail: "We look beyond the ingredient name to understand its research, composition, standardisation and intended application." },
  { heading: "India Market Understanding", detail: "Our presence in India gives global ingredient companies access to a market we understand closely, from product categories to potential partners and applications." },
  { heading: "Global Market Reach", detail: "Our international presence and relationships help connect Indian ingredient opportunities with businesses across global markets." },
  { heading: "Zeovus Quality Assurance", detail: "Quality across the wider Zeovus ecosystem is guided by a structured approach to ingredient evaluation, documentation and verification." },
];

export function AdvantageSection() {
  const [active, setActive] = useState<number | null>(null);
  return <section className="advantage"><div className="advantage-photo"><HomeImage src="/home-assets/pexels-photo-8851410.jpg" alt="Harvesting grain" /></div><div className="adv-copy"><h2>The Zeovus Advantage</h2><p>As part of the Zeovus Group, Zeovus Herbs brings a broader perspective to ingredient sourcing and supply. Our experience across health, nutrition, beauty and food helps us understand what formulators and manufacturers need to turn functional ingredients into exceptional products.</p><div className="accordion">{accordionRows.map(({ heading, detail }, index) => {
    const isOpen = active === index;
    return <button type="button" key={heading} aria-expanded={isOpen} onClick={() => setActive(isOpen ? null : index)} className={isOpen ? "is-open" : ""}><span>{heading}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b><em aria-hidden={!isOpen}>{detail}</em></button>;
  })}</div></div></section>;
}

