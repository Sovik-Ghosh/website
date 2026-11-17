import { motion as m, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { prefersReducedMotion } from "./three/motion";

export const Mono = ({ children, className = "" }) => (
  <span className={`font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase ${className}`}>{children}</span>
);

export const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-lime/35 bg-lime/[0.07] px-3 py-1 font-mono text-xs text-lime-soft transition-colors hover:border-lime/70 hover:bg-lime/15">
    {children}
  </span>
);

export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <m.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}

export function SectionHeader({ num, kicker, title, sub }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-center gap-4">
        <Mono className="text-lime">{num}</Mono>
        <span className="h-px w-12 bg-gradient-to-r from-lime/70 to-transparent" />
        <Mono className="text-mute">{kicker}</Mono>
      </div>
      <h2 className="mt-5 max-w-4xl font-display text-[40px] sm:text-[56px] font-bold leading-[1.05] tracking-tight text-ink">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-2xl text-[17px] leading-7 text-mute">{sub}</p>}
    </Reveal>
  );
}

// Glass card that tilts toward the cursor and carries a cursor-following glow.
export function TiltCard({ children, className = "", max = 7, as = "div", ...rest }) {
  const ref = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const Comp = m[as];

  const onMove = (e) => {
    if (prefersReducedMotion || e.pointerType === "touch") return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Comp
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`glass glow relative ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
