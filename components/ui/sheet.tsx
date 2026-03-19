"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
        className="rounded-2xl border border-white/10 bg-white/5 p-3"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div className="absolute right-4 top-16 z-50 w-72 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-2xl px-3 py-3 text-sm hover:bg-white/5" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
