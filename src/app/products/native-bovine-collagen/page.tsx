import { Suspense } from "react";
import {SiteHeader} from '../../../components/SiteHeader';
import {HomeFooter} from '../../../components/home/HomeFooter';
import LiveProductDetail from '../LiveProductDetail';
import './detail.css';
import '../products.css';
export default function ProductDetail(){return <main className="product-detail-page"><SiteHeader/><Suspense fallback={<p>Loading ingredient…</p>}><LiveProductDetail slug="native-bovine-collagen"/></Suspense><HomeFooter/></main>}
