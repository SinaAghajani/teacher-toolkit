import { BarChart3, CheckCircle2, TrendingUp, Users } from "lucide-react";
import type { ClassRoom } from "@/types/class";

interface ClassOverviewProps {
  classroom: ClassRoom;
}

export function ClassOverview({ classroom }: ClassOverviewProps) {
  const stats = [
    {
      title: "دانش‌آموزان",
      value: classroom.studentCount,
      icon: Users,
      className: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "میانگین نمره",
      value: `${classroom.averageScore}٪`,
      icon: TrendingUp,
      className: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "حضور و غیاب",
      value: `${classroom.attendanceRate}٪`,
      icon: CheckCircle2,
      className: "bg-sky-50 text-sky-600",
    },
    {
      title: "دروس",
      value: classroom.subjects.length,
      icon: BarChart3,
      className: "bg-violet-50 text-violet-600",
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
        <div className="mb-6">
          <h2 className="text-lg font-black text-slate-900">
            عملکرد دروس کلاس
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            میانگین عملکرد دانش‌آموزان در هر درس
          </p>
        </div>

        <div className="space-y-5">
          {classroom.subjects.map((subject) => (
            <div key={subject.id}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {subject.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {subject.studentCount} دانش‌آموز
                  </p>
                </div>

                <span className="text-sm font-black text-slate-800">
                  {subject.averageScore}٪
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all"
                  style={{
                    width: `${Math.min(subject.averageScore, 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
