import JsonLoader from "@/components/JsonLoader";
import { SiteHeader } from "../../components/SiteHeader";
import { HomeFooter } from "../../components/home/HomeFooter";
import ProductCatalogue from "./IngredientCatalogue";
import {Suspense} from "react";
import "./products.css";
export const metadata={title:"Ingredients | Zeovus Herbs",description:"Explore botanical extracts, proteins, prebiotics, probiotics, postbiotics and collagen peptides by category and application."};
export default function ProductsPage(){return <main className="products-page"><SiteHeader/><Suspense fallback={<JsonLoader label="Loading ingredients…"/>}><ProductCatalogue/></Suspense><HomeFooter/></main>}
