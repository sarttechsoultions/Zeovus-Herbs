"use client";

import { useState } from "react";

const categories = [
  ["Botanical Extracts", "/home-assets/imgIstockphoto19896105631024X10241.png", "botanical-extracts"],
  ["Collagen, Gelatin & Peptides", "/home-assets/imgIstockphoto1735861991024X10241.png", "collagen-gelatin"],
  ["Plant Proteins", "/home-assets/imgIstockphoto14681490851024X10241.png", "plant-proteins"],
  ["Prebiotics, Probiotics & Postbiotics", "/home-assets/imgPexelsBulat8431243575272340544741.png", "prebiotics"],
] as const;

const manufacturing = [
  ["Herbal Extracts", ["Aqueous and hydro-alcoholic extraction", "Supercritical CO₂ extraction", "Column chromatography and fractionation", "Vacuum concentration", "Spray drying and vacuum drying"]],
  ["Collagens", ["Enzymatic hydrolysis", "Membrane ultrafiltration", "Powder blending"]],
  ["Proteins", ["Wet extraction", "Centrifugal separation", "Membrane filtration", "Drying and powder processing"]],
  ["Prebiotics, Probiotics & Postbiotics", ["Whole-cell fermentation", "Controlled fermentation", "Freeze-drying and spray drying", "Formulation and blending"]],
] as const;

const quality = [
  ["Ingredient Identity and Composition", "HPLC, HPTLC, GC / GC-MS and UV–Vis spectrophotometry."],
  ["Purity and Safety", "ICP-MS, headspace GC, pesticide-residue analysis and microbiological testing."],
  ["Category-Specific Analysis", "Amino-acid, hydroxyproline, nitrogen and prebiotic carbohydrate analysis."],
  ["Quality Assurance", "Specification review, method suitability, batch documentation and traceability records."],
] as const;

export default function ProductsContent() {
  const [selected, setSelected] = useState<(typeof categories)[number] | null>(null);
  return <>
    <section className="products-intro" aria-labelledby="products-intro-title">
      <div className="products-intro-heading"><h1 id="products-intro-title">Ingredients Built Around Science.</h1><a href="#catalogue" className="products-pill">View all ingredients <span>→</span></a></div>
      <div className="products-category-teasers">
        {categories.map((category) => { const [title, image] = category; return <button type="button" className="products-category-teaser" key={title} onClick={() => setSelected(category)} aria-label={`Expand ${title}`}><img src={image} alt=""/><span>{title}</span></button>; })}
      </div>
    </section>

    {selected && <div className="products-image-dialog" role="dialog" aria-modal="true" aria-label={selected[0]} onClick={() => setSelected(null)}><div onClick={event => event.stopPropagation()}><button type="button" aria-label="Close image" onClick={() => setSelected(null)}>×</button><img src={selected[1]} alt=""/><h2>{selected[0]}</h2><a href={`#${selected[2]}`} onClick={() => setSelected(null)}>View ingredients <span>→</span></a></div></div>}

    <section className="products-heritage" aria-labelledby="products-heritage-title">
      <div><p className="products-eyebrow">Sourced from India. Ready for the world.</p><h2 id="products-heritage-title">Indian Botanical Heritage</h2><p>From the Himalayan foothills to tropical forests, fertile plains and coastal landscapes, the Indian Subcontinent offers extraordinary botanical diversity.</p><p>For centuries, its species and plant materials have travelled along trade routes connecting continents. Today, this heritage continues through modern extraction, ingredient characterisation and international supply.</p></div>
      <dl><div><dt>56,177</dt><dd>Documented Floristic Elements</dd></div><div><dt>4</dt><dd>Global Biodiversity Hotspots</dd></div><div><dt>8%</dt><dd>of Global Flora</dd></div></dl>
    </section>

    <section className="products-capabilities" aria-labelledby="manufacturing-title">
      <p className="products-eyebrow">Built for dependable supply</p><h2 id="manufacturing-title">Our ingredient portfolio is supported by manufacturing capabilities.</h2>
      <div className="products-capability-grid">{manufacturing.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>

    <section className="products-quality" aria-labelledby="quality-title">
      <div><p className="products-eyebrow">Quality Assurance &amp; Control</p><h2 id="quality-title">We assess ingredient quality through defined analytical controls.</h2></div>
      <div className="products-quality-list">{quality.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="products-research" aria-labelledby="research-title"><p className="products-eyebrow">Ingredient Research</p><h2 id="research-title">Evidence that supports better ingredient decisions.</h2><p>We review published literature and available human clinical studies, considering study design, participants, dosage, duration and outcomes.</p><p>Composition, processing, marker levels and strain identity help establish how closely an ingredient matches the preparation studied. Our review connects these details with practical ingredient selection and formulation discussions.</p></section>
  </>;
}
