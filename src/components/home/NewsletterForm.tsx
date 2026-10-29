"use client";
import { useState, type FormEvent } from 'react';
export function NewsletterForm() {
  const [email,setEmail]=useState('');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [failed,setFailed]=useState(false);
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); if(busy)return;
    setBusy(true);setMessage('');setFailed(false);
    try {
      const response=await fetch('/api/newsletter',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});
      const data=await response.json();
      if(!response.ok||!data.success)throw new Error(data.message||'Unable to subscribe. Please try again.');
      setEmail('');setMessage('Thank you for subscribing!');
    } catch(error){setFailed(true);setMessage(error instanceof Error?error.message:'Unable to subscribe. Please try again.');}
    finally{setBusy(false);}
  }
  return <><form className="herbs-newsletter-form" onSubmit={submit} aria-busy={busy}><input type="email" name="email" aria-label="Email address" placeholder="Email" value={email} onChange={event=>setEmail(event.target.value)} required maxLength={254} disabled={busy}/><button type="submit" disabled={busy}>{busy?'Subscribing…':'Subscribe'} <span aria-hidden="true">→</span></button></form>{message&&<p className="herbs-newsletter-message" role={failed?'alert':'status'}>{message}</p>}</>;
}
