import {
  BarChart3,
  CheckCircle2,
  Clock3,
  FileQuestion,
  Users,
} from "lucide-react";
import type { Quiz } from "@/types/quiz";

interface QuizOverviewProps {
  quiz: Quiz;
}

export function QuizOverview({ quiz }: QuizOverviewProps) {
  const completionRate =
    quiz.totalParticipants > 0
      ? Math.round((quiz.participantCount / quiz.totalParticipants) * 100)
      : 0;

  const stats = [
    {
      title: "تعداد سؤالات",
      value: quiz.questionCount,
      icon: FileQuestion,
      className: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "زمان آزمون",
      value: `${quiz.duration} دقیقه`,
      icon: Clock3,
      className: "bg-sky-50 text-sky-600",
    },
    {
      title: "شرکت‌کنندگان",
      value: quiz.participantCount,
      icon: Users,
      className: "bg-violet-50 text-violet-600",
    },
    {
      title: "میانگین نمره",
      value: `${quiz.averageScore}٪`,
      icon: BarChart3,
      className: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.className}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <p className="mt-4 text-xs font-medium text-slate-400">
                {stat.title}
              </p>

              <p className="mt-1 text-xl font-black text-slate-900">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-lg font-black text-slate-900">وضعیت آزمون</h2>
            <p className="mt-1 text-sm text-slate-500">
              وضعیت مشارکت دانش‌آموزان در این آزمون
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
            {quiz.participantCount} نفر شرکت کرده‌اند
          </div>
        </div>

        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">
              نرخ مشارکت
            </span>
            <span className="text-sm font-black text-slate-800">
              {completionRate}٪
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{ width: `${Math.min(completionRate, 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-400">موضوع</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {quiz.subject}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-400">پایه تحصیلی</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              پایه {quiz.grade}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-400">تعداد کل شرکت‌کنندگان</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {quiz.totalParticipants} نفر
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-400">نمره متوسط</p>
            <p className="mt-1 text-sm font-bold text-indigo-600">
              {quiz.averageScore}٪
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
