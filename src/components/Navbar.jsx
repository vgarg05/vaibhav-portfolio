import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-electric/30 bg-electric/10 font-display font-bold text-electric shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold text-white sm:block">{profile.name}</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className={`nav-link ${activeSection === id ? "active" : ""}`}>
              {label}
            </button>
          ))}
        </div>



        <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-ink/95 px-4 py-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-slate-300 ${activeSection === id ? "bg-electric/15 text-electric" : "bg-white/[0.03]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
