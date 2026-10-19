import { SiteHeader } from "../../components/SiteHeader";
import { HomeFooter } from "../../components/home/HomeFooter";
import ProductCatalogue from "./ProductCatalogue";
import "./products.css";
export const metadata={title:"Products | Zeovus Herbs",description:"Explore our Indian botanical extracts, collagen and gelatin, and prebiotic ingredient catalogues."};
export default function ProductsPage(){return <main className="products-page"><SiteHeader/><ProductCatalogue/><HomeFooter/></main>}
