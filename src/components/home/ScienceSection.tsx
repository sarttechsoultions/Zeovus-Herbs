"use client";

import { useState } from "react";
import { HomeImage } from "./shared";

interface ScienceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const scienceCards: ScienceCard[] = [
  {
    id: "clinical-research",
    title: "CLINICAL RESEARCH",
    description:
      "Understanding what has been studied, how it has been studied and what the available evidence tells us",
    image: "/home-assets/imgLucasVasques9VnACvX2748Unsplash1.png",
    alt: "Scientist examining botanical research samples with a microscope",
  },
  {
    id: "standardisation",
    title: "STANDARDISATION",
    description:
      "Rigorous standardisation protocols ensuring consistent active compounds, potency and purity across every batch.",
    image: "/home-assets/imgPexelsBulat8431243575272340544741.png",
    alt: "Laboratory technician standardising herbal extract formulations",
  },
  {
    id: "traceability",
    title: "TRACEABILITY",
    description:
      "Complete farm-to-extract visibility and documentation, verifying botanical origin, harvesting practices and chain of custody.",
    image: "/home-assets/imgFlower350359012801.png",
    alt: "Botanical plant specimen showing seed pods and traceability records",
  },
];

export function ScienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="science" className="source">
      <div className="source-heading">
        <h2>From Source to Possibility</h2>
        <p>
          We believe understanding an ingredient begins with understanding the
          science behind it.
        </p>
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
                <p className="research-card__description">{card.description}</p>
              </div>

              <a
                href={`/science#${card.id}`}
                className="research-card__button"
                aria-label={`Explore ${card.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
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


