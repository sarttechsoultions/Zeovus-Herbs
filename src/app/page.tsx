import { BotanicalHeritageSection } from "../components/home/BotanicalHeritageSection";
import { ScrollReveal } from "../components/home/ScrollReveal";
import "./home.css";
import { SiteHeader } from "../components/SiteHeader";
import { AdvantageSection } from "../components/home/AdvantageSection";
import { GrowTogetherSection } from "../components/home/GrowTogetherSection";
import { HeroSection } from "../components/home/HeroSection";
import { HomeFooter } from "../components/home/HomeFooter";
import { IngredientSection } from "../components/home/IngredientSection";
import { MarketSection } from "../components/home/MarketSection";
import { PurposeSection } from "../components/home/PurposeSection";
import { ScienceSection } from "../components/home/ScienceSection";

export default function Home() {
    return <main className="home-page">
        <SiteHeader />
        <HeroSection />
        <ScrollReveal>
        <div className="home-reveal-item"><PurposeSection /></div>
        <div className="home-reveal-item"><MarketSection /></div>
        <div className="home-reveal-item"><AdvantageSection /></div>
        <div className="home-reveal-item"><IngredientSection /></div>
        <div className="home-reveal-item"><BotanicalHeritageSection /></div>
        <div className="home-reveal-item"><ScienceSection /></div>
        <div className="home-reveal-item"><GrowTogetherSection /></div>
        </ScrollReveal>
        <HomeFooter />
    </main>;
}



