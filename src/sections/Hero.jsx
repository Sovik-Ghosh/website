import { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { profile, now } from "../content";
import { Mono, Reveal, TiltCard } from "../ui";
import { prefersReducedMotion } from "../three/motion";

function Rotator({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <m.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient whitespace-nowrap"
        >
          {words[i]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

function LiveCounter({ stats }) {
  const [cam, setCam] = useState(1);
  useEffect(() => {
    if (!stats || prefersReducedMotion) return;
    const id = setInterval(() => setCam((c) => (c % stats.cameras) + 1), 900);
    return () => clearInterval(id);
  }, [stats]);
  return (
    <Mono className="text-lime flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
      </span>
      {stats ? (
        <>
          live · {stats.points.toLocaleString()} pts · cam {String(cam).padStart(2, "0")}/{stats.cameras}
        </>
      ) : (
        <>reconstructing…</>
      )}
    </Mono>
  );
}

export default function Hero({ stats }) {
  const letters = profile.name.split(" ");
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16">
      <div className="max-w-[640px]">
        <Reveal>
          <LiveCounter stats={stats} />
        </Reveal>

        <h1 className="mt-6 font-display font-bold tracking-[-0.04em] leading-[0.92] text-[72px] xs:text-[92px] sm:text-[120px] lg:text-[136px]">
          {letters.map((w, wi) => (
            <span key={w} className="block overflow-hidden">
              <m.span
                className="block text-gradient-hero"
                initial={prefersReducedMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.25 + wi * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </m.span>
            </span>
          ))}
        </h1>

        <Reveal delay={0.5}>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="font-display text-2xl sm:text-[28px] text-ink">{profile.role}</span>
            <span className="rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-sm text-cyan">
              @ {profile.company} · London
            </span>
          </div>
          <p className="mt-3 font-display text-xl sm:text-2xl text-mute">
            building <Rotator words={profile.rotating} />
          </p>
        </Reveal>

        <Reveal delay={0.65}>
          <p className="mt-6 max-w-[560px] text-[17px] sm:text-lg leading-8 text-mute">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#trajectory" className="rounded-full bg-lime px-6 py-3.5 font-medium text-void hover:bg-lime-soft transition-colors">
              See the work ↓
            </a>
            <a href="#connect" className="glass rounded-full px-6 py-3.5 font-medium text-ink hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-0 hidden lg:flex flex-col items-end gap-1 text-right">
        <Mono className="text-mute/70">hero point cloud · my own SfM output</Mono>
        <Mono className="text-mute/50">move the mouse · scroll to orbit</Mono>
      </div>

      {/* Now strip */}
      <div className="mt-20">
        <Reveal>
          <Mono className="text-mute">// currently building</Mono>
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {now.map((n, i) => (
            <Reveal key={n.title} delay={0.1 * i}>
              <TiltCard className="h-full rounded-2xl p-6">
                <Mono className="text-cyan">▸ {n.kicker}</Mono>
                <h3 className="mt-3 font-display text-xl text-ink">{n.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{n.body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
