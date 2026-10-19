"use client";

import { useState } from "react";
import {SiteImage} from "./SiteImage";
function HeaderImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <SiteImage src={`/figma-assets/${src}`} alt={alt} />;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <div className="site-header__top">
      <div className="site-header__brand"> <HeaderImage src="logo.png" alt="Zeovus Herbs" /><span>Plants with<br />purpose</span></div>
      <label className="site-header__search">Search <b>⌕</b></label>
      <button className={`site-header__menu-toggle ${menuOpen?"is-open":""}`} type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-nav-menu" onClick={()=>setMenuOpen(open=>!open)}><i/><i/><i/></button>
    </div>
    <nav className="site-header__nav"><div><a href="/">Home</a><a href="/about">About Us</a><a href="/products">Products</a><a href="/science">Science</a><a href="/#stories">Blog</a></div><div><a className="site-header__voices" href="/#stories">Voices From Our World</a><a className="site-header__contact" href="/contact">Contact us <b>→</b></a></div></nav>
    {menuOpen&&<div className="site-header__mobile-menu" id="mobile-nav-menu" role="navigation" aria-label="Mobile navigation"><a href="/" onClick={()=>setMenuOpen(false)}>Home</a><a href="/about" onClick={()=>setMenuOpen(false)}>About Us</a><a href="/products" onClick={()=>setMenuOpen(false)}>Products</a><a href="/science" onClick={()=>setMenuOpen(false)}>Science</a><a href="/#stories" onClick={()=>setMenuOpen(false)}>Blog</a><a href="/#stories" onClick={()=>setMenuOpen(false)}>Voices From Our World</a><a className="site-header__mobile-contact" href="/contact" onClick={()=>setMenuOpen(false)}>Contact us <b>→</b></a></div>}
  </header>;
}




