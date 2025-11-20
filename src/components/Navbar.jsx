import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="flex items-center gap-2 text-white/90 hover:text-white"
              onClick={() => scrollTo("home")}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight">VibeSites</span>
            </button>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <button onClick={() => scrollTo("ai")} className="hover:text-white transition">AI Automation</button>
              <button onClick={() => scrollTo("work")} className="hover:text-white transition">Work</button>
              <button onClick={() => scrollTo("pricing")} className="hover:text-white transition">Pricing</button>
              <a href="#" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition border border-white/10">Sign in</a>
            </nav>

            <button className="md:hidden text-white/80" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden grid gap-2 px-4 pb-4">
              <button onClick={() => scrollTo("ai")} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-white/80">AI Automation</button>
              <button onClick={() => scrollTo("work")} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-white/80">Work</button>
              <button onClick={() => scrollTo("pricing")} className="text-left px-3 py-2 rounded-lg hover:bg-white/5 text-white/80">Pricing</button>
              <a href="#" className="text-left px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10">Sign in</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
