import {SiteImage} from "./SiteImage";
function HeaderImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <SiteImage src={`/figma-assets/${src}`} alt={alt} />;
}

export function SiteHeader() {
  return <header className="site-header">
    <div className="site-header__top">
      <div className="site-header__brand"><HeaderImage src="logo.png" alt="Zeovus Herbs" /><span>Plants with<br />purpose</span></div>
      <label className="site-header__search">Search <b>⌕</b></label>
    </div>
    <nav className="site-header__nav"><div><a href="/">Home</a><a href="/about">About Us</a><a href="/products">Products</a><a href="/science">Science</a><a href="/#stories">Blog</a></div><div><a className="site-header__voices" href="/#stories">Voices From Our World</a><a className="site-header__contact" href="/contact">Contact us <b>→</b></a></div></nav>
  </header>;
}




