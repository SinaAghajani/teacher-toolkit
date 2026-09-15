import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
} from "lucide-react";

type TaskType = "quiz" | "lesson" | "worksheet" | "general";

interface UpcomingTask {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  type: TaskType;
  completed?: boolean;
}

interface UpcomingTasksProps {
  tasks: UpcomingTask[];
  title?: string;
}

const iconMap = {
  quiz: ClipboardCheck,
  lesson: BookOpen,
  worksheet: FileText,
  general: CalendarDays,
};

const colorMap = {
  quiz: "bg-indigo-50 text-indigo-600",
  lesson: "bg-sky-50 text-sky-600",
  worksheet: "bg-amber-50 text-amber-600",
  general: "bg-slate-100 text-slate-600",
};

export function UpcomingTasks({
  tasks,
  title = "کارهای پیش رو",
}: UpcomingTasksProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-black text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          برنامه‌های نزدیک و کارهای مهم شما
        </p>
      </div>

      {tasks.length > 0 ? (
        <div className="space-y-3">
          {tasks.map((task) => {
            const Icon = iconMap[task.type];

            return (
              <div
                key={task.id}
                className={`flex items-center gap-3 rounded-xl border border-slate-100 p-3 ${
                  task.completed ? "opacity-60" : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colorMap[task.type]}`}
                >
                  {task.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm font-bold ${
                      task.completed
                        ? "text-slate-400 line-through"
                        : "text-slate-800"
                    }`}
                  >
                    {task.title}
                  </p>

                  {task.description && (
                    <p className="mt-1 truncate text-xs text-slate-400">
                      {task.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 text-left">
                  <p className="text-xs font-bold text-slate-600">
                    {task.date}
                  </p>
                  {task.time && (
                    <p className="mt-1 text-[11px] text-slate-400">
                      {task.time}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex min-h-40 items-center justify-center text-sm text-slate-400">
          کار جدیدی برای نمایش وجود ندارد.
        </div>
      )}
    </section>
  );
}
