import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { skills } from "@/data/profile";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <PageHeader title="Skills" lead="Languages, frameworks and tools I use in my work and research." />
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <dt>{s.group}</dt>
            <dd>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
