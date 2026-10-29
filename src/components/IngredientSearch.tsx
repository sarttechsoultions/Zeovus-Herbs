"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function IngredientSearch() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [items, setItems] = useState<{slug: string; name: string}[]>([]);
  const [corrected, setCorrected] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const term = value.trim();
  useEffect(() => {
    setItems([]);
    setCorrected("");
    setFailed(false);
    if (term.length < 1) { setLoading(false); return; }
    const controller = new AbortController();
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`/api/catalogue?search=${encodeURIComponent(term)}&limit=6`, {signal: controller.signal});
        if (!response.ok) throw new Error("Search failed");
        const result = await response.json();
        if (!controller.signal.aborted) { setItems(result.data || []); setCorrected(result.correctedSearch || ""); }
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [term]);
  return <form action="/products" role="search" className="site-header__search" onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <input type="search" name="search" placeholder="Search ingredients" aria-label="Search ingredients" autoComplete="off" required maxLength={200} value={value} onChange={event => setValue(event.target.value)} onKeyDown={event => { if (event.key === "Escape") setFocused(false); }} aria-expanded={focused && term.length >= 1} aria-controls="ingredient-search-suggestions"/>
    <button type="submit" aria-label="Search"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></button>
    {focused && term.length >= 1 && <div className="ingredient-search-suggestions" id="ingredient-search-suggestions">
      <div role="status">{loading ? "Searching…" : failed ? "Search unavailable. Please try again." : !items.length ? "No matching ingredients." : corrected ? "Showing matches for "+corrected : "Suggested ingredients"}</div>
      {items.map(item => <Link key={item.slug} href={`/products/${encodeURIComponent(item.slug)}?returnTo=${encodeURIComponent('/products?search='+encodeURIComponent(term))}`} onClick={() => setFocused(false)}>{item.name}</Link>)}
      <Link className="ingredient-search-all" href={`/products?search=${encodeURIComponent(term)}`} onClick={() => setFocused(false)}>View all results →</Link>
    </div>}
  </form>;
}
