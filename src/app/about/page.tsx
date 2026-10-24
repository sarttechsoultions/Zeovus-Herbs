import {SiteImage} from "../../components/SiteImage";
import { SiteHeader } from "../../components/SiteHeader";
import { HomeFooter } from "../../components/home/HomeFooter";
import { PageScrollReveal } from "../../components/PageScrollReveal";
import { AboutExcellence } from "../../components/AboutExcellence";
import { AboutQuality } from "../../components/AboutQuality";
import "./about.css";

const image = (name: string) => `/about-assets/${name}.png`;
const logoImage = (name: string) => `/about-assets/logo/${name}.png`;
const certifications: [string, string, boolean?][] = [
  ["gmp 1 (1)", "GMP", true],
  ["92c2555d4812f013062e73580be26998 1", "Certification", true],
  ["haccp 1 (1)", "HACCP", true],
  ["iso22000 1", "ISO 22000", true],
  ["brcgs 1", "BRCGS", true],
  ["ISO-Logo 1 (1)", "ISO", true],
  ["istockphoto-2212365940-612x612-removebg-preview 1", "ISO 22716:2007", true],
  ["78bbaa2a9fe47482a8429baccb280504 1", "NSF", true],
  ["da98e66acf973292f75b109a25a43813 1", "REACH compliant", true],
  ["vegan 2 (1)", "Vegan", true],
  ["561-5613644_usda-logo-png-transparent-png-removebg-preview 1", "Organic", true],
  ["halal 1 (1)", "Halal", true],
  ["images-removebg-preview 1", "Kosher", true],
  ["ifs-logo 1", "IFS", false],
  ["cosmos-standard 1", "COSMOS standard", false],
  ["fssai 2 (1)", "FSSAI", true],
];
export const metadata = { title: "About Us | Zeovus Herbs" };
export default function AboutPage() {
  return <main className="about-page"><SiteHeader /><PageScrollReveal className="about-content">
    <section className="about-hero"><SiteImage src={image("imgPexelsFlickr1552741")} alt="Farmers walking through green fields at sunrise" /><h1>About Us</h1></section>
    <section className="about-intro"><h2>Rooted in India. Connected to the world</h2><p>Zeovus Herbs connects clinically studied botanical and natural ingredients with businesses across global markets.<br />From bringing Indian ingredients to the world to representing global ingredient innovators in India, we build partnerships around science, quality and market understanding.</p></section>
    <section className="about-story"><div className="about-story-image"><SiteImage src={image("imgPexelsViniciusvieirafotografia265242551")} alt="Botanical plants in a greenhouse" /></div><div className="about-story-copy"><small>Our Story</small><h2>Built on a deeper understanding of ingredients</h2><p>Zeovus Herbs is part of the wider Zeovus Group, with businesses across pharmaceuticals, human supplements, pet health, cosmetics and functional foods.</p><p>This ecosystem gives us a perspective that goes beyond ingredient supply. We understand where ingredients are used, how they fit into formulations and the role they can play across different product categories.</p><p>Backed by leadership experience of over two decades across healthcare and innovation, Zeovus Herbs was created to connect credible ingredient science with businesses and markets around the world.</p><a className="about-button" href="https://zeovus.com" target="_blank" rel="noreferrer">Discover Zeovus Group <SiteImage src="/about-assets/imgArrowRight.svg" alt="" /></a></div></section>
    <section className="about-vision"><SiteImage src={image("imgHeaderPhotoE16504682561861")} alt="Cultivating plants in a nursery" /><div><h2>Our Vision</h2><p>To build a trusted global platform where scientifically studied ingredients connect with the businesses creating the next generation of health products.</p><h2>Our Mission</h2><p>To identify, understand and connect clinically studied ingredients with relevant markets, while helping Indian botanical innovation reach the world and bringing global ingredient science closer to India.</p></div></section>
    <AboutExcellence />
    <section className="about-source"><SiteImage className="about-source-bg" src={image("imgPexelsAravindPS1808524778396623441")} alt="Botanical cultivation across green hills" /><div><h2>It Starts at the Source</h2><p>Every ingredient carries a story shaped by its origin, composition and processing.</p><p>From phytochemicals such as flavonoids to peptides and fermentation-derived compounds, our perspective spans the chemistry behind a broad range of ingredients.</p><p>We bring together sourcing knowledge and scientific understanding to explore ingredient identity, purity and compositional consistency, connecting the characteristics of each material with the needs of your formulation.</p></div></section>
    <section className="about-research"><SiteImage src={image("imgPexelsThisisengineering39129471")} alt="Researcher examining botanical plants" /><div><h2>Research &amp; Development</h2><p>Research helps us dive deeper into the intricacies of an ingredient, understand what has been studied, and identify where further opportunities may exist.</p><p>Our approach combines established ingredient knowledge with contemporary scientific literature, ingredient characterisation and application understanding.</p><p>We continuously explore emerging research across ingredient science, processing technologies and formulation development to identify opportunities relevant to our partners and portfolio.</p></div></section>
    <section className="about-quality"><div className="about-quality-intro"><header><SiteImage src={image("imgSeal51")} alt="Quality assurance seal" /><h2>Quality &amp; Assurance</h2></header><p>Functional identity, specifications, analytical parameters, documentation and consistency all contribute to understanding whether an ingredient is suitable for its intended application.</p><p>As part of the wider Zeovus quality ecosystem, we place emphasis on disciplined evaluation, transparent documentation and clearly defined quality parameters.</p></div><AboutQuality /></section>
    <section className="about-certifications" aria-label="Quality certifications"><div className="about-certifications__track">{[...certifications, ...certifications].map(([name, label, isLogo], index) => <div aria-hidden={index >= certifications.length || undefined} key={`${name}-${index}`}><SiteImage src={isLogo ? logoImage(name) : image(name)} alt={index < certifications.length ? label : ""} /></div>)}</div></section>
    <section className="about-sustainability"><SiteImage src={image("imgRandyFathDDc0VuVhLuUnsplash2")} alt="Tractor working on a farm" /><div><h2>Responsibility &amp; Sustainability</h2><p>At Zeovus Herbs, we believe botanical wellness must go hand in hand with care for the planet. As part of Zeovus Group, we support the Group’s goal of achieving Net Zero emissions by 2035. We aim to advance this commitment through responsible sourcing, biodiversity conservation, resource efficiency, reduced packaging waste and more sustainable supply chains. Guided by the UN Sustainable Development Goals, we strive to align our growth with a healthier, more sustainable future.</p><strong>Growing responsibly. Growing together.</strong></div></section>
  </PageScrollReveal><HomeFooter /></main>;
}
