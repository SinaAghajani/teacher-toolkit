"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  School,
  Sparkles,
  Users,
} from "lucide-react";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

function AnimatedRing() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, index) => {
        const angle = (index / 32) * Math.PI * 2;
        const radius = 2.7;

        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          z: Math.sin(angle * 2) * 0.35,
          scale: index % 4 === 0 ? 0.09 : 0.045,
        };
      }),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.22;
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.45, 0.025, 16, 128]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.75, 0.012, 12, 128]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={1.5}
          transparent
          opacity={0.35}
        />
      </mesh>

      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={[particle.x, particle.y, particle.z]}
          scale={particle.scale}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={index % 4 === 0 ? "#a5b4fc" : "#6366f1"}
            emissive="#4f46e5"
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      <Float
        speed={1.8}
        rotationIntensity={0.25}
        floatIntensity={0.45}
      >
        <mesh>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshStandardMaterial
            color="#4f46e5"
            roughness={0.22}
            metalness={0.35}
            emissive="#312e81"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>

      <pointLight position={[0, 0, 3]} intensity={35} distance={8} />

      <pointLight
        position={[-3, 2, 1]}
        color="#818cf8"
        intensity={20}
        distance={7}
      />

      <pointLight
        position={[3, -2, 1]}
        color="#c7d2fe"
        intensity={15}
        distance={7}
      />
    </group>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[4, 4, 5]}
        intensity={2}
      />

      <AnimatedRing />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

const features = [
  {
    title: "مدیریت دانش‌آموزان",
    description:
      "اطلاعات، عملکرد و وضعیت آموزشی دانش‌آموزان را در یک محیط منظم مدیریت کنید.",
    icon: Users,
  },
  {
    title: "مدیریت کلاس‌ها",
    description:
      "کلاس‌های خود را سازمان‌دهی کنید و دید کاملی از وضعیت هر کلاس داشته باشید.",
    icon: School,
  },
  {
    title: "ساخت آزمون",
    description:
      "آزمون‌های آموزشی ایجاد کنید و عملکرد دانش‌آموزان را بررسی کنید.",
    icon: ClipboardCheck,
  },
  {
    title: "طرح درس",
    description:
      "برای هر جلسه آموزشی برنامه مشخص داشته باشید و روند تدریس را مدیریت کنید.",
    icon: BookOpen,
  },
  {
    title: "کاربرگ آموزشی",
    description:
      "کاربرگ‌های تمرینی را آماده، مدیریت و در اختیار دانش‌آموزان قرار دهید.",
    icon: FileText,
  },
  {
    title: "تحلیل و آمار",
    description:
      "عملکرد تحصیلی کلاس و دانش‌آموزان را با داده‌های قابل فهم تحلیل کنید.",
    icon: BarChart3,
  },
];

const stats = [
  {
    value: "۲۸",
    label: "دانش‌آموز",
  },
  {
    value: "۵",
    label: "ابزار آموزشی",
  },
  {
    value: "۴۶",
    label: "ارزیابی",
  },
  {
    value: "۹۴٪",
    label: "نرخ حضور",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 text-center lg:order-1 lg:text-right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-600 shadow-sm">
                <Sparkles size={15} />
                جعبه‌ابزار دیجیتال معلم
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                همه ابزارهای مورد نیاز
                <span className="block text-indigo-600">
                  برای یک معلم حرفه‌ای
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg lg:mx-0">
                Teacher Toolkit یک فضای یکپارچه برای مدیریت دانش‌آموزان،
                کلاس‌ها، آزمون‌ها، طرح درس، کاربرگ‌ها و تحلیل عملکرد آموزشی
                است.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  href="/dashboard"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 sm:w-auto"
                >
                  ورود به داشبورد

                  <ArrowLeft
                    size={18}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </Link>

                <a
                  href="#features"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 sm:w-auto"
                >
                  مشاهده امکانات
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-400 lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                  طراحی مخصوص معلمان
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                  محیط ساده و سریع
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                  کاملاً فارسی
                </div>
              </div>
            </div>

            <div className="order-1 relative h-97.5 sm:h-117.5 lg:order-2 lg:h-140">
              <div className="absolute left-1/2 top-1/2 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl sm:h-107.5 sm:w-107.5" />

              <HeroScene />

              <div className="absolute right-2 top-8 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-slate-200/50 backdrop-blur-md sm:block lg:right-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <BarChart3 size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium text-slate-400">
                      میانگین عملکرد
                    </p>

                    <p className="mt-0.5 text-sm font-extrabold text-slate-800">
                      ۸۴٪
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-2 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-slate-200/50 backdrop-blur-md sm:block lg:left-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Users size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium text-slate-400">
                      دانش‌آموزان فعال
                    </p>

                    <p className="mt-0.5 text-sm font-extrabold text-slate-800">
                      ۲۸ نفر
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/60 bg-white/10 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
                <GraduationCap
                  size={38}
                  strokeWidth={1.5}
                  className="text-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-300 grid-cols-2 divide-x divide-slate-100 divide-x-reverse sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-7 text-center sm:py-8"
            >
              <p className="text-2xl font-black text-slate-900 sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold text-indigo-600">
            امکانات Teacher Toolkit
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            ابزارهایی که واقعاً به کار معلم می‌آیند
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            همه چیز را ساده، منظم و در یک محیط یکپارچه در اختیار داشته باشید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-base font-extrabold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="relative mx-auto max-w-350 overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-xl shadow-indigo-950/30">
              <GraduationCap size={27} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
              وقتشه ابزارهای معلمی رو یکجا داشته باشی
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Teacher Toolkit برای ساده‌تر کردن مدیریت کلاس و تمرکز بیشتر روی
              آموزش طراحی شده است.
            </p>

            <Link
              href="/dashboard"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              شروع کار با Teacher Toolkit
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}