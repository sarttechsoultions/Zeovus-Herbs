"use client";

import Link from "next/link";
import { IngredientSearch } from "./IngredientSearch";
import ArrowIcon from "./ArrowIcon";
import "./site-header.css";
import { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import { IngredientMenu } from "./IngredientMenu";
import { SiteImage } from "./SiteImage";
function HeaderImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <SiteImage src={src} alt={alt} />;
}

function HeaderNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}) {
  const pathname = usePathname();
  const activeClass = (href: string) =>
    pathname === href ? "is-active" : undefined;
  return (
    <>
      <nav className="site-header__nav">
        <div>
          <Link className={activeClass("/")} href="/">
            Home
          </Link>
          <Link className={activeClass("/about")} href="/about">
            About Us
          </Link>
          <IngredientMenu />
          <Link className={activeClass("/science")} href="/science">
            Science
          </Link>
        </div>
        <div>
          <span className="site-header__voices">Voices From Our World</span>
          <Link
            className={`site-header__contact ${activeClass("/contact") || ""}`}
            href="/contact"
          >
            Contact us <ArrowIcon />
          </Link>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="site-header__mobile-menu"
          id="mobile-nav-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <Link
            className={activeClass("/")}
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={activeClass("/about")}
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <IngredientMenu mobile onNavigate={() => setMenuOpen(false)} />
          <Link
            className={activeClass("/science")}
            href="/science"
            onClick={() => setMenuOpen(false)}
          >
            Science
          </Link>
          <span className="site-header__voices-mobile">Voices From Our World</span>
          <Link
            className={`site-header__mobile-contact ${activeClass("/contact") || ""}`}
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact us <ArrowIcon />
          </Link>
        </div>
      )}
    </>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const media = window.matchMedia("(max-width:760px)");
    const body = document.body,
      html = document.documentElement;
    const previous = { body: body.style.overflow, html: html.style.overflow };
    const sync = () => {
      body.style.overflow = media.matches ? "hidden" : previous.body;
      html.style.overflow = media.matches ? "hidden" : previous.html;
    };
    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      body.style.overflow = previous.body;
      html.style.overflow = previous.html;
    };
  }, [menuOpen]);
  return (
    <header className="site-header">
      <div className="site-header__top">
        <Link
          href="/"
          className="site-header__brand"
          aria-label="Zeovus Herbs home"
          onClick={() => setMenuOpen(false)}
        >
          <HeaderImage src="/logonav.png" alt="Zeovus Herbs" />
        </Link>
        <IngredientSearch />
        <button
          className={`site-header__menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>
      <Suspense
        fallback={
          <nav className="site-header__nav">
            <div>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/products">Ingredients</Link>
              <Link href="/science">Science</Link>
            </div>
            <div>
              <span className="site-header__voices">Voices From Our World</span>
              <Link className="site-header__contact" href="/contact">
                Contact us <ArrowIcon />
              </Link>
            </div>
          </nav>
        }
      >
        <HeaderNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Suspense>
    </header>
  );
}
