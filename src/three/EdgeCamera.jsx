// Sticky 3D camera beside the experience timeline. It turns to a new pose for
// each role. Uses the Spline scene when VITE_SPLINE_SCENE is set; otherwise a
// built-in three.js model with the same look.
import { lazy, Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion } from "./motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

const poseAngle = (pose, count) => ({
  yaw: -0.9 + (pose / Math.max(1, count - 1)) * 1.8,
  pitch: Math.sin(pose * 1.7) * 0.18,
});

function SplineCamera({ url, pose, count }) {
  const obj = useRef(null);
  const target = useRef(poseAngle(pose, count));
  useEffect(() => {
    target.current = poseAngle(pose, count);
  }, [pose, count]);
  useEffect(() => {
    let raf;
    const tick = () => {
      if (obj.current) {
        const r = obj.current.rotation;
        r.y += (target.current.yaw - r.y) * 0.06;
        r.x += (target.current.pitch - r.x) * 0.06;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <Suspense fallback={null}>
      <Spline scene={url} onLoad={(app) => (obj.current = app.findObjectByName("Edge Camera"))} />
    </Suspense>
  );
}

function CameraModel({ pose, count }) {
  const rig = useRef();
  const points = useRef();
  const frustum = useMemo(() => {
    const d = 2.4, w = 0.95, h = 0.7, z0 = 0.95;
    const apex = [0, 0, z0];
    const c = [[-w, -h], [w, -h], [w, h], [-w, h]].map(([x, y]) => [x, y, z0 + d]);
    const v = [];
    c.forEach((p) => v.push(...apex, ...p));
    for (let i = 0; i < 4; i++) v.push(...c[i], ...c[(i + 1) % 4]);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(v, 3));
    return g;
  }, []);
  const cloud = useMemo(() => {
    const n = 160, p = new Float32Array(n * 3), col = new Float32Array(n * 3);
    const a = new THREE.Color("#76B900"), b = new THREE.Color("#22D3EE");
    for (let i = 0; i < n; i++) {
      const u = Math.random() * Math.PI * 2, t = Math.acos(2 * Math.random() - 1), r = 0.2 + Math.random() * 0.45;
      p.set([Math.sin(t) * Math.cos(u) * r * 1.3, Math.sin(t) * Math.sin(u) * r, 2.9 + Math.cos(t) * r * 0.7], i * 3);
      const c = a.clone().lerp(b, Math.random());
      col.set([c.r, c.g, c.b], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  }, []);

  useFrame((state, dt) => {
    const { yaw, pitch } = poseAngle(pose, count);
    const k = 1 - Math.exp(-dt * 3);
    const t = state.clock.elapsedTime;
    rig.current.rotation.y += (yaw + (prefersReducedMotion ? 0 : Math.sin(t * 0.6) * 0.05) - rig.current.rotation.y) * k;
    rig.current.rotation.x += (pitch - rig.current.rotation.x) * k;
    if (points.current && !prefersReducedMotion) points.current.rotation.z = t * 0.15;
  });

  const metal = { metalness: 0.7, roughness: 0.35 };
  return (
    <group ref={rig} position={[-0.3, 0, -1.2]}>
      <mesh>
        <boxGeometry args={[0.85, 0.65, 1.05]} />
        <meshStandardMaterial color="#2b3340" {...metal} />
      </mesh>
      {Array.from({ length: 7 }, (_, i) => (
        <mesh key={i} position={[0, 0.4, -0.42 + i * 0.14]}>
          <boxGeometry args={[0.75, 0.12, 0.04]} />
          <meshStandardMaterial color="#3a4352" {...metal} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.62]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.28, 0.32, 48]} />
        <meshStandardMaterial color="#161b22" {...metal} />
      </mesh>
      <mesh position={[0, 0, 0.72]}>
        <torusGeometry args={[0.27, 0.018, 16, 64]} />
        <meshBasicMaterial color="#76B900" />
      </mesh>
      <mesh position={[0, 0, 0.79]} scale={[1, 1, 0.35]}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial color="#0b2230" emissive="#22D3EE" emissiveIntensity={0.35} metalness={0.2} roughness={0.05} />
      </mesh>
      <mesh position={[0.32, 0.22, -0.53]}>
        <sphereGeometry args={[0.025, 12, 8]} />
        <meshBasicMaterial color="#76B900" />
      </mesh>
      <lineSegments geometry={frustum}>
        <lineBasicMaterial color="#76B900" transparent opacity={0.6} />
      </lineSegments>
      <points ref={points} geometry={cloud}>
        <pointsMaterial size={0.045} vertexColors transparent opacity={0.95} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}

export default function EdgeCamera({ url, pose, count }) {
  if (url) return <SplineCamera url={url} pose={pose} count={count} />;
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [3.4, 1.3, 3.2], fov: 35 }} gl={{ alpha: true, antialias: true }} onCreated={({ camera }) => camera.lookAt(0, 0, 0)}>
      <ambientLight intensity={0.6} color="#c8d6ea" />
      <directionalLight position={[-3, 5, 4]} intensity={2.2} />
      <directionalLight position={[4, 2, -4]} intensity={1} color="#8fd8ff" />
      <pointLight position={[1, 1.5, 1.5]} intensity={3} color="#22D3EE" distance={6} />
      <CameraModel pose={pose} count={count} />
    </Canvas>
  );
}
