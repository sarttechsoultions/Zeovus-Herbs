import ArrowIcon from "@/components/ArrowIcon";
import { HomeImage } from "./shared";

export function PurposeSection() {
  return (
    <section
      id="about"
      className="purpose"
      style={{
        height: 647,
        gridTemplateColumns: "743px 697px",
        alignItems: "start",
      }}
    >
      <div
        className="purpose-image"
        style={{
          width: 638,
          height: 638,
          marginTop: -7,
          borderRadius: "0 0 100px 0",
        }}
      >
        <HomeImage
          src="/home-assets/pexels-photo-31346461.jpg"
          alt="Botanical roots used in functional ingredients"
        />
      </div>
      <div className="purpose-copy" style={{ width: 552, padding: "87px 0 0" }}>
        <h2 className="purpose-title">
          Functional ingredients. Greater possibilities.
        </h2>
        <p className="purpose-text">
          Zeovus Herbs is a leading supplier of nutraceuticals and cosmeceutical
          ingredients, standardized herbal extracts, and probiotics to global
          organizations.
          <br />
          We combine science, ingredient expertise and manufacturing insight,
          helping organizations select the right raw materials and develop
          world-class formulations.
        </p>
        <a href="/about" className="button purpose-button">
          Discover Zeovus Herbs{" "}
          <b>
            <ArrowIcon direction="right" />
          </b>
        </a>
      </div>
    </section>
  );
}
