import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion as m, useScroll, useSpring } from "framer-motion";
import { experience, splineScene } from "../content";
import { Chip, Mono, Reveal, SectionHeader, TiltCard } from "../ui";
const EdgeCamera = lazy(() => import("../three/EdgeCamera"));

function PoseIcon({ active }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
      <circle cx="20" cy="20" r="19" fill="#05070B" stroke={active ? "#76B900" : "#2A3240"} strokeWidth="1.5" />
      <path d="M11 15h10v10H11z M21 18l8-5v14l-8-5" stroke={active ? "#76B900" : "#8A94A6"} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export default function Trajectory() {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const els = listRef.current?.querySelectorAll("[data-pose]");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.pose))),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="trajectory" className="py-24 sm:py-32">
      <SectionHeader
        num="02"
        kicker="Trajectory"
        title="Every role, a new camera pose."
        sub="Each position added a viewpoint — aerial imagery, autonomous-vehicle perception, factory-floor inspection, and now city-scale sensing."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <ol ref={listRef} className="relative">
          {/* rail */}
          <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-white/[0.06]" />
          <m.div style={{ scaleY: line }} className="absolute left-[19px] top-5 bottom-5 w-[2px] origin-top bg-gradient-to-b from-lime via-cyan to-cyan/20" />

          {experience.map((e, i) => (
            <li key={e.role + e.date} data-pose={i} className="relative flex gap-5 sm:gap-8 pb-8 last:pb-0">
              <div className="relative z-10 pt-6">
                <PoseIcon active={i === active} />
              </div>
              <Reveal className="flex-1 min-w-0">
                <TiltCard max={3} className={`rounded-[20px] p-6 sm:p-8 ${e.current ? "ring-1 ring-lime/50" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <Mono className="text-lime">{e.date}</Mono>
                    {e.current && <span className="rounded-full bg-lime px-2 py-0.5 font-mono text-[10px] font-medium text-void">NOW</span>}
                  </div>
                  <h3 className="mt-3 font-display text-2xl sm:text-[26px] font-bold text-ink">{e.role}</h3>
                  <p className="mt-1 font-medium text-cyan">{e.org}</p>
                  <Mono className="mt-1 block text-mute/70 normal-case tracking-normal">{e.meta}</Mono>
                  <ul className="mt-4 space-y-2">
                    {e.body.map((b) => (
                      <li key={b} className="relative pl-4 text-[15px] leading-7 text-[#A3ADBD] before:absolute before:left-0 before:top-[13px] before:h-1 before:w-1 before:rounded-full before:bg-lime/70">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div className="glass relative h-[460px] overflow-hidden rounded-[28px]">
              <Suspense fallback={null}>
                <EdgeCamera url={splineScene} pose={active} count={experience.length} />
              </Suspense>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <Mono className="text-cyan">pose {String(active + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}</Mono>
                <Mono className="text-mute">{experience[active].org.split(" ")[0]}</Mono>
              </div>
              <div className="pointer-events-none absolute left-5 top-5">
                <Mono className="text-mute/70">R | t → {experience[active].date}</Mono>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
