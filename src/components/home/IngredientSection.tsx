"use client";

import { HomeImage } from "./shared";

interface IngredientItem {
  id: string;
  name: string;
  image: string;
}

const featuredIngredient: IngredientItem = {
  id: "botanical-extracts",
  name: "Botanical Extracts",
  image: "/home-assets/imgIstockphoto1735861991024X10241.png",
};

const rightIngredients: IngredientItem[] = [
  {
    id: "collagen-gelatin",
    name: "Collagen, Gelatin & Peptides",
    image: "/home-assets/imgIstockphoto19896105631024X10241.png",
  },
  {
    id: "plant-proteins",
    name: "Plant Proteins",
    image: "/home-assets/img11.png",
  },
  {
    id: "probiotics",
    name: "Prebiotics, Probiotics & Postbiotics",
    image: "/home-assets/imgPexelsKarolaG40470091.png",
  },
];

function IngredientMark() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M5.5 10.5L10.5 5.5M10.5 5.5H7M10.5 5.5V9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IngredientSection() {
  return (
    <section id="ingredients" className="built">
      {/* Heading placed above the cards aligned to the right */}
      <div className="built-header">
        <h2>Ingredients Built Around Science.</h2>
      </div>

      <div className="built-grid">
        {/* Left Card: Featured with rounded corners + button */}
        <div className="built-col-featured">
          <div className="ingredient-card ingredient-card--featured">
            <HomeImage src={featuredIngredient.image} alt={featuredIngredient.name} />
            <div className="ingredient-card__overlay" />
            <span className="ingredient-pill">
              <IngredientMark />
              <span>{featuredIngredient.name}</span>
            </span>
          </div>

          <a href="/products" className="built-button">
            VIEW ALL INGREDIENTS <span className="built-button__arrow">→</span>
          </a>
        </div>

        {/* Right 3 Cards: Sharp corners (border-radius: 0) */}
        <div className="built-cards-row">
          {rightIngredients.map((item) => (
            <div key={item.id} className="ingredient-card ingredient-card--sharp">
              <HomeImage src={item.image} alt={item.name} />
              <div className="ingredient-card__overlay" />
              <span className="ingredient-pill">
                <IngredientMark />
                <span>{item.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


