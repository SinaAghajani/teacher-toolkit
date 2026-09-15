import {
  BarChart3,
  CheckCircle2,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import { analytics } from "@/data/analytics";

export default function AnalyticsPage() {
  const scoreChange = analytics.averageScore - analytics.previousAverageScore;

  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
          <BarChart3 className="size-4" />
          گزارش و تحلیل
        </div>

        <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
          تحلیل عملکرد کلاس
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
          تصویر کاملی از عملکرد تحصیلی، حضور و روند پیشرفت دانش‌آموزان خود داشته
          باشید.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <TrendingUp className="size-5 text-indigo-600" />
          <p className="mt-4 text-3xl font-black text-slate-900">
            {analytics.averageScore}٪
          </p>
          <p className="mt-1 text-sm text-slate-500">میانگین عملکرد</p>
          <p className="mt-3 text-xs font-bold text-emerald-600">
            +{scoreChange}٪ نسبت به دوره قبل
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <CheckCircle2 className="size-5 text-emerald-600" />
          <p className="mt-4 text-3xl font-black text-slate-900">
            {analytics.attendanceRate}٪
          </p>
          <p className="mt-1 text-sm text-slate-500">نرخ حضور</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Users className="size-5 text-sky-600" />
          <p className="mt-4 text-3xl font-black text-slate-900">
            {analytics.studentCount}
          </p>
          <p className="mt-1 text-sm text-slate-500">دانش‌آموز فعال</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <GraduationCap className="size-5 text-violet-600" />
          <p className="mt-4 text-3xl font-black text-slate-900">
            {analytics.completedAssessments}
          </p>
          <p className="mt-1 text-sm text-slate-500">ارزیابی تکمیل‌شده</p>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">عملکرد دروس</h2>
          <p className="mt-1 text-sm text-slate-500">
            مقایسه میانگین عملکرد فعلی با دوره قبلی
          </p>
        </div>

        <div className="space-y-5 p-6">
          {analytics.subjectPerformance.map((subject) => {
            const change = subject.score - subject.previousScore;

            return (
              <div key={subject.subject}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">
                      {subject.subject}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {subject.completedAssessments} ارزیابی ·{" "}
                      {subject.studentCount} دانش‌آموز
                    </p>
                  </div>

                  <div className="text-left">
                    <p className="font-black text-slate-900">
                      {subject.score}٪
                    </p>
                    <p className="text-xs font-bold text-emerald-600">
                      +{change}٪
                    </p>
                  </div>
                </div>

                <div className="mt-3 h-3 rounded-full bg-slate-100">
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

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">
            روند پیشرفت ماهانه
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:grid-cols-6">
          {analytics.monthlyPerformance.map((month) => (
            <div
              key={month.name}
              className="rounded-3xl bg-slate-50 p-5 text-center"
            >
              <p className="text-sm font-bold text-slate-500">{month.name}</p>
              <p className="mt-3 text-2xl font-black text-indigo-600">
                {month.score}٪
              </p>
              <div className="mx-auto mt-4 h-24 w-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="mt-auto h-full rounded-full bg-indigo-600"
                  style={{ height: `${month.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">
            عملکرد دانش‌آموزان
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {analytics.studentPerformance.map((student) => (
            <div
              key={student.studentId}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-bold text-slate-900">
                  {student.studentName}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {student.completedAssessments} ارزیابی · حضور{" "}
                  {student.attendance}٪
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600"
                    style={{ width: `${student.averageScore}%` }}
                  />
                </div>

                <span className="font-black text-slate-900">
                  {student.averageScore}٪
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    student.trend === "up"
                      ? "bg-emerald-50 text-emerald-700"
                      : student.trend === "down"
                        ? "bg-rose-50 text-rose-700"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {student.trend === "up"
                    ? "صعودی"
                    : student.trend === "down"
                      ? "نزولی"
                      : "ثابت"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
