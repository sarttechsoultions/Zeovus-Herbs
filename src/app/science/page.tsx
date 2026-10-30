import { SiteImage } from "../../components/SiteImage";
import { SiteHeader } from "../../components/SiteHeader";
import { HomeFooter } from "../../components/home/HomeFooter";
import { PageScrollReveal } from "../../components/PageScrollReveal";
import { ScienceAccordion } from "../../components/ScienceAccordion";
import "./science.css";
export const metadata = {
  title: "Science | Zeovus Herbs",
  description:
    "Understanding ingredients through manufacturing capabilities, quality assurance and ingredient research.",
};
const assets = "/science-assets/";
const lenses = [
  ["Manufacturing Capabilities", "manufacturing-capabilities", "imgGroup15"],
  ["Quality Assurance & Control", "quality-assurance", "imgGroup16"],
  ["Ingredient Research", "ingredient-research", "imgGroup17"],
];
const manufacturing = [
  [
    "Herbal Extracts",
    "Aqueous and hydro-alcoholic extraction — Recovery of selected plant compounds.\nSupercritical CO₂ extraction — Extraction of selected oils and lipophilic compounds.\nColumn chromatography and fractionation — Purification and enrichment of phytochemical.\nVacuum concentration — Extract concentration and solvent removal.\nSpray drying and vacuum drying — Conversion of liquid extracts into powders.",
  ],
  [
    "Collagens",
    "Enzymatic hydrolysis — Production of hydrolysed collagen peptides.\nMembrane ultrafiltration — Peptide separation and molecular-weight refinement.\nPowder blending — Preparation of collagen-based ingredient mixtures and formulations.",
  ],
  [
    "Proteins",
    "Wet extraction — Recovery of plant protein fractions.\nCentrifugal separation — Separation of protein-rich fractions from other components.\nMembrane filtration — Protein concentration and purification.\nDrying and powder processing — Preparation of protein powders and blends.",
  ],
  [
    "Prebiotics",
    "Whole-cell fermentation — Production of short-chain fructo-oligosaccharides from cane sugar.",
  ],
  [
    "Probiotics",
    "Controlled fermentation — Cultivation of selected microbial strains.\nCentrifugal harvesting — Separation and concentration of microbial biomass.\nFreeze-drying and spray drying — Strain-appropriate preparation of dried cultures.",
  ],
  [
    "Postbiotics",
    "Formulation and blending — Incorporation of prepared postbiotic ingredients into customised formulations.",
  ],
] as const;
const quality = [
  [
    "Ingredient Identity and Composition",
    "HPLC — Recovery of selected plant compounds.\nHPTLC — Extraction of selected oils and lipophilic compounds.\nGC / GC-MS — Purification and enrichment of phytochemical.\nUV–Vis spectrophotometry — Extract concentration and solvent removal.",
  ],
  [
    "Purity and Safety",
    "ICP-MS — Heavy-metal and trace-element analysis.\nHeadspace GC — Residual-solvent analysis.\nGC-MS/MS and LC-MS/MS — Pesticide-residue analysis.\nMicrobiological testing — Total counts, yeast, mould and specified pathogens.",
  ],
  [
    "Category-Specific Analysis",
    "Amino acid analysis by HPLC — Protein and collagen compositional profiles.\nHydroxyproline analysis — Collagen characterisation.\nKjeldahl / Dumas — Nitrogen-based protein-content estimation.\nHPLC / ion chromatography — Prebiotic carbohydrate composition and purity.\nPCR and whole-genome sequencing — Microbial identification and strain characterisation.\nCFU enumeration — Viable counts for probiotic preparations.",
  ],
  [
    "Quality Assurance",
    "Specification review — Defined identity, composition and acceptance criteria.\nMethod suitability — Analytical procedures matched to the ingredient.\nBatch documentation — COAs, test results and batch identification.\nTraceability records — Documented links between source, processing and supplied material.",
  ],
] as const;
export default function SciencePage() {
  return (
    <main className="science-page">
      <SiteHeader />
      <PageScrollReveal className="science-content">
        <section className="science-hero">
          <SiteImage
            src={assets + "imgJamesBaltzJAt6CN6Zl8MUnsplash11.png"}
            alt="Agricultural machinery working across a vast green field"
          />
          <h1>Science</h1>
        </section>
        <section className="science-intro">
          <div className="science-intro-photo">
            <SiteImage
              src={assets + "imgPexelsTimaMiroshnichenko65111691.png"}
              alt="Researcher examining plants in a greenhouse"
            />
          </div>
          <div className="science-intro-copy">
            <h2>Nature is complex. Science helps us understand it.</h2>
            <p>
              Two ingredients with the same name may not necessarily be the
              same.
              <br />
              Where they come from, how they are manufactured, their
              composition, how they are tested and the evidence behind them can
              all influence their characteristics and suitability for a
              formulation.
            </p>
            <strong>
              That is why we look at ingredients through three fundamental
              lenses.
            </strong>
            <div className="science-lenses">
              {lenses.map(([title, id, art], i) => (
                <a key={title} href={"#" + id}>
                  <SiteImage
                    className="science-lens-art"
                    src={assets + art + ".svg"}
                    alt=""
                  />
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <SiteImage
                    className="science-lens-arrow"
                    src={assets + "imgBiArrowUpRightCircle.svg"}
                    alt=""
                  />
                  <h3>{title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section
          className="science-manufacturing"
          id="manufacturing-capabilities"
        >
          <header>
            <h2>Manufacturing Capabilities</h2>
            <p>
              Our ingredient portfolio is supported by the following
              manufacturing capabilities.
            </p>
          </header>
          <div className="science-manufacturing-grid">
            <div className="science-manufacturing-photo">
              <SiteImage
                src="/home-assets/pexels-photo-5964491.jpg"
                alt="Ingredient powder being weighed during manufacturing"
              />
            </div>
            <ScienceAccordion
              className="science-capabilities"
              items={manufacturing}
              formatMethods
            />
          </div>
        </section>
        <section className="science-quality" id="quality-assurance">
          <SiteImage
            className="science-quality-background"
            src={assets + "quality-field.png"}
            alt="Botanical crops growing across agricultural fields"
          />
          <ScienceAccordion
            className="science-capabilities science-quality-accordion"
            items={quality}
            formatMethods
          />
          <div className="science-quality-heading">
            <h2>Quality Assurance and Control</h2>
            <p>
              We assess ingredient quality using the following analytical tests.
            </p>
          </div>
        </section>
        <section className="science-ingredient-research" id="ingredient-research">
          <SiteImage
            src="/science-assets/sci.jpeg"
            alt="Wind turbines above agricultural fields"
          />
          <div>
            <h2>Ingredient Research</h2>
            <p>
              We review published literature and available human clinical
              studies, considering study design, participants, dosage, duration
              and outcomes. We assess consistency across studies and limitations
              that affect interpretation.
            </p>
            <p>
              Composition, processing, marker levels and strain identity, where
              relevant, help establish how closely an ingredient matches the
              preparation studied. Evidence for one preparation does not
              automatically apply to every ingredient with the same name.
            </p>
            <p>
              Our review connects these details with practical ingredient
              selection and formulation discussions, while identifying where
              further investigation could add value.
            </p>
          </div>
        </section>
      </PageScrollReveal>
      <HomeFooter />
    </main>
  );
}
