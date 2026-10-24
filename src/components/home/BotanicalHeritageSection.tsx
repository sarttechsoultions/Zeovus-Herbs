import { HomeImage } from "./shared";
export function BotanicalHeritageSection() {
  return <section className="botanical-heritage" aria-labelledby="heritage-title">
    <div className="heritage-story"><div className="heritage-copy"><h2 id="heritage-title">Indian Botanical Heritage</h2>
      <p>From the Himalayan foothills to tropical forests, fertile plains and coastal landscapes, the Indian Subcontinent offers extraordinary botanical diversity.</p>
      <p>For centuries, its spices and plant materials have travelled along trade routes connecting continents. Today, this heritage continues through modern extraction, ingredient characterisation and international supply.</p>
    </div><div className="heritage-image"><HomeImage src="/home-assets/imgYamabonSunRays738713119201.png" alt="Sunlight streaming through a botanical forest" /></div></div>
    <dl className="heritage-statistics"><div><dt>8%</dt><dd>of Global Flora</dd></div><div><dt>56,177</dt><dd>Documented Floristic Elements</dd></div><div><dt>4</dt><dd>Global Biodiversity Hotspots</dd></div></dl>
  </section>;
}
