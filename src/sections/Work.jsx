import { FiArrowUpRight } from "react-icons/fi";
import { education, projects, toolkit } from "../content";
import { Chip, Mono, Reveal, SectionHeader, TiltCard } from "../ui";

export function Reconstruct() {
  return (
    <section id="reconstruct" className="py-24 sm:py-32">
      <SectionHeader num="03" kicker="Reconstruct" title="Selected work." sub="Open-source projects across geometry, learning and real-time systems." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08} className={p.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
            <TiltCard
              as="a"
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`group flex h-full flex-col rounded-[20px] p-7 ${p.featured ? "bg-gradient-to-br from-lime/[0.14] to-cyan/[0.04] ring-1 ring-lime/40" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <Mono className="text-cyan">
                  {String(i + 1).padStart(2, "0")} / {p.kicker}
                  {p.featured && " · featured"}
                </Mono>
                <FiArrowUpRight className="text-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" size={20} />
              </div>
              <h3 className={`mt-4 font-display font-bold text-ink ${p.featured ? "text-4xl" : "text-2xl"}`}>{p.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#A3ADBD]">{p.body}</p>
              {p.featured && (
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[["2,529", "points"], ["35", "views"], ["BA", "Schur"]].map(([v, l]) => (
                    <div key={l} className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="font-display text-xl text-lime-soft">{v}</div>
                      <Mono className="text-mute text-[10px]">{l}</Mono>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-6">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-lime">{t}</span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Toolkit() {
  return (
    <section id="toolkit" className="py-24 sm:py-32">
      <SectionHeader num="04" kicker="Toolkit" title="From pixels to production." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.08}>
            <TiltCard max={4} className="h-full rounded-[20px] p-6">
              <Mono className="text-cyan">{g.group}</Mono>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Chip key={it}>{it}</Chip>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Foundations() {
  return (
    <section id="foundations" className="py-24 sm:py-32">
      <SectionHeader num="05" kicker="Foundations" title="Education & writing." />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => {
          const inner = (
            <>
              <Mono className="text-lime">{e.when}</Mono>
              <h3 className="mt-3 font-display text-[22px] font-bold leading-7 text-ink">{e.title}</h3>
              <p className="mt-2 font-medium text-cyan">{e.org}</p>
              <p className="mt-1 text-sm text-mute">
                {e.note}
                {e.link && " ↗"}
              </p>
            </>
          );
          return (
            <Reveal key={e.title} delay={i * 0.08}>
              {e.link ? (
                <TiltCard as="a" href={e.link} target="_blank" rel="noreferrer" className="block h-full rounded-[20px] p-7">
                  {inner}
                </TiltCard>
              ) : (
                <TiltCard className="h-full rounded-[20px] p-7">{inner}</TiltCard>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
