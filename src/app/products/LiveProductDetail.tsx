"use client";
import JsonLoader from "@/components/JsonLoader";

import ArrowIcon from "@/components/ArrowIcon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Product = {
  commonName?:string;
  standardization?:string;
  plantPartUsed?:string;
  benefits?:string[];
  name: string;
  images: { url: string; alt: string }[];
  description: string[];
  applications: { title: string }[];
  technicalSpecifications: { columns: string[]; rows: { parameter: string; values: string[] }[] };
  sourceAndOrigin: { title: string; label: string }[];
  processingAndQualityParameters: string[];
  qualityDocumentation: { title: string; url?: string }[];
  clinicalEvidence: { title: string; summary: string; pmid?: string; url: string }[];
  technicalSourceIds: string[];
};

function DetailDropdownCard({
  id,
  title,
  isOpen,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className={`detail-card ${isOpen ? "is-open" : ""}`} id={`section-${id}`}>
      <button
        type="button"
        className="detail-card-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <h2>{title}</h2>
        <span className={`detail-card-chevron ${isOpen ? "open" : ""}`} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className={`detail-card-body ${isOpen ? "open" : ""}`} id={`content-${id}`} inert={!isOpen}>
        <div className="detail-card-inner">
          <div className="detail-card-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LiveProductDetail({ slug }: { slug: string }) {
  const params = useSearchParams();
  const requestedReturn = params.get("returnTo") || "";
  const returnTo = requestedReturn === "/products" || requestedReturn.startsWith("/products?") ? requestedReturn : "/products";
  return <ProductDetail key={slug} slug={slug} returnTo={returnTo}/>;
}
function ProductDetail({ slug, returnTo }: { slug: string; returnTo: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");

  const [retry, setRetry] = useState(0);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [openStudies, setOpenStudies] = useState<Record<number, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleStudy = (index: number) => {
    setOpenStudies((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const abort = new AbortController();
    fetch("/api/catalogue/" + encodeURIComponent(slug), { signal: abort.signal })
      .then(async (response) => {
        if (!response.headers.get("content-type")?.includes("application/json")) {
          throw Error("Products are temporarily unavailable. Please refresh and try again.");
        }
        const result = await response.json();
        if (!response.ok) {
          throw Error(response.status === 404 ? "This product is not available." : result.message);
        }
        setProduct(result.data);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(e.message);
      });
    return () => abort.abort();
  }, [slug, retry]);

  if (error) {
    return (
      <div className="detail-body">
        <p role="alert">{error}</p>
        <button onClick={() => {setError('');setRetry(retry + 1);}}>Retry</button>
        <Link href="/products">
          {" "}
          <ArrowIcon direction="left" /> Back to ingredients
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <JsonLoader label="Loading ingredient details…"/>
    );
  }

  const image = product.images[0];

  return (
    <div className="detail-body">
      <Link className="detail-back" href={returnTo}>
        <ArrowIcon direction="left" /> Back to Ingredients
      </Link>
      <div className="detail-layout">
        <aside className="detail-gallery">
          <div className="detail-main-photo">
            {image?.url&&image.url!=="/file.svg"?<img src={image.url} alt={image.alt||product.name}/>:<div className="ingredient-image-pending"><span aria-hidden="true">❧</span><span>{product.name}</span><small>Ingredient image coming soon</small></div>}
          </div>
        </aside>

        <div className="detail-information">
          <div className="ingredient-detail-title"><h1 className="live-product-title">{product.name}</h1>{product.commonName&&<span>{product.commonName}</span>}</div>

          <section className="detail-card detail-card-static ingredient-description">
            <h2>Description</h2>
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {product.standardization&&<section className="detail-card detail-card-static ingredient-spec"><h2>Standardization</h2><p>{product.standardization}</p></section>}
          {product.plantPartUsed&&<section className="detail-card detail-card-static ingredient-spec"><h2>Plant Part Used</h2><p>{product.plantPartUsed}</p></section>}
          {!!product.benefits?.length&&<DetailDropdownCard id="benefits" title="Benefits" isOpen={!!openSections.benefits} onToggle={()=>toggleSection('benefits')}><ul className="ingredient-benefits">{product.benefits.map((benefit,i)=><li key={i}>{benefit}</li>)}</ul></DetailDropdownCard>}
          {product.applications.length > 0 && (
            <DetailDropdownCard
              id="applications"
              title="Applications"
              isOpen={!!openSections.applications}
              onToggle={() => toggleSection("applications")}
            >
              <div className="detail-tiles">
                {product.applications.map((a, i) => (
                  <div key={i}>
                    <p>{a.title}</p>
                  </div>
                ))}
              </div>
            </DetailDropdownCard>
          )}

          {!product.standardization && product.technicalSpecifications.rows.length > 0 && (
            <DetailDropdownCard
              id="tech-specs"
              title="Technical Specifications & Available Grades"
              isOpen={!!openSections.techSpecs}
              onToggle={() => toggleSection("techSpecs")}
            >
              <div className="detail-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      {product.technicalSpecifications.columns.map((c, i) => (
                        <th key={i}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.technicalSpecifications.rows.map((r, i) => (
                      <tr key={i}>
                        <th>{r.parameter}</th>
                        {r.values.map((v, j) => (
                          <td key={j}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DetailDropdownCard>
          )}

          {!product.plantPartUsed && product.sourceAndOrigin.length > 0 && (
            <DetailDropdownCard
              id="source-origin"
              title="Source & Origin"
              isOpen={!!openSections.sourceOrigin}
              onToggle={() => toggleSection("sourceOrigin")}
            >
              <div className="detail-tiles">
                {product.sourceAndOrigin.map((s, i) => (
                  <div key={i}>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DetailDropdownCard>
          )}

          {product.processingAndQualityParameters.length > 0 && (
            <DetailDropdownCard
              id="processing-quality"
              title="Critical Processing & Quality Parameters"
              isOpen={!!openSections.processingQuality}
              onToggle={() => toggleSection("processingQuality")}
            >
              <ul className="detail-checklist">
                {product.processingAndQualityParameters.map((p, i) => (
                  <li key={i}>✓ {p}</li>
                ))}
              </ul>
            </DetailDropdownCard>
          )}

          {product.qualityDocumentation.length > 0 && (
            <DetailDropdownCard
              id="quality-docs"
              title="Quality Documentation"
              isOpen={!!openSections.qualityDocs}
              onToggle={() => toggleSection("qualityDocs")}
            >
              <ul className="detail-checklist">
                {product.qualityDocumentation.map((d, i) => (
                  <li key={i}>
                    {d.url ? (
                      <a href={d.url} target="_blank" rel="noreferrer">
                        {d.title} <ArrowIcon direction="upRight" />
                      </a>
                    ) : (
                      d.title
                    )}
                  </li>
                ))}
              </ul>
            </DetailDropdownCard>
          )}

          {product.clinicalEvidence.length > 0 && (
            <DetailDropdownCard id="clinical-studies" title="Clinical Studies" isOpen={!!openSections.clinicalStudies} onToggle={()=>toggleSection('clinicalStudies')}>
              <div className="detail-studies">
                {product.clinicalEvidence.map((s, i) => {
                  const isStudyOpen = !!openStudies[i];
                  return (
                    <article key={i} className={isStudyOpen ? "is-open" : ""}>
                      <button
                        type="button"
                        className="detail-study-trigger"
                        onClick={() => toggleStudy(i)}
                        aria-expanded={isStudyOpen}
                      >
                        <div className="detail-study-header-left">
                          <h3>{s.title}</h3>
                          {s.pmid && <span className="detail-study-pmid">PMID {s.pmid}</span>}
                        </div>
                        <span className={`detail-study-chevron ${isStudyOpen ? "open" : ""}`} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>
                      <div className={`detail-study-body ${isStudyOpen ? "open" : ""}`}>
                        <div className="detail-study-inner">
                          <div className="detail-study-content">
                            <p>{s.summary}</p>
                            {s.url && (
                              <a href={s.url} target="_blank" rel="noreferrer">
                                View study <ArrowIcon direction="upRight" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </DetailDropdownCard>
          )}

          {product.technicalSourceIds.length > 0 && (
            <DetailDropdownCard
              id="source-ids"
              title="Technical Source IDs"
              isOpen={!!openSections.sourceIds}
              onToggle={() => toggleSection("sourceIds")}
            >
              <div className="detail-source-ids">
                {product.technicalSourceIds.map((id, i) => (
                  <span key={i}>{id}</span>
                ))}
              </div>
            </DetailDropdownCard>
          )}

          <Link className="product-enquire" href="/contact">
            Enquire about this ingredient <ArrowIcon direction="right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
