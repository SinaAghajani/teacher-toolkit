import Link from "next/link";
import {
  ArrowLeft,
  BookOpenCheck,
  CalendarDays,
  Clock3,
  Plus,
} from "lucide-react";
import { lessonPlans } from "@/data/lesson-plans";

const statusMap = {
  draft: {
    label: "پیش‌نویس",
    className: "bg-slate-100 text-slate-600",
  },
  ready: {
    label: "آماده اجرا",
    className: "bg-indigo-50 text-indigo-700",
  },
  completed: {
    label: "تکمیل شده",
    className: "bg-emerald-50 text-emerald-700",
  },
};

export default function LessonPlansPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
              <BookOpenCheck className="size-4" />
              برنامه‌ریزی آموزشی
            </div>

            <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
              طرح درس‌های من
            </h1>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              طرح درس‌های روزانه را سازمان‌دهی کنید و فعالیت‌های آموزشی را
              دقیق‌تر اجرا کنید.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700">
            <Plus className="size-4" />
            طرح درس جدید
          </button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {lessonPlans.map((lesson) => {
          const status = statusMap[lesson.status];

          return (
            <Link
              key={lesson.id}
              href={`/lesson-plans/${lesson.id}`}
              className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <BookOpenCheck className="size-5" />
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${status.className}`}
                >
                  {status.label}
                </span>
              </div>

              <h2 className="mt-5 text-lg font-black text-slate-900">
                {lesson.title}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {lesson.subject} · پایه {lesson.grade}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <Clock3 className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {lesson.duration}
                  </p>
                  <p className="text-xs text-slate-400">دقیقه</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <CalendarDays className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {lesson.activities.length}
                  </p>
                  <p className="text-xs text-slate-400">فعالیت آموزشی</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs text-slate-400">
                  {lesson.objectives.length} هدف آموزشی
                </span>

                <ArrowLeft className="size-4 text-slate-300 transition group-hover:-translate-x-1 group-hover:text-indigo-600" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
