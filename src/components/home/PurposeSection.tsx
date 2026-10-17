import { HomeImage } from "./shared";

export function PurposeSection() {
  return <section id="about" className="purpose" style={{ height: 647, gridTemplateColumns: "743px 697px", alignItems: "start" }}>
    <div className="purpose-image" style={{ width: 638, height: 638, marginTop: -7, borderRadius: "0 0 100px 0" }}><HomeImage src="/home-assets/imgOrganicAjwainSeedsAuthenticIndianCookingSpice1.png" alt="Ajwain seeds in a wooden bowl" /></div>
    <div className="purpose-copy" style={{ width: 552, padding: "87px 0 0" }}>
      <h2 className="purpose-title">Science in every ingredient.</h2>
      <p className="purpose-text">Zeovus Herbs connects clinically studied botanical and natural ingredients with businesses across global markets.</p>
      <p className="purpose-text">From taking Indian ingredients to the world to representing global ingredient innovators in India, we bring together <b>science, ingredient understanding and market access.</b></p>
      <p className="purpose-text purpose-text--last">As part of Zeovus Group, our perspective extends beyond the ingredient itself to the products and applications it can become.</p>
      <a href="/about" className="button purpose-button">Discover Zeovus Herbs <b>→</b></a>
    </div>
  </section>;
}


