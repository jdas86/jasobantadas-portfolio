import { resumeData } from "@/data/resume-data";
import { MobileMenu } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

const nav = [
  { href: "#hero", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 section-pad pt-4">
        <div className="container-shell flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-xl">
          <a href="#hero" className="text-sm font-semibold tracking-[0.24em] text-sky-200">{resumeData.basics.name}</a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <MobileMenu links={nav} />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
