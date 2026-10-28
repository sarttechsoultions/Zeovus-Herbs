import JsonLoader from "@/components/JsonLoader";
import {Suspense} from 'react';
import {SiteHeader} from '../../../components/SiteHeader';
import {HomeFooter} from '../../../components/home/HomeFooter';
import LiveProductDetail from '../LiveProductDetail';
import '../native-bovine-collagen/detail.css';
import '../products.css';
async function Detail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <LiveProductDetail slug={slug}/>}
export default function Page({params}:{params:Promise<{slug:string}>}){return <main className="product-detail-page"><SiteHeader/><Suspense fallback={<JsonLoader label="Loading ingredient details…"/>}><Detail params={params}/></Suspense><HomeFooter/></main>}
