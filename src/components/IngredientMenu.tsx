"use client";
import JsonLoader from "@/components/JsonLoader";

import Link from "next/link";
import ArrowIcon from './ArrowIcon';
import ChevronIcon from './ChevronIcon';
import {useEffect,useRef,useState} from 'react';
import {ingredientHref,type IngredientNavigation} from '@/lib/ingredients';
import './ingredient-menu.css';

export function IngredientMenu({mobile=false,onNavigate}:{mobile?:boolean;onNavigate?:()=>void}){
 const [open,setOpen]=useState(false);
 const [activePane,setActivePane]=useState<"applications"|"categories"|null>(null);
 const [navigation,setNavigation]=useState<IngredientNavigation|null>(null);
 const [error,setError]=useState(false);
 const [retry,setRetry]=useState(0);
 const root=useRef<HTMLDivElement>(null);
 const trigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(!open)return;const controller=new AbortController();fetch('/api/catalogue/navigation',{signal:controller.signal}).then(async r=>{if(!r.ok)throw Error();return r.json();}).then(r=>setNavigation(r.data)).catch(e=>{if(e.name!=='AbortError')setError(true);});return()=>controller.abort();},[open,retry]);
 useEffect(()=>{if(!open)return;const close=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false);};const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus();}};document.addEventListener('pointerdown',close);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',key);};},[open]);
 const close=()=>{setOpen(false);onNavigate?.();};
 const id=mobile?'ingredients-mobile':'ingredients-desktop';
 return <div ref={root} className={'ingredient-menu'+(mobile?' ingredient-menu--mobile':'')}>
  <button ref={trigger} className={'ingredient-menu__trigger'+(open?' is-open':'')} type="button" aria-expanded={open} aria-controls={id} onClick={()=>{setOpen(v=>!v);if(mobile)setActivePane(null);}}>Ingredients <ChevronIcon up={open}/></button>
  {open&&<div className="ingredient-menu__panel" id={id} aria-label="Browse ingredients">
   <div className="ingredient-menu__top"><Link href="/products" onClick={close}>View all ingredients <ArrowIcon/></Link><button aria-label="Close ingredients menu" onClick={()=>{setOpen(false);trigger.current?.focus();}}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div>
   <div className="ingredient-menu__columns">
    <section><h2>{mobile?<button type="button" className="ingredient-menu__pane-trigger" aria-expanded={activePane==="applications"} aria-controls={`${id}-application-pane`} onClick={()=>setActivePane(activePane==="applications"?null:"applications")}>By Application <ChevronIcon up={activePane==="applications"}/></button>:"By Application"}</h2><div id={`${id}-application-pane`} hidden={mobile&&activePane!=="applications"}>{error?<div className="ingredient-menu__feedback" role="alert">Applications could not be loaded. <button onClick={()=>{setError(false);setRetry(v=>v+1);}}>Try again</button></div>:!navigation?<JsonLoader label="Loading applications…" compact/>:navigation.applications.map(group=><details key={group.title} name={`${id}-applications`} className="ingredient-menu__group"><summary>{group.title}<ChevronIcon/></summary><div className="ingredient-menu__links"><Link className="ingredient-menu__all" href={ingredientHref({application:group.title})} onClick={close}>All {group.title} ingredients <ArrowIcon/></Link>{group.subcategories.map(title=><Link key={title} href={ingredientHref({application:group.title,subcategory:title})} onClick={close}>{title}</Link>)}</div></details>)}</div></section>
    <section><h2>{mobile?<button type="button" className="ingredient-menu__pane-trigger" aria-expanded={activePane==="categories"} aria-controls={`${id}-category-pane`} onClick={()=>setActivePane(activePane==="categories"?null:"categories")}>By Category <ChevronIcon up={activePane==="categories"}/></button>:"By Category"}</h2><div id={`${id}-category-pane`} hidden={mobile&&activePane!=="categories"}>{(navigation?.categories||[]).map(({id,title})=><Link className="ingredient-menu__category" key={id} href={ingredientHref({category:id})} onClick={close}>{title}<ArrowIcon direction="upRight"/></Link>)}</div></section>
   </div>
  </div>}
 </div>;
}
