import { SiteHeader } from "../components/SiteHeader";
import { HomeFooter } from "../components/home/HomeFooter";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <SiteHeader />

      <section className="notfound-hero">
        {/* Decorative botanical background image */}
        <div className="notfound-bg" aria-hidden="true">
          <img
            src="/home-assets/imgIstockphoto1735861991024X10241.png"
            alt=""
            className="notfound-bg__img"
          />
          <div className="notfound-bg__overlay" />
        </div>

        <div className="notfound-content">
          {/* Big 404 display */}
          <p className="notfound-eyebrow">Page not found</p>
          <h1 className="notfound-code">404</h1>

          <p className="notfound-message">
            Looks like this ingredient hasn&apos;t been discovered yet.
            <br />
            The page you&apos;re looking for has moved, or doesn&apos;t exist.
          </p>

          <div className="notfound-actions">
            <a href="/" className="notfound-btn notfound-btn--primary">
              Back to Home
            </a>
            <a href="/products" className="notfound-btn notfound-btn--outline">
              Explore Ingredients
            </a>
          </div>
        </div>

        {/* Decorative leaf SVG blob */}
        <svg
          className="notfound-leaf"
          viewBox="0 0 420 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M60 480 C-80 340 20 60 210 20 C400 -20 480 180 420 320 C360 460 200 560 60 480Z"
            fill="currentColor"
            opacity="0.13"
          />
          <path
            d="M210 20 C210 20 160 200 240 360 C280 440 340 470 420 320"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.25"
            fill="none"
          />
        </svg>
      </section>

      <HomeFooter />
    </main>
  );
}
