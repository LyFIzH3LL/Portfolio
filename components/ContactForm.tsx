"use client";

import { useState, type FormEvent } from "react";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({ kind: "error", message: body.error ?? "The message could not be sent." });
        return;
      }
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "No connection to the server. Check your internet and try again." });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="cf-name">
        Your name
      </label>
      <input id="cf-name" name="name" type="text" placeholder="Your Name" autoComplete="name" required maxLength={100} />

      <label className="sr-only" htmlFor="cf-email">
        Your email
      </label>
      <input id="cf-email" name="email" type="email" placeholder="Your Email" autoComplete="email" required maxLength={200} />

      <label className="sr-only" htmlFor="cf-subject">
        Subject
      </label>
      <input id="cf-subject" name="subject" type="text" placeholder="Subject" required maxLength={150} />

      <label className="sr-only" htmlFor="cf-message">
        Your message
      </label>
      <textarea id="cf-message" name="message" placeholder="Your Message" rows={5} required maxLength={5000} />

      {/* Honeypot: hidden from people, filled in by bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="send" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
        </svg>
      </button>

      <p className="form-status" role="status" aria-live="polite">
        {status.kind === "sent" && "Message sent. I'll reply to the email you gave."}
        {status.kind === "error" && (
          <>
            {status.message} You can also email me at <a href={`mailto:${email}`}>{email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
