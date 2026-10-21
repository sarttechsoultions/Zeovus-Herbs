"use client";
import ArrowIcon from "@/components/ArrowIcon";
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {Lottie} from 'lottie-react';
import {PageScrollReveal} from '../../components/PageScrollReveal';

type Product={_id:string;name:string;slug:string;summary:string;images:{url:string;alt:string}[]};
type CataloguePage={data:Product[];pagination:{page:number;total:number;pages:number}};
type Overview=Record<string,CataloguePage>;
const categories=[['botanical-extracts','Indian botanical extract catalogue'],['collagen-gelatin','Collagen and gelatin: B2B ingredient catalogue'],['plant-proteins','Plant protein ingredient catalogue'],['prebiotics','Prebiotic'],['other','Other ingredients']] as const;
let overviewRequest:Promise<Overview>|null=null;

function ProductLoader({compact=false}:{compact?:boolean}){
 return <div className={'product-loader'+(compact?' product-loader--compact':'')} role="status" aria-label="Loading products">
  <Lottie src="/product-loader.json" loop autoplay />
  {!compact&&<p>Loading products…</p>}
 </div>;
}

function loadOverview(refresh=false){
 if(refresh)overviewRequest=null;
 if(!overviewRequest)overviewRequest=fetch('/api/catalogue/overview').then(async response=>{
  if(!response.headers.get('content-type')?.includes('application/json'))throw Error('Products are temporarily unavailable. Please refresh and try again.');
  const result=await response.json();
  if(!response.ok)throw Error(result.message||'Unable to load products.');
  return result.data as Overview;
 });
 return overviewRequest;
}

function Category({id,title,initial}:{id:string;title:string;initial:CataloguePage}){
 const [items,setItems]=useState<Product[]>(initial.data);const [page,setPage]=useState(1);const [pages,setPages]=useState(initial.pagination.pages);const [loading,setLoading]=useState(false);const [error,setError]=useState('');const [retry,setRetry]=useState(0);
 useEffect(()=>{setItems(initial.data);setPages(initial.pagination.pages);setPage(1);setError('')},[initial]);
 useEffect(()=>{if(page===1)return;const abort=new AbortController();setLoading(true);setError('');fetch('/api/catalogue?'+new URLSearchParams({category:id,page:String(page),limit:'6'}),{signal:abort.signal}).then(async response=>{const result=await response.json();if(!response.ok)throw Error(result.message||'Unable to load products.');setItems(old=>[...old,...result.data]);setPages(result.pagination.pages)}).catch(e=>{if(e.name!=='AbortError')setError(e.message)}).finally(()=>{if(!abort.signal.aborted)setLoading(false)});return()=>abort.abort()},[id,page,retry]);
 if(!items.length)return null;
 return <section className="product-category" id={id}><h1>{title}</h1><div className="product-grid">{items.map(item=><article className="product-card" key={item._id}><Link className="product-photo" href={'/products/'+item.slug}><img src={item.images[0]?.url||'/file.svg'} alt={item.images[0]?.alt||item.name} onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/file.svg'}}/></Link><h2>{item.name}</h2><p className="catalogue-summary">{item.summary}</p><Link className="product-detail-link" href={'/products/'+item.slug}>View Details <span><ArrowIcon direction="upRight"/></span></Link></article>)}</div>{loading&&<ProductLoader compact/>}{error&&<div className="catalogue-feedback" role="alert"><p>{error}</p><button onClick={()=>setRetry(retry+1)}>Try again</button></div>}{!loading&&!error&&page<pages&&<button className="product-view-all" onClick={()=>setPage(page+1)}>Show more products <ArrowIcon direction="right"/></button>}</section>;
}

export default function ProductCatalogue(){const [overview,setOverview]=useState<Overview|null>(null);const [error,setError]=useState('');const load=(refresh=false)=>{setError('');loadOverview(refresh).then(setOverview).catch(e=>setError((e as Error).message))};useEffect(()=>{load()},[]);if(error)return <div className="catalogue-feedback" role="alert"><p>{error}</p><button onClick={()=>load(true)}>Try again</button></div>;if(!overview)return <ProductLoader/>;return <PageScrollReveal className="product-catalogues">{categories.map(([id,title])=><Category key={id} id={id} title={title} initial={overview[id]||{data:[],pagination:{page:1,total:0,pages:0}}}/>)}</PageScrollReveal>}
