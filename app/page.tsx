import NextLink from "next/link";
import { Ext } from "@/components/ui";
import { profile, projects, research, work } from "@/data/profile";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-main">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <NextLink className="button" href="/contact">
              Get in touch
            </NextLink>
            <a className="button button-ghost" href={profile.resume} download>
              Download résumé
            </a>
            {profile.links.map((l) => (
              <Ext key={l.href} link={l} className="text-link" />
            ))}
          </div>
        </div>
        <dl className="facts">
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="overview">
        <section className="overview-block" aria-labelledby="ov-research">
          <h2 id="ov-research">Research</h2>
          <ul>
            {research.map((r) => (
              <li key={r.title}>
                <span className="overview-title">{r.title}</span>
                <span className="overview-meta">{r.status}</span>
              </li>
            ))}
          </ul>
          <NextLink href="/research" className="overview-more">
            Read about my research
          </NextLink>
        </section>

        <section className="overview-block" aria-labelledby="ov-work">
          <h2 id="ov-work">Experience</h2>
          <ul>
            {work.map((j) => (
              <li key={j.company}>
                <span className="overview-title">
                  {j.role}, {j.company}
                </span>
                <span className="overview-meta">{j.period}</span>
              </li>
            ))}
          </ul>
          <NextLink href="/experience" className="overview-more">
            See experience and education
          </NextLink>
        </section>

        <section className="overview-block" aria-labelledby="ov-projects">
          <h2 id="ov-projects">Projects</h2>
          <ul>
            {projects.map((p) => (
              <li key={p.title}>
                <span className="overview-title">{p.title}</span>
                <span className="overview-meta">{p.stack.slice(0, 2).join(", ")}</span>
              </li>
            ))}
          </ul>
          <NextLink href="/projects" className="overview-more">
            Browse projects
          </NextLink>
        </section>
      </div>
    </>
  );
}
