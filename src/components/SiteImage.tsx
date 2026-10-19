"use client";
import {createContext,useContext,useEffect,useState,type ImgHTMLAttributes,type ReactNode} from 'react';
import slots from '../config/site-image-slots.json';
type Override={key:string;url:string;alt?:string};
const Context=createContext<Record<string,Override>>({});
export function SiteImagesProvider({children}:{children:ReactNode}){const [images,setImages]=useState<Record<string,Override>>({});useEffect(()=>{const load=()=>{void fetch('/api/content/images',{cache:'no-store'}).then(r=>r.json()).then(result=>{if(result.success)setImages(Object.fromEntries(result.data.map((v:Override)=>[v.key,v])))}).catch(()=>{})};load();window.addEventListener('focus',load);return()=>window.removeEventListener('focus',load)},[]);return <Context.Provider value={images}>{children}</Context.Provider>}
type SiteImageProps=ImgHTMLAttributes<HTMLImageElement>&{siteImageKey?:string};
export function SiteImage({src,alt,siteImageKey,...props}:SiteImageProps){const images=useContext(Context);const slot=(siteImageKey?slots.find(s=>s.key===siteImageKey):undefined)||slots.find(s=>s.source===src);const override=slot?images[slot.key]:undefined;return <img {...props} src={override?.url||src} alt={override?.alt||alt}/>}
