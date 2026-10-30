import { NewsletterForm } from "./NewsletterForm";
import "./home-footer.css";

const brands = [
  ["Carna", "v1793340181/carna.webp", "https://zeovus.com/businesses"],
  ["Sports", "v1793340384/sports.webp", "https://zeovussports.com/"],
  ["Vet", "v1793340370/vet.webp", "https://zeovusvet.com/"],
  ["Life", "v1793340351/life.webp", "https://zeovuslife.com/"],
  ["Zeovus", "v1793340398/logo.webp", "https://zeovus.com/"],
  ["Food", "v1793340336/zeovus-food.webp", "https://www.zeovusfood.com/"],
  ["Health", "v1793340321/health.webp", "https://zeovushealth.com/"],
  ["Dermatio", "v1793340307/Dermatio.webp", "https://dermatio.in/"],
  ["Onecore", "v1793340280/onecore.webp", "https://zeovus.com/businesses"],
];
export function HomeFooter() {
  return <>
    <nav className="group-brand-strip" aria-label="Zeovus Group brands">
      {brands.map(([name, image, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={"Visit "+name}><img src={"https://res.cloudinary.com/txvbn2fn/image/upload/"+image} alt={name} loading="lazy" width="130" height="46"/></a>)}
    </nav>
    <footer className="site-footer herbs-footer">
      <div className="site-footer__brand">
        <a href="/" aria-label="Zeovus Herbs home"><img src="https://res.cloudinary.com/txvbn2fn/image/upload/v1793341194/zeovus_herbs_white.png" alt="Zeovus Herbs"/></a>
        <i>Plants With Purpose.</i>
        <p>Zeovus Herbs supplies botanical extracts, proteins, peptides and biotics, combining science, quality and ingredient expertise to support brands, formulators and manufacturers across global health, nutrition, beauty and food markets.</p>
        <div className="herbs-footer-offices">{[["India","in"],["USA","us"],["Qatar","qa"]].map(([name,code])=><a key={code} href={"https://zeovus.com/contact?country="+code+"#global-offices"} target="_blank" rel="noopener noreferrer">{name}</a>)}</div>
        <a href="mailto:info@zeovusherbs.com">info@zeovusherbs.com</a>
      </div>
      <div className="site-footer__column"><b>Company</b><a href="/about">About Zeovus Herbs</a><a href="/science">Science</a><a href="https://zeovus.com/news" target="_blank" rel="noopener noreferrer">Voices From Our World</a><a href="/contact">Contact Us</a>
      <b className="herbs-footer-find">Find Your Ingredient</b><a href="/products#ingredient-application">By Application</a><a href="/products#ingredient-category">By Category</a></div>
      <div className="herbs-footer-news"><h3>Voices from our world</h3><p>Stay updated with our latest innovations, wellness insights, and global initiatives.</p><NewsletterForm /><div className="herbs-footer-social" aria-label="Social media">
        <a href="https://www.instagram.com/zeovusworld" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://www.linkedin.com/company/zeovus-ventures-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.57 1.98 3.57 4.55v5.23Z"/></svg></a>
        <a href="https://twitter.com/zeovus" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.56 22H2.43l7.99-9.13L.8 2h6.41l4.43 6.76L18.9 2Zm-1.1 18h1.73L6.27 3.89H4.41L17.8 20Z"/></svg></a>
      </div>
      </div><div className="herbs-footer-banner"><img className="herbs-footer-logo" src="https://res.cloudinary.com/txvbn2fn/image/upload/v1793341194/zeovus_herbs_white.png" alt="Zeovus" draggable={false}/></div><p className="site-footer__legal"><span>© 2026 Zeovus Herbs. All rights reserved.</span><span><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-of-use">Terms of Use</a></span></p>
    </footer>
  </>;
}
