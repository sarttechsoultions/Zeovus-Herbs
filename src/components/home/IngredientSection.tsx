"use client";
import Link from "next/link";


import { HomeImage } from "./shared";

interface IngredientItem {
  id: string;
  name: string;
  image: string;
}

const featuredIngredient: IngredientItem = {
  id: "botanical-extracts",
  name: "Botanical Extracts",
  image: "/home-assets/Botanical.png",
};

const rightIngredients: IngredientItem[] = [
  {
    id: "collagen-gelatin",
    name: "Collagen, Gelatin & Peptides",
    image: "/home-assets/Collagen.png",
  },
  {
    id: "plant-proteins",
    name: "Plant Proteins",
    image: "/home-assets/Plant.png",
  },
  {
    id: "probiotics",
    name: "Prebiotics, Probiotics & Postbiotics",
    image: "/home-assets/Prebiotics.png",
  },
];

function IngredientMark() {
  return (
    <img src="/home-assets/imgGroup.svg" alt="" className="ingredient-mark" />
  );
}

export function IngredientSection() {
  return (
    <section id="ingredients" className="built">

      <div className="built-header">
        <h2>Our Ingredients</h2>

      </div>

      <div className="built-grid">

        <div className="built-col-featured">
          <Link href="/products" className="ingredient-card ingredient-card--featured">
            <HomeImage src={featuredIngredient.image} alt={featuredIngredient.name} />
            <span className="ingredient-pill">
              <IngredientMark />
              <span>{featuredIngredient.name}</span>
            </span>
          </Link>
        </div>


        <div className="built-cards-row">
          {rightIngredients.map((item) => (
            <Link key={item.id} href="/products" className="ingredient-card ingredient-card--sharp">
              <HomeImage src={item.image} alt={item.name} />
              <span className="ingredient-pill">
                <IngredientMark />
                <span>{item.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
        <Link href="/products" className="built-button">
          VIEW ALL INGREDIENTS <span className="built-button__arrow"><img src="/home-assets/imgArrowRight.svg" alt="" /></span>
        </Link>
    </section>
  );
}


