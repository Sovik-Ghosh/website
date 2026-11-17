import { useEffect, useState } from "react";
import { motion as m, useScroll, useSpring } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { profile, sections } from "../content";
import logoMark from "../assets/logo-mark.svg";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <m.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-lime to-cyan" />
      <header className="fixed inset-x-0 top-0 z-40 px-5 sm:px-10 lg:px-20 pt-5">
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between">
          <button onClick={() => go("home")} className="group" aria-label="Sovik Ghosh, back to top">
            <img
              src={logoMark}
              alt="Sovik Ghosh"
              className="h-12 sm:h-14 w-auto transition-[filter,transform] duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-[0_0_14px_rgba(118,185,0,0.55)]"
            />
          </button>

          <ul className="glass hidden md:flex items-center gap-1 rounded-full px-2 py-1.5">
            {sections.slice(1).map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${active === s.id ? "text-ink" : "text-mute hover:text-ink"}`}
                >
                  {active === s.id && (
                    <m.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative font-mono text-[10px] text-lime mr-1.5">{s.num}</span>
                  <span className="relative">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="hidden sm:inline-flex rounded-full bg-lime px-4 py-2 text-sm font-medium text-void hover:bg-lime-soft transition-colors">
              Résumé ↗
            </a>
            <button className="md:hidden glass rounded-full p-2.5 text-ink" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <HiX size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <m.ul initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="glass md:hidden mt-3 rounded-2xl p-3">
            {sections.map((s) => (
              <li key={s.id}>
                <button onClick={() => go(s.id)} className="w-full rounded-xl px-3 py-3 text-left text-ink hover:bg-white/5">
                  <span className="font-mono text-xs text-lime mr-2">{s.num}</span>
                  {s.label}
                </button>
              </li>
            ))}
            <li>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="block rounded-xl px-3 py-3 text-lime">
                Résumé ↗
              </a>
            </li>
          </m.ul>
        )}
      </header>
    </>
  );
}
