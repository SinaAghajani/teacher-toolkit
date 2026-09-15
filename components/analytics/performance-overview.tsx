import {
  Award,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";

interface PerformanceOverviewProps {
  averageScore: number;
  attendanceRate: number;
  studentCount: number;
  completedAssessments: number;
  previousAverageScore?: number;
}

export function PerformanceOverview({
  averageScore,
  attendanceRate,
  studentCount,
  completedAssessments,
  previousAverageScore,
}: PerformanceOverviewProps) {
  const scoreTrend =
    typeof previousAverageScore === "number"
      ? averageScore - previousAverageScore
      : null;

  const stats = [
    {
      title: "میانگین عملکرد",
      value: `${averageScore}٪`,
      description:
        scoreTrend !== null
          ? `${scoreTrend >= 0 ? "+" : ""}${scoreTrend}٪ نسبت به قبل`
          : "میانگین فعلی کلاس",
      icon: TrendingUp,
      className: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "نرخ حضور",
      value: `${attendanceRate}٪`,
      description: "میانگین حضور دانش‌آموزان",
      icon: CheckCircle2,
      className: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "دانش‌آموزان",
      value: studentCount,
      description: "تعداد دانش‌آموزان فعال",
      icon: Users,
      className: "bg-sky-50 text-sky-600",
    },
    {
      title: "ارزیابی‌ها",
      value: completedAssessments,
      description: "آزمون و فعالیت تکمیل‌شده",
      icon: BarChart3,
      className: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.className}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              {stat.title === "میانگین عملکرد" && (
                <Award className="h-5 w-5 text-amber-400" />
              )}
            </div>

            <p className="mt-4 text-xs font-medium text-slate-400">
              {stat.title}
            </p>

            <p className="mt-1 text-xl font-black text-slate-900">
              {stat.value}
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              {stat.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
