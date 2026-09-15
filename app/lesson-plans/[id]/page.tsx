import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Package,
} from "lucide-react";
import { lessonPlans } from "@/data/lesson-plans";

interface LessonPlanDetailsPageProps {
  params: Promise<{ id: string }>;
}

const statusMap = {
  draft: "پیش‌نویس",
  ready: "آماده اجرا",
  completed: "تکمیل شده",
};

export default async function LessonPlanDetailsPage({
  params,
}: LessonPlanDetailsPageProps) {
  const { id } = await params;
  const lesson = lessonPlans.find((item) => item.id === id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/lesson-plans"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600"
      >
        <ArrowRight className="size-4" />
        بازگشت به طرح درس‌ها
      </Link>

      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <BookOpenCheck className="size-6" />
        </div>

        <h1 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">
          {lesson.title}
        </h1>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
            {lesson.subject}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
            پایه {lesson.grade}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
            {statusMap[lesson.status]}
          </span>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
          <Clock3 className="size-4" />
          مدت زمان: {lesson.duration} دقیقه
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
              <CheckCircle2 className="size-5" />
            </div>
            <h2 className="font-black text-slate-900">اهداف آموزشی</h2>
          </div>

          <div className="mt-6 space-y-3">
            {lesson.objectives.map((objective) => (
              <div key={objective.id} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-bold text-slate-800">{objective.title}</p>
                {objective.description && (
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {objective.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
              <Package className="size-5" />
            </div>
            <h2 className="font-black text-slate-900">وسایل مورد نیاز</h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {lesson.materials.map((material) => (
              <span
                key={material}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">
            فعالیت‌های آموزشی
          </h2>
        </div>

        <div className="space-y-4 p-6">
          {lesson.activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex gap-4 rounded-3xl bg-slate-50 p-5"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-black text-white">
                {index + 1}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-slate-900">{activity.title}</h3>
                  <span className="text-xs font-bold text-slate-400">
                    {activity.duration} دقیقه
                  </span>
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-black text-slate-900">ارزشیابی</h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">
          {lesson.assessment}
        </p>
      </section>
    </div>
  );
}
