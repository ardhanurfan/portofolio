import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const GEM_TOTAL = 12;
const SIGNAL = "#ff4d1c";
const VOLT = "#c6f432";
const NODES = 7;

const curve = new THREE.CatmullRomCurve3(
  [
    [0, 0, 0],
    [-3, -7, -8],
    [3, -14, -16],
    [-3, -21, -24],
    [3, -28, -32],
    [-2.5, -35, -40],
    [2.5, -42, -48],
    [0, -49, -56],
  ].map(([x, y, z]) => new THREE.Vector3(x, y, z)),
);

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const scroll = { p: 0, qa: 0.15, qb: 0.5 };

function measure() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  scroll.p = clamp(window.scrollY / max);
  const q = document.getElementById("quest");
  if (q) {
    const top = q.getBoundingClientRect().top + window.scrollY;
    scroll.qa = clamp((top - window.innerHeight * 0.3) / max);
    scroll.qb = clamp((top + q.offsetHeight - window.innerHeight * 0.7) / max);
  }
}

function useScrollMeasure() {
  useEffect(() => {
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);
}

interface Palette {
  line: string;
  fill: string;
  bg: string;
}
const palette = (dark: boolean): Palette =>
  dark ? { line: "#ece7da", fill: "#1f1f1c", bg: "#0d0d0b" } : { line: "#161614", fill: "#e0daca", bg: "#ece7da" };

/* ---------- camera ---------- */
const smooth = (x: number, a: number, b: number) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

function CameraRig() {
  const ps = useRef(0);
  const shift = useRef(-3.2);
  const look = useMemo(() => new THREE.Vector3(), []);
  const straight = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera, pointer }, dt) => {
    ps.current = THREE.MathUtils.damp(ps.current, scroll.p, 4, dt);
    const wide = window.innerWidth >= 1024;
    // objects sit right of the text in the hero, left of the cards in the quest
    const inQuest = smooth(ps.current, scroll.qa - 0.04, scroll.qa) - smooth(ps.current, scroll.qb, scroll.qb + 0.04);
    shift.current = THREE.MathUtils.damp(shift.current, wide ? -3.2 + 6.4 * inQuest : 0, 5, dt);
    const here = curve.getPoint(ps.current);
    const ahead = curve.getPoint(Math.min(1, ps.current + 0.05));
    camera.position.set(here.x + shift.current + pointer.x * 0.6, here.y + 2.2 + pointer.y * 0.4, here.z + 8);
    straight.set(camera.position.x, here.y + 1, here.z - 10);
    look.set(ahead.x + shift.current, ahead.y, ahead.z).lerp(straight, 1 - smooth(ps.current, 0.0, 0.06));
    camera.lookAt(look);
  });
  return null;
}

/* ---------- hero crystal + gems ---------- */
const CENTER = new THREE.Vector3(0.4, 0.4, -2);

function Crystal({ p }: { p: Palette }) {
  const g = useRef<THREE.Group>(null);
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (g.current) {
      g.current.rotation.y += dt * 0.35;
      g.current.rotation.x += dt * 0.12;
    }
    if (r1.current) r1.current.rotation.z += dt * 0.4;
    if (r2.current) r2.current.rotation.x -= dt * 0.3;
  });
  return (
    <group position={CENTER}>
      <group ref={g} scale={1.4}>
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={SIGNAL} flatShading roughness={0.7} metalness={0.05} />
        </mesh>
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(1.02, 0)]} />
          <lineBasicMaterial color={p.line} />
        </lineSegments>
      </group>
      <mesh ref={r1} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.3, 0.012, 6, 120]} />
        <meshBasicMaterial color={p.line} />
      </mesh>
      <mesh ref={r2} rotation={[0, 0, Math.PI / 5]}>
        <torusGeometry args={[3, 0.012, 6, 120]} />
        <meshBasicMaterial color={p.line} />
      </mesh>
    </group>
  );
}

