"use client";

import { useState } from "react";
import { HomeImage } from "./shared";

const accordionRows = ["Understanding Beyond the Ingredient", "Two Decades of Leadership Experience", "Science Led Ingredient Selection", "India Market Understanding", "Global Market Reach", "Zeovus Quality Assurance"];

export function AdvantageSection() {
  const [active, setActive] = useState(0);
  return <section className="advantage"><div className="advantage-photo"><HomeImage src="/home-assets/imgIstockphoto13715169481024X10241.png" alt="Harvesting grain" /></div><div className="adv-copy"><h2>The Zeovus Advantage</h2><p>Being part of Zeovus Group gives Zeovus Herbs a perspective that extends beyond sourcing and distribution.<br />Our wider exposure across health, nutrition, beauty and food helps us understand ingredients in the context of the products they ultimately become.</p><div className="accordion">{accordionRows.map((row, index) => <button key={row} onClick={() => setActive(index)} className={active === index ? "is-open" : ""}><span>{row}</span><b>{active === index ? "×" : "+"}</b><em aria-hidden={active !== index}>Our experience across multiple product categories helps us understand ingredients in the context of formulation, application and market relevance.</em></button>)}</div></div></section>;
}

