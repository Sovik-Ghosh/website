import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Trajectory from "./sections/Trajectory";
import { Reconstruct, Toolkit, Foundations } from "./sections/Work";
import Connect from "./sections/Connect";
import { startMotionTracking } from "./three/motion";

const CloudScene = lazy(() => import("./three/CloudScene"));

export default function App() {
  const [stats, setStats] = useState(null);
  const onStats = useCallback((s) => setStats(s), []);
  useEffect(() => startMotionTracking(), []);

  return (
    <div className="relative min-h-screen bg-void text-ink">
      <Suspense fallback={null}>
        <CloudScene onStats={onStats} />
      </Suspense>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-20 xl:px-0">
        <Hero stats={stats} />
        <Trajectory />
        <Reconstruct />
        <Toolkit />
        <Foundations />
        <Connect stats={stats} />
      </main>
    </div>
  );
}
