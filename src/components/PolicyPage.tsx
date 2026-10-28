import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { HomeFooter } from "./home/HomeFooter";
import "./policy-page.css";

type Policy = { title: string; updated: string; blocks: { type: string; text: string }[] };

function linkedText(text: string) {
  return text.split(/(info@zeovus\.com|Privacy Policy)/g).map((part, i) =>
    part === "info@zeovus.com" ? <a key={i} href="mailto:info@zeovus.com">{part}</a> :
    part === "Privacy Policy" ? <Link key={i} href="/privacy-policy">{part}</Link> : part);
}

export function PolicyPage({ policy }: { policy: Policy }) {
  const contents = policy.blocks.flatMap((block, index) => block.type === "h2" ? [{ title: block.text, id: `section-${index}` }] : []);
  const body = [];
  for (let i = 0; i < policy.blocks.length; i++) {
    const block = policy.blocks[i];
    if (block.type === "li") {
      const items = [block.text];
      while (policy.blocks[i + 1]?.type === "li") items.push(policy.blocks[++i].text);
      body.push(<ul key={i}>{items.map((item, j) => <li key={j}>{linkedText(item)}</li>)}</ul>);
    } else if (block.type === "h2") {
      body.push(<h2 id={`section-${i}`} key={i}>{block.text}</h2>);
    } else if (block.type === "h3") {
      body.push(<h3 key={i}>{block.text}</h3>);
    } else body.push(<p key={i}>{linkedText(block.text)}</p>);
  }
  return <main className="policy-page"><SiteHeader />
    <header className="policy-hero"><div><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{policy.title}</span></nav><h1>{policy.title}</h1><p>{policy.updated}</p></div></header>
    <div className="policy-layout">
      <aside className="policy-sidebar">
        <div className="policy-contents"><p className="policy-contents-title">On this page</p><nav aria-label="Table of contents">{contents.map(item => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav></div>
      </aside>
      <article className="policy-copy" aria-label={policy.title}>{body}</article>
    </div><HomeFooter /></main>;
}
