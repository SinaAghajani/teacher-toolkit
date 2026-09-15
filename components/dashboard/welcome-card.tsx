"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

interface WelcomeCardProps {
  teacherName?: string;
  grade?: number;
  className?: string;
  studentCount?: number;
}

export function WelcomeCard({
  teacherName = "سینا آقاجانی",
  grade = 6,
  className = "الف",
  studentCount = 28,
}: WelcomeCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-4xl bg-indigo-600 p-6 text-white shadow-sm sm:p-8"
    >
      <div className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-24 right-1/3 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>روز بخیر، معلم عزیز</span>
          </div>

          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            سلام {teacherName} 👋
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
            امروز هم یک فرصت تازه برای ساختن تجربه‌ای بهتر برای دانش‌آموزانتان
            دارید. وضعیت کلاس و فعالیت‌های آموزشی خود را بررسی کنید.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm backdrop-blur-sm">
              <BookOpen className="h-4 w-4" />
              <span>
                پایه {grade} ـ کلاس {className}
              </span>
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2.5 text-sm backdrop-blur-sm">
              {studentCount} دانش‌آموز
            </div>
          </div>
        </div>

        <Link
          href="/lesson-plans"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50"
        >
          مشاهده برنامه‌های درسی
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </motion.section>
  );
}
