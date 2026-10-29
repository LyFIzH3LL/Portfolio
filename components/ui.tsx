import type { Link } from "@/data/profile";

export function Ext({ link, className }: { link: Link; className?: string }) {
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </div>
  );
}
