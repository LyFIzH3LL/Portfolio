import type { Metadata } from "next";
import { Ext, PageHeader, Tags } from "@/components/ui";
import { projects } from "@/data/profile";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" lead="Web apps I have shipped and machine learning work outside my main research." />
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.title} className="project">
            <h2>{p.title}</h2>
            <p className="entry-text">{p.summary}</p>
            <Tags items={p.stack} />
            {p.links && (
              <p className="entry-links">
                {p.links.map((l) => (
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
