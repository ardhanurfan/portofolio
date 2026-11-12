import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GEM_COUNT = 12;

interface GemData {
  id: number;
  base: THREE.Vector3;
  speed: number;
  phase: number;
  color: string;
}

function makeGems(): GemData[] {
  const colors = ["#6366f1", "#22d3ee", "#a78bfa", "#fbbf24"];
  return Array.from({ length: GEM_COUNT }, (_, id) => {
    const a = (id / GEM_COUNT) * Math.PI * 2;
    const r = 3.2 + (id % 3) * 0.7;
    return {
      id,
      base: new THREE.Vector3(Math.cos(a) * r, (id % 4) * 0.7 - 1.2, Math.sin(a) * r - 1),
      speed: 0.4 + (id % 5) * 0.15,
      phase: id * 1.3,
      color: colors[id % colors.length],
    };
  });
}

function Gem({ data, collected, onCollect }: { data: GemData; collected: boolean; onCollect: (id: number) => void }) {
  const ref = useRef<THREE.Mesh>(null);
  const scale = useRef(1);
  useFrame(({ clock }, dt) => {
    const m = ref.current;
    if (!m) return;
    const t = clock.elapsedTime * data.speed + data.phase;
    m.position.set(data.base.x, data.base.y + Math.sin(t) * 0.3, data.base.z);
    m.rotation.y += dt * 1.2;
    scale.current = THREE.MathUtils.damp(scale.current, collected ? 0 : 1, 6, dt);
    m.scale.setScalar(scale.current * 0.32);
    m.visible = scale.current > 0.01;
  });
  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onCollect(data.id);
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "")}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={data.color} flatShading emissive={data.color} emissiveIntensity={0.5} metalness={0.4} roughness={0.3} />
    </mesh>
  );
}

function Core() {
  const crystal = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (crystal.current) {
      crystal.current.rotation.y += dt * 0.4;
      crystal.current.rotation.x += dt * 0.15;
    }
    if (ring1.current) ring1.current.rotation.z += dt * 0.5;
    if (ring2.current) ring2.current.rotation.x -= dt * 0.35;
  });
  return (
    <group position={[0, 0, -1]}>
      <mesh ref={crystal} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#6366f1" flatShading metalness={0.6} roughness={0.25} emissive="#4338ca" emissiveIntensity={0.35} />
      </mesh>
      <mesh ref={ring1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.4, 0.03, 8, 96]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
      <mesh ref={ring2} rotation={[0, 0, Math.PI / 5]}>
        <torusGeometry args={[3, 0.02, 8, 96]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>
    </group>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  const wide = useThree((s) => s.size.width) >= 768;
  useFrame(({ pointer }, dt) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, pointer.x * 0.35, 3, dt);
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, -pointer.y * 0.2, 3, dt);
  });
  return (
    <group position={wide ? [3.6, 0, 0] : [0, 1.5, -2]} scale={wide ? 0.85 : 0.7}>
      <group ref={g}>{children}</group>
    </group>
  );
}

interface Props {
  collected: Set<number>;
  onCollect: (id: number) => void;
}

export default function HeroScene({ collected, onCollect }: Props) {
  const gems = useMemo(makeGems, []);
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 9], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={80} color="#a5b4fc" />
      <pointLight position={[-6, -3, 3]} intensity={50} color="#22d3ee" />
      <Rig>
        <Core />
        {gems.map((g) => (
          <Gem key={g.id} data={g} collected={collected.has(g.id)} onCollect={onCollect} />
        ))}
      </Rig>
    </Canvas>
  );
}