interface GemProps {
  id: number;
  collected: boolean;
  onCollect: (id: number) => void;
}
function Gem({ id, collected, onCollect }: GemProps) {
  const ref = useRef<THREE.Mesh>(null);
  const k = useRef(1);
  const a = (id / GEM_TOTAL) * Math.PI * 2;
  const r = 3 + (id % 3) * 0.7;
  const base = useMemo(
    () => new THREE.Vector3(CENTER.x + Math.cos(a) * r, CENTER.y + (id % 4) * 0.6 - 0.9, CENTER.z + Math.sin(a) * r * 0.6),
    [a, r, id],
  );
  const inHero = () => window.scrollY < window.innerHeight * 0.9;
  useFrame(({ clock }, dt) => {
    const m = ref.current;
    if (!m) return;
    m.position.set(base.x, base.y + Math.sin(clock.elapsedTime * (0.5 + (id % 5) * 0.12) + id) * 0.3, base.z);
    m.rotation.y += dt * 1.1;
    k.current = THREE.MathUtils.damp(k.current, collected ? 0 : 1, 6, dt);
    m.scale.setScalar(k.current * 0.34);
    m.visible = k.current > 0.01;
  });
  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        if (!inHero()) return;
        e.stopPropagation();
        onCollect(id);
      }}
      onPointerOver={() => inHero() && (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "")}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={VOLT} flatShading roughness={0.5} emissive={VOLT} emissiveIntensity={0.25} />
    </mesh>
  );
}

/* ---------- quest path ---------- */
function Node({ i, p }: { i: number; p: Palette }) {
  const g = useRef<THREE.Group>(null);
  const edge = useRef<THREE.LineBasicMaterial>(null);
  useFrame(() => {
    const u = THREE.MathUtils.lerp(scroll.qa, scroll.qb, i / (NODES - 1));
    if (g.current) {
      g.current.position.copy(curve.getPoint(u)).y -= 0.45;
      const w = 1 - smooth(Math.abs(scroll.p - u), 0.05, 0.14);
      g.current.scale.setScalar(Math.max(w, 0.0001));
    }
    if (edge.current) edge.current.color.set(Math.abs(scroll.p - u) < 0.025 ? SIGNAL : p.line);
  });
  return (
    <group ref={g}>
      <mesh>
        <boxGeometry args={[2, 0.16, 2]} />
        <meshStandardMaterial color={p.fill} roughness={0.9} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 0.16, 2)]} />
        <lineBasicMaterial ref={edge} color={p.line} />
      </lineSegments>
    </group>
  );
}

function Player() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.copy(curve.getPoint(Math.min(1, scroll.p + 0.002)));
    ref.current.position.y += 0.1 + Math.abs(Math.sin(clock.elapsedTime * 3)) * 0.25;
    ref.current.rotation.y = clock.elapsedTime;
  });
  return (
    <mesh ref={ref} scale={0.28}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={SIGNAL} flatShading roughness={0.6} />
    </mesh>
  );
}

function Portal({ p }: { p: Palette }) {
  const r = useRef<THREE.Group>(null);
  const pos = useMemo(() => curve.getPoint(1).add(new THREE.Vector3(0, 1.4, 0)), []);
  useFrame((_, dt) => {
    if (r.current) r.current.rotation.z += dt * 0.5;
  });
  return (
    <group position={pos}>
      <group ref={r}>
        <mesh>
          <torusGeometry args={[1.8, 0.06, 8, 64]} />
          <meshBasicMaterial color={SIGNAL} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.2, 0.02, 6, 64]} />
          <meshBasicMaterial color={p.line} />
        </mesh>
      </group>
    </group>
  );
}

function Dust({ p, count }: { p: Palette; count: number }) {
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const c = curve.getPoint(Math.random());
      a[i * 3] = c.x + (Math.random() - 0.5) * 22;
      a[i * 3 + 1] = c.y + (Math.random() - 0.5) * 14;
      a[i * 3 + 2] = c.z + (Math.random() - 0.5) * 14;
    }
    return a;
  }, [count]);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={p.line} size={0.05} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

interface Props {
  dark: boolean;
  collected: Set<number>;
  onCollect: (id: number) => void;
}

export default function World({ dark, collected, onCollect }: Props) {
  const p = palette(dark);
  useScrollMeasure();
  const small = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <Canvas
      dpr={[1, small ? 1.25 : 1.75]}
      camera={{ fov: small ? 60 : 45, near: 0.1, far: 120, position: [0, 2, 8] }}
      gl={{ antialias: true, alpha: true }}
      eventSource={document.documentElement}
      eventPrefix="client"
      style={{ pointerEvents: "none" }}
    >
      <fog attach="fog" args={[p.bg, 14, 42]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 8, 6]} intensity={2.2} />
      <CameraRig />
      <Crystal p={p} />
      {Array.from({ length: GEM_TOTAL }, (_, i) => (
        <Gem key={i} id={i} collected={collected.has(i)} onCollect={onCollect} />
      ))}
      {Array.from({ length: NODES }, (_, i) => (
        <Node key={i} i={i} p={p} />
      ))}
      <Player />
      <Portal p={p} />
      <Dust p={p} count={small ? 150 : 350} />
    </Canvas>
  );
}
