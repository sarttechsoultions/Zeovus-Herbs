import { HomeImage } from "./shared";
import { HeritageStatistics } from "./HeritageStatistics";
export function BotanicalHeritageSection() {
  return <section className="botanical-heritage" aria-labelledby="heritage-title">
    <div className="heritage-story"><div className="heritage-copy"><h2 id="heritage-title">Indian Botanical Heritage</h2>
      <p>From the Himalayan foothills to tropical forests, fertile plains and coastal landscapes, the Indian Subcontinent offers extraordinary botanical diversity.</p>
      <p>For centuries, its spices and plant materials have travelled along trade routes connecting continents. Today, this heritage continues through modern extraction, ingredient characterisation and international supply.</p>
    </div><div className="heritage-image"><HomeImage src="/home-assets/pexels-photo-16682143.jpg" alt="Sunlight illuminating Indian botanical heritage" /></div></div>
    <HeritageStatistics />
  </section>;
}
