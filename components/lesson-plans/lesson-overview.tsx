import {
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  ListChecks,
  Package,
} from "lucide-react";
import type { LessonPlan } from "@/types/lesson";

interface LessonOverviewProps {
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

export function LessonOverview({ lesson }: LessonOverviewProps) {
  const status = statusConfig[lesson.status];

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <BookOpen className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-xl font-black text-slate-900">
                {lesson.title}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
                <span className="font-bold text-indigo-600">
                  {lesson.subject}
                </span>
                <span>پایه {lesson.grade}</span>
                <span>{lesson.duration} دقیقه</span>
              </div>
            </div>
          </div>

          <span
            className={`self-start rounded-lg px-3 py-1.5 text-xs font-bold ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <Clock3 className="h-4 w-4 text-slate-400" />
            <p className="mt-2 text-lg font-black text-slate-800">
              {lesson.duration}
            </p>
            <p className="text-xs text-slate-400">دقیقه</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <ListChecks className="h-4 w-4 text-slate-400" />
            <p className="mt-2 text-lg font-black text-slate-800">
              {lesson.objectives.length}
            </p>
            <p className="text-xs text-slate-400">هدف آموزشی</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <Package className="h-4 w-4 text-slate-400" />
            <p className="mt-2 text-lg font-black text-slate-800">
              {lesson.materials.length}
            </p>
            <p className="text-xs text-slate-400">ابزار و مواد</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <FileText className="h-4 w-4 text-slate-400" />
            <p className="mt-2 text-lg font-black text-slate-800">
              {lesson.activities.length}
            </p>
            <p className="text-xs text-slate-400">فعالیت</p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-black text-slate-900">اهداف آموزشی</h2>
            <p className="mt-1 text-sm text-slate-500">
              مهارت‌ها و نتایجی که دانش‌آموز باید به آن‌ها برسد
            </p>
          </div>

          <div className="space-y-3">
            {lesson.objectives.map((objective) => (
              <div
                key={objective.id}
                className="flex gap-3 rounded-xl bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500" />

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {objective.title}
                  </p>

                  {objective.description && (
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {objective.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-black text-slate-900">
              مواد و ابزار مورد نیاز
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              وسایل مورد نیاز برای اجرای این درس
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {lesson.materials.map((material) => (
              <span
                key={material}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
              >
                {material}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-black text-slate-900">مراحل اجرای درس</h2>
          <p className="mt-1 text-sm text-slate-500">
            ترتیب فعالیت‌ها و زمان پیشنهادی هر مرحله
          </p>
        </div>

        <div className="space-y-4">
          {lesson.activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex gap-4 rounded-2xl border border-slate-100 p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-black text-indigo-600">
                {index + 1}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-sm font-black text-slate-800">
                    {activity.title}
                  </h3>

                  <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                    <Clock3 className="h-3.5 w-3.5" />
                    {activity.duration} دقیقه
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-black text-slate-900">ارزشیابی</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {lesson.assessment}
        </p>

        {lesson.notes && (
          <div className="mt-5 rounded-xl bg-amber-50 p-4">
            <p className="text-xs font-bold text-amber-700">یادداشت معلم</p>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              {lesson.notes}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
