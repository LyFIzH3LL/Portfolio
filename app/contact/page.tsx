import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHeader } from "@/components/ui";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        lead="Open to software engineering and AI research roles. Send a message here, or reach me directly."
      />
      <div className="contact-layout">
        <ContactForm email={profile.email} />
        <dl className="contact-list">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </dd>
          </div>
          {profile.links.map((l) => (
            <div key={l.href}>
              <dt>{l.label}</dt>
              <dd>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
