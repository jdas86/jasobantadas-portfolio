"use client";

import { BriefcaseBusiness, Contact, FolderKanban, Sparkles } from "lucide-react";

const items = [
  { href: "#hero", label: "Home", icon: Sparkles },
  { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "#achievements", label: "Impact", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Contact }
];

export function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
      <div className="grid grid-cols-4 rounded-3xl border border-white/10 bg-slate-950/80 p-2 backdrop-blur-xl">
        {items.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} className="flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] text-slate-300">
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
