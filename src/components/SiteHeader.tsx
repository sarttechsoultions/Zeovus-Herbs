"use client";

import { useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import {SiteImage} from "./SiteImage";
function HeaderImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <SiteImage src={`/figma-assets/${src}`} alt={alt} />;
}

function HeaderNav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void }) {
  const pathname = usePathname();
  const activeClass = (href: string) => pathname === href ? "is-active" : undefined;
  return (
    <>
      <nav className="site-header__nav"><div><a className={activeClass("/")} href="/">Home</a><a className={activeClass("/about")} href="/about">About Us</a><a className={activeClass("/products")} href="/products">Products</a><a className={activeClass("/science")} href="/science">Science</a><a href="/#stories">Blog</a></div><div><span className="site-header__voices">Voices From Our World</span><a className={`site-header__contact ${activeClass("/contact") || ""}`} href="/contact">Contact us <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></a></div></nav>
      {menuOpen&&<div className="site-header__mobile-menu" id="mobile-nav-menu" role="navigation" aria-label="Mobile navigation"><a className={activeClass("/")} href="/" onClick={()=>setMenuOpen(false)}>Home</a><a className={activeClass("/about")} href="/about" onClick={()=>setMenuOpen(false)}>About Us</a><a className={activeClass("/products")} href="/products" onClick={()=>setMenuOpen(false)}>Products</a><a className={activeClass("/science")} href="/science" onClick={()=>setMenuOpen(false)}>Science</a><a href="/#stories" onClick={()=>setMenuOpen(false)}>Blog</a><span className="site-header__voices-mobile">Voices From Our World</span><a className={`site-header__mobile-contact ${activeClass("/contact") || ""}`} href="/contact" onClick={()=>setMenuOpen(false)}>Contact us <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></a></div>}
    </>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <div className="site-header__top">
      <div className="site-header__brand"> <HeaderImage src="logo.png" alt="Zeovus Herbs" /><span>Plants with<br />purpose</span></div>
      <label className="site-header__search">Search <b>⌕</b></label>
      <button className={`site-header__menu-toggle ${menuOpen?"is-open":""}`} type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-nav-menu" onClick={()=>setMenuOpen(open=>!open)}><i/><i/><i/></button>
    </div>
    <Suspense fallback={<nav className="site-header__nav"><div><a href="/">Home</a><a href="/about">About Us</a><a href="/products">Products</a><a href="/science">Science</a><a href="/#stories">Blog</a></div><div><span className="site-header__voices">Voices From Our World</span><a className="site-header__contact" href="/contact">Contact us <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></a></div></nav>}>
      <HeaderNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Suspense>
  </header>;
}




