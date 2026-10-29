"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pages, profile } from "@/data/profile";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <NextLink href="/" className="topbar-name">
          {profile.name}
        </NextLink>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" aria-label="Main" className={open ? "is-open" : undefined}>
          {pages.map((p) => {
            const active = pathname === p.href;
            return (
              <NextLink key={p.href} href={p.href} aria-current={active ? "page" : undefined}>
                {p.label}
              </NextLink>
            );
          })}
          <a className="button button-small" href={profile.resume} download>
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
