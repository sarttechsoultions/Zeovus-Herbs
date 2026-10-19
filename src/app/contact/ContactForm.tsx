"use client";
import {SiteImage} from "../../components/SiteImage";

import { useEffect, useState, type FormEvent } from "react";
import {getCountries,getCountryCallingCode,type CountryCode} from "libphonenumber-js";
import ContactSelect from "./ContactSelect";
const root="/contact-assets/";
export default function ContactForm(){
 const [status,setStatus]=useState("");const [notificationType,setNotificationType]=useState<"success"|"error">("success");
 useEffect(()=>{if(!status)return;const timer=setTimeout(()=>setStatus(""),8000);return()=>clearTimeout(timer)},[status]);
 const [busy,setBusy]=useState(false);const [country,setCountry]=useState<CountryCode>('IN');const [dial,setDial]=useState('91');
 async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();if(busy)return;const form=event.currentTarget;const data=new FormData(form);setBusy(true);setStatus('');try{const response=await fetch('/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:data.get('name'),email:data.get('email'),phone:data.get('phone'),countryCode:'+'+dial,country:new Intl.DisplayNames(['en'],{type:'region'}).of(country),interest:data.get('interest'),organisation:data.get('organisation'),message:data.get('message')})});const result=await response.json();if(!response.ok)throw Error(result.message||'Unable to send enquiry');setNotificationType("success");setStatus(result.message);form.reset();setCountry('IN');setDial('91');}catch(error){setNotificationType("error");setStatus((error as Error).message);}finally{setBusy(false)}} const regionNames=new Intl.DisplayNames(["en"],{type:"region"});
 const countries=getCountries().sort((a,b)=>(regionNames.of(a)||a).localeCompare(regionNames.of(b)||b));
 return <>{status&&<div className={`contact-notification ${notificationType}`} role={notificationType==="error"?"alert":"status"}><span className="contact-notification-icon" aria-hidden="true">{notificationType==="success"?"✓":"!"}</span><div><strong>{notificationType==="success"?"Enquiry sent":"Unable to send"}</strong><p>{status}</p></div><button type="button" aria-label="Dismiss notification" onClick={()=>setStatus("")}>×</button></div>}<form aria-busy={busy} className="contact-form" onSubmit={submit}>
 <label className="contact-field"><SiteImage src={root+"imgGroup.svg"} alt=""/><input name="name" aria-label="Full Name" placeholder="Full Name" autoComplete="name" required maxLength={120}/></label>
 <div className="contact-form-row"><div className="contact-field"><ContactSelect compact label="Phone country code" value={dial} options={Array.from(new Set(countries.map(code=>getCountryCallingCode(code)))).sort((a,b)=>Number(a)-Number(b)).map(code=>({value:code,label:"+"+code,search:countries.filter(c=>getCountryCallingCode(c)===code).map(c=>regionNames.of(c)).join(", ")}))} onChange={setDial}/><input name="phone" type="tel" aria-label="Phone" placeholder="Phone" autoComplete="tel-national" maxLength={25} pattern="[0-9 ()\-]{5,25}"/></div><label className="contact-field"><SiteImage src={root+"imgCarbonEmail.svg"} alt=""/><input name="email" type="email" aria-label="Email id" placeholder="Email id" autoComplete="email" required/></label></div>
 <div className="contact-form-row"><div className="contact-field"><ContactSelect label="Country" value={country} options={countries.map(code=>({value:code,label:regionNames.of(code)||code}))} onChange={value=>{const code=value as CountryCode;setCountry(code);setDial(getCountryCallingCode(code));}}/></div><label className="contact-field"><select name="interest" aria-label="I am interested in" required defaultValue=""><option value="" disabled>I am interested in</option><option>Sourcing ingredients</option><option>Market representation</option><option>Distribution</option><option>Business development</option><option>Partnership opportunities</option><option>General enquiry</option></select></label></div>
 <label className="contact-field"><SiteImage src={root+"imgGriddyIconsEnterpriseFilled.svg"} alt=""/><input name="organisation" aria-label="Organisation" placeholder="Organisation" autoComplete="organization" maxLength={200}/></label>
 <label className="contact-field contact-message"><SiteImage src={root+"imgBoxiconsMessageBubbleDotsFilled.svg"} alt=""/><textarea name="message" aria-label="Message" placeholder="Message" required maxLength={5000}/></label>
 <button type="submit" disabled={busy}>{busy?"Sending…":"Send Message"} <SiteImage src={root+"imgArrowRight.svg"} alt=""/></button><p className="contact-form-note">Your enquiry will be sent directly to our team.</p>
 </form></>;
}




