"use client";

import { useState } from "react";
import { HomeImage } from "./shared";

interface ScienceCard {
  id: string;
  title: string;  image: string;
  alt: string;
}

const scienceCards: ScienceCard[] = [
  { id: "manufacturing", title: "Manufacturing Capabilities", image: "/home-assets/imgPexelsBulat8431243575272340544741.png", alt: "Botanical ingredient manufacturing" },
  { id: "quality", title: "Quality Assurance & Control", image: "/home-assets/imgFlower350359012801.png", alt: "Botanical quality assurance" },
  { id: "clinical-research", title: "Clinical Research", image: "/home-assets/imgLucasVasques9VnACvX2748Unsplash1.png", alt: "Scientist working in a research laboratory" },
];

export function ScienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="science" className="source">
      <div className="source-heading">
        <h2>From Source to Possibility</h2>

      </div>

      <div className="research" role="tablist" aria-label="Science and Research Pillars">
        {scienceCards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={card.id}
              className={`research-card ${
                isActive ? "research-card--active" : "research-card--inactive"
              }`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <HomeImage src={card.image} alt={card.alt} />
              <div className="research-card__overlay" />

              <div className="research-card__content">
                <h3 className="research-card__title">{card.title}</h3>
              </div>

              <a
                href="/science"
                className="research-card__button"
                aria-label={`Explore ${card.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <img className="research-arrow" src="/home-assets/imgBasilArrowRightOutline.svg" alt="" />
              </a>

              <div className="research-card__vertical-title">
                <span>{card.title}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}


