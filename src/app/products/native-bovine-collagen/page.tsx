import {SiteHeader} from '../../../components/SiteHeader';
import {HomeFooter} from '../../../components/home/HomeFooter';
import LiveProductDetail from '../LiveProductDetail';
import './detail.css';
import '../products.css';
export default function ProductDetail(){return <main className="product-detail-page"><SiteHeader/><LiveProductDetail slug="native-bovine-collagen"/><HomeFooter/></main>}
