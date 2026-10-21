"use client";
import {useEffect,useId,useRef,useState} from 'react';
type Option={value:string;label:string;search?:string};
export default function ContactSelect({label,value,options,onChange,compact=false}:{label:string;value:string;options:Option[];onChange:(value:string)=>void;compact?:boolean}){
 const [open,setOpen]=useState(false);const [query,setQuery]=useState('');const root=useRef<HTMLDivElement>(null);const trigger=useRef<HTMLButtonElement>(null);const search=useRef<HTMLInputElement>(null);const id=useId();
 useEffect(()=>{if(!open)return;search.current?.focus();const close=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false)};document.addEventListener('pointerdown',close);return()=>document.removeEventListener('pointerdown',close)},[open]);
 const filtered=options.filter(o=>(o.label+' '+(o.search||'')).toLowerCase().includes(query.toLowerCase()));
 function close(){setOpen(false);trigger.current?.focus()}
 return <div ref={root} className={'contact-picker'+(compact?' contact-picker-compact':'')} onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();close()}if(open&&(e.key==='ArrowDown'||e.key==='ArrowUp')){e.preventDefault();const buttons=Array.from(root.current?.querySelectorAll<HTMLButtonElement>('[role="option"]')||[]);const current=buttons.indexOf(document.activeElement as HTMLButtonElement);const next=e.key==='ArrowDown'?Math.min(current+1,buttons.length-1):Math.max(current-1,0);buttons[next]?.focus()}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setOpen(false)}}>
 <button ref={trigger} type="button" className="contact-picker-trigger" aria-label={label} aria-expanded={open} aria-controls={id} aria-haspopup="listbox" onClick={()=>{setQuery('');setOpen(!open)}}><span>{options.find(o=>o.value===value)?.label||label}</span><span className="contact-dropdown-arrow" aria-hidden="true"/></button>
 {open&&<div className="contact-picker-menu"><input ref={search} type="search" aria-label={'Search '+label} placeholder={compact?'Code or country…':'Search country…'} value={query} onChange={e=>setQuery(e.target.value)}/><div role="listbox" id={id} aria-label={label} className="contact-picker-options">{filtered.map(option=><button type="button" role="option" aria-selected={option.value===value} key={option.value} onClick={()=>{onChange(option.value);close()}}>{compact&&option.search?<><span>{option.search}</span><strong>{option.label}</strong></>:option.label}{option.value===value&&<span aria-hidden="true">✓</span>}</button>)}{!filtered.length&&<p>No results found</p>}</div></div>}
 </div>
}
