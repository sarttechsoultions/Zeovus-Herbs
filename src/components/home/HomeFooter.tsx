import { NewsletterForm } from "./NewsletterForm";
import "./home-footer.css";

const brands = [
  ["Sports", "sports.png", "https://zeovussports.com/"],
  ["Vet", "vet.png", "https://zeovusvet.com/"],
  ["Life", "life.png", "https://zeovuslife.com/"],
  ["Food", "zeovus-food.png", "https://www.zeovusfood.com/"],
  ["Herbs", "herbs.png", "https://zeovusherbs.com/"],
  ["Health", "health.png", "https://zeovushealth.com/"],
  ["Dermatio", "Dermatio.png", "https://dermatio.in/"],
  ["Onecore", "onecore.png", "https://zeovus.com/businesses"],
  ["Carna", "carna.png", "https://zeovus.com/businesses"],
];

export function HomeFooter() {
  return <>
    <nav className="group-brand-strip" aria-label="Zeovus Group brands">
      {brands.map(([name, image, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={"Visit "+name}><img src={"https://zeovus.com/images/logos/"+image} alt={name} loading="lazy" width="130" height="46"/></a>)}
    </nav>
    <footer className="site-footer herbs-footer">
      <div className="site-footer__brand">
        <a href="/" aria-label="Zeovus Herbs home"><img src="/home-assets/imgWhatsAppImage20260925At1446382.png" alt="Zeovus Herbs"/></a>
        <i>Plants With Purpose.</i>
        <p>Zeovus Herbs supplies botanical extracts, proteins, peptides and biotics, combining science, quality and ingredient expertise to support brands, formulators and manufacturers across global health, nutrition, beauty and food markets.</p>
        <div className="herbs-footer-offices">{[["India","in"],["USA","us"],["Qatar","qa"]].map(([name,code])=><a key={code} href={"https://zeovus.com/contact?country="+code+"#global-offices"} target="_blank" rel="noopener noreferrer">{name}</a>)}</div>
        <a href="mailto:info@zeovusherbs.com">info@zeovusherbs.com</a>
      </div>
      <div className="site-footer__column"><b>Company</b><a href="/about">About Zeovus Herbs</a><a href="/science">Science</a><a href="https://zeovus.com/news" target="_blank" rel="noopener noreferrer">Voices From Our World</a><a href="/contact">Contact Us</a>
      <b className="herbs-footer-find">Find Your Ingredient</b><a href="/products#ingredient-application">By Application</a><a href="/products#ingredient-category">By Category</a></div>
      <div className="herbs-footer-news"><h3>Voices from our world</h3><p>Stay updated with our latest innovations, wellness insights, and global initiatives.</p><NewsletterForm /><div className="herbs-footer-social" aria-label="Social media">
        <a href="https://www.instagram.com/zeovusworld" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://www.linkedin.com/company/zeovus-ventures-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4"/><circle cx="7" cy="7" r=".8" fill="currentColor"/></svg></a>
        <a href="https://twitter.com/zeovus" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m4 4 16 16M20 4 4 20"/></svg></a>
      </div>
      </div><div className="herbs-footer-banner"><img className="herbs-footer-logo" src="/logofooter.png" alt="Zeovus" draggable={false}/></div><p className="site-footer__legal"><span>© 2026 Zeovus Herbs. All rights reserved.</span><span><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-of-use">Terms of Use</a></span></p>
    </footer>
  </>;
}
