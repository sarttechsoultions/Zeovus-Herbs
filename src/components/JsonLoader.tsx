"use client";
import {Lottie} from 'lottie-react';
import './json-loader.css';

export default function JsonLoader({label='Loading…',compact=false}:{label?:string;compact?:boolean}){
 return <div className={'json-loader'+(compact?' json-loader--compact':'')} role="status" aria-live="polite" aria-busy="true"><div className="json-loader__animation" aria-hidden="true"><Lottie src="/product-loader.json" loop autoplay/></div><span>{label}</span></div>;
}
