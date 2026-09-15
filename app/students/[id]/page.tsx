import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  TrendingDown,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { students } from "@/data/students";

interface StudentDetailsPageProps {
  params: Promise<{ id: string }>;
}

const trendConfig = {
  up: {
    label: "روند صعودی",
    icon: TrendingUp,
    className: "text-emerald-600 bg-emerald-50",
  },
  down: {
    label: "روند نزولی",
    icon: TrendingDown,
    className: "text-rose-600 bg-rose-50",
  },
  stable: {
    label: "ثابت",
    icon: Clock3,
    className: "text-slate-600 bg-slate-100",
  },
};

export default async function StudentDetailsPage({
  params,
}: StudentDetailsPageProps) {
  const { id } = await params;
  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/students"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-indigo-600"
      >
        <ArrowRight className="size-4" />
        بازگشت به دانش‌آموزان
      </Link>

      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-indigo-50 text-2xl font-black text-indigo-600">
              {student.firstName.charAt(0)}
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-indigo-600">
                دانش‌آموز پایه ششم
              </p>
              <h1 className="text-2xl font-black text-slate-900">
                {student.fullName}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                کلاس {student.className} · کد {student.studentCode}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-center">
            <p className="text-xs text-emerald-600">وضعیت کلی</p>
            <p className="mt-1 font-black text-emerald-700">فعال</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
              <GraduationCap className="size-5" />
            </div>
            <span className="text-sm text-slate-500">عملکرد کلی</span>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {student.overallScore}٪
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 className="size-5" />
            </div>
            <span className="text-sm text-slate-500">حضور</span>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {student.attendance}٪
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
              <BookOpen className="size-5" />
            </div>
            <span className="text-sm text-slate-500">آزمون‌ها</span>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {student.completedQuizzes}
            <span className="text-lg text-slate-400">
              /{student.totalQuizzes}
            </span>
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-50 p-3 text-violet-600">
              <UserRound className="size-5" />
            </div>
            <span className="text-sm text-slate-500">آخرین فعالیت</span>
          </div>
          <p className="mt-5 font-black text-slate-900">
            {student.lastActivity}
          </p>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">عملکرد دروس</h2>
          <p className="mt-1 text-sm text-slate-500">
            وضعیت عملکرد دانش‌آموز در هر درس
          </p>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2">
          {student.subjects.map((subject) => {
            const trend = trendConfig[subject.trend];
            const TrendIcon = trend.icon;

            return (
              <div
                key={subject.subject}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {subject.subject}
                    </h3>
                    <div
                      className={`mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${trend.className}`}
                    >
                      <TrendIcon className="size-3.5" />
                      {trend.label}
                    </div>
                  </div>

                  <span className="text-2xl font-black text-slate-900">
                    {subject.score}٪
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-indigo-600"
                    style={{ width: `${subject.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
