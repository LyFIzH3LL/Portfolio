import type { Metadata } from "next";
import { Ext, PageHeader, Tags } from "@/components/ui";
import { research } from "@/data/profile";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        lead="Long-term memory for language models, hyperspectral imaging of historical inks, and how people talk about agentic AI."
      />
      <ul className="entries">
        {research.map((r) => (
          <li key={r.title} className="entry">
            <div className="entry-head">
              <h2>{r.title}</h2>
              <span className="status">{r.status}</span>
            </div>
            {r.subtitle && <p className="entry-sub">{r.subtitle}</p>}
            <p className="entry-text">{r.summary}</p>
            <Tags items={r.tags} />
            {r.links && (
              <p className="entry-links">
                {r.links.map((l) => (
                  <Ext key={l.href} link={l} />
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
