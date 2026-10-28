"use client";

import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import "./site-header.css";
import { useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import {IngredientMenu} from "./IngredientMenu";
import {SiteImage} from "./SiteImage";
function HeaderImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <SiteImage src={`/figma-assets/${src}`} alt={alt} />;
}

function HeaderNav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void }) {
  const pathname = usePathname();
  const activeClass = (href: string) => pathname === href ? "is-active" : undefined;
  return (
    <>
      <nav className="site-header__nav"><div><Link className={activeClass("/")} href="/">Home</Link><Link className={activeClass("/about")} href="/about">About Us</Link><IngredientMenu /><Link className={activeClass("/science")} href="/science">Science</Link><Link href="/#stories">Blog</Link></div><div><span className="site-header__voices">Voices From Our World</span><Link className={`site-header__contact ${activeClass("/contact") || ""}`} href="/contact">Contact us <ArrowIcon/></Link></div></nav>
      {menuOpen&&<div className="site-header__mobile-menu" id="mobile-nav-menu" role="navigation" aria-label="Mobile navigation"><Link className={activeClass("/")} href="/" onClick={()=>setMenuOpen(false)}>Home</Link><Link className={activeClass("/about")} href="/about" onClick={()=>setMenuOpen(false)}>About Us</Link><IngredientMenu mobile onNavigate={()=>setMenuOpen(false)} /><Link className={activeClass("/science")} href="/science" onClick={()=>setMenuOpen(false)}>Science</Link><Link href="/#stories" onClick={()=>setMenuOpen(false)}>Blog</Link><span className="site-header__voices-mobile">Voices From Our World</span><Link className={`site-header__mobile-contact ${activeClass("/contact") || ""}`} href="/contact" onClick={()=>setMenuOpen(false)}>Contact us <ArrowIcon/></Link></div>}
    </>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <div className="site-header__top">
      <div className="site-header__brand"> <HeaderImage src="logo.png" alt="Zeovus Herbs" /><span>Plants with<br />purpose</span></div>
      <label className="site-header__search">Search <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></label>
      <button className={`site-header__menu-toggle ${menuOpen?"is-open":""}`} type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-nav-menu" onClick={()=>setMenuOpen(open=>!open)}><i/><i/><i/></button>
    </div>
    <Suspense fallback={<nav className="site-header__nav"><div><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/products">Ingredients</Link><Link href="/science">Science</Link><Link href="/#stories">Blog</Link></div><div><span className="site-header__voices">Voices From Our World</span><Link className="site-header__contact" href="/contact">Contact us <ArrowIcon/></Link></div></nav>}>
      <HeaderNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Suspense>
  </header>;
}




