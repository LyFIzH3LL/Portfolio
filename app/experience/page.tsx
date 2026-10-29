import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { education, work } from "@/data/profile";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" lead="Industry roles in full-stack web development, and my degree." />

      <h2 className="subheading">Work</h2>
      <ol className="entries timeline">
        {work.map((j) => (
          <li key={j.company} className="entry">
            <div className="entry-head">
              <h3>{j.role}</h3>
              <time className="period">{j.period}</time>
            </div>
            <p className="entry-sub">
              {j.company}, {j.place}
            </p>
            <ul className="points">
              {j.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className="subheading">Education</h2>
      <div className="entry entry-solo">
        <div className="entry-head">
          <h3>{education.school}</h3>
          <span className="period">{education.period}</span>
        </div>
        <p className="entry-sub">{education.degree}</p>
        <p className="entry-text">
          GPA {education.gpa}. {education.note}
        </p>
      </div>
    </>
  );
}
