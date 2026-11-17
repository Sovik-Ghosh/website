// Shared, mutable motion state read inside the render loop (no React re-renders).
export const motion = {
  scroll: 0, // 0..1 over the whole document
  heroScroll: 0, // 0..1 over the first viewport
  mouseX: 0, // -1..1
  mouseY: 0, // -1..1
};

export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function startMotionTracking() {
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    motion.scroll = max > 0 ? window.scrollY / max : 0;
    motion.heroScroll = Math.min(1, window.scrollY / window.innerHeight);
  };
  const onMove = (e) => {
    motion.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    motion.mouseY = (e.clientY / window.innerHeight) * 2 - 1;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("pointermove", onMove, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    window.removeEventListener("pointermove", onMove);
  };
}
