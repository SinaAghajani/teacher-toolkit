import {
  Award,
  BookOpen,
  ClipboardCheck,
  FileText,
  GraduationCap,
  UserPlus,
} from "lucide-react";
import type { Activity, ActivityType } from "@/types/activity";

interface RecentActivityProps {
  activities: Activity[];
  title?: string;
  limit?: number;
}

const iconMap: Record<ActivityType, typeof BookOpen> = {
  quiz: ClipboardCheck,
  lesson: BookOpen,
  worksheet: FileText,
  student: UserPlus,
  class: GraduationCap,
  achievement: Award,
};

const colorMap: Record<ActivityType, string> = {
  quiz: "bg-indigo-50 text-indigo-600",
  lesson: "bg-sky-50 text-sky-600",
  worksheet: "bg-amber-50 text-amber-600",
  student: "bg-emerald-50 text-emerald-600",
  class: "bg-violet-50 text-violet-600",
  achievement: "bg-orange-50 text-orange-600",
};

export function RecentActivity({
  activities,
  title = "فعالیت‌های اخیر",
  limit = 5,
}: RecentActivityProps) {
  const visibleActivities = activities.slice(0, limit);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-black text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          آخرین فعالیت‌های انجام‌شده
        </p>
      </div>

      {visibleActivities.length > 0 ? (
        <div className="space-y-1">
          {visibleActivities.map((activity) => {
            const Icon = iconMap[activity.type];

            return (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colorMap[activity.type]}`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-800">
                    {activity.title}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                    {activity.description}
                  </p>
                </div>

                <span className="shrink-0 text-[11px] text-slate-400">
                  {activity.timestamp}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex min-h-40 items-center justify-center text-sm text-slate-400">
          هنوز فعالیتی ثبت نشده است.
        </div>
      )}
    </section>
  );
}
