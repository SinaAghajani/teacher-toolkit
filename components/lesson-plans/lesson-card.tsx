import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Clock3,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import type { LessonPlan } from "@/types/lesson";

interface LessonCardProps {
  lesson: LessonPlan;
}

const statusConfig = {
  draft: {
    label: "پیش‌نویس",
    className: "bg-slate-100 text-slate-500",
  },
  ready: {
    label: "آماده تدریس",
    className: "bg-indigo-50 text-indigo-600",
  },
  completed: {
    label: "تکمیل شده",
    className: "bg-emerald-50 text-emerald-600",
  },
};

export function LessonCard({ lesson }: LessonCardProps) {
  const status = statusConfig[lesson.status];

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <BookOpen className="h-5 w-5" />
        </div>

        <span
          className={`rounded-lg px-2.5 py-1 text-[11px] font-bold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="line-clamp-1 text-base font-black text-slate-900">
          {lesson.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
          <span className="font-bold text-indigo-600">{lesson.subject}</span>
          <span>پایه {lesson.grade}</span>
          <span className="flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {lesson.duration} دقیقه
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-500">
          <GraduationCap className="h-4 w-4 text-slate-400" />
          <span>پایه {lesson.grade}</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-500">
          <CalendarDays className="h-4 w-4 text-slate-400" />
          <span>آخرین بروزرسانی: {lesson.updatedAt}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-[11px] text-slate-400">اهداف آموزشی</p>
          <p className="mt-1 text-sm font-black text-slate-800">
            {lesson.objectives.length} هدف
          </p>
        </div>

        <Link
          href={`/lesson-plans/${lesson.id}`}
          className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
        >
          مشاهده
          <ArrowLeft className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
