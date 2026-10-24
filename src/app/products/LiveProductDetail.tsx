"use client";
import ArrowIcon from "@/components/ArrowIcon";
import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
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
      <div className={`detail-card-body ${isOpen ? "open" : ""}`} id={`content-${id}`}>
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
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const [active, setActive] = useState(0);
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
    setError("");
    setProduct(null);
    setActive(0);
    setOpenSections({});
    setOpenStudies({});
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
        <button onClick={() => setRetry(retry + 1)}>Retry</button>
        <Link href="/products">
          {" "}
          <ArrowIcon direction="left" /> Back to products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <p className="detail-body" role="status">
        Loading product details…
      </p>
    );
  }

  const image = product.images[active];

  return (
    <div className="detail-body">
      <Link className="detail-back" href="/products">
        <ArrowIcon direction="left" /> Back to Products
      </Link>
      <div className="detail-layout">
        <aside className="detail-gallery">
          <div className="detail-main-photo">
            <img src={image?.url || "/file.svg"} alt={image?.alt || product.name} />
          </div>
          <div className="detail-thumbnails">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={"View image " + (i + 1)}
                aria-pressed={active === i}
              >
                <img src={img.url} alt={img.alt} />
              </button>
            ))}
          </div>
        </aside>

        <div className="detail-information">
          <h1 className="live-product-title">{product.name}</h1>

          <section className="detail-card detail-card-static">
            <h2>Product Description</h2>
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

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

          {product.technicalSpecifications.rows.length > 0 && (
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

          {product.sourceAndOrigin.length > 0 && (
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
            <section className="detail-card detail-card-static">
              <h2>Clinical Evidence</h2>
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
            </section>
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
