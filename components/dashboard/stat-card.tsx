import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: number;
  iconClassName?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  iconClassName = "bg-indigo-50 text-indigo-600",
}: StatCardProps) {
  const hasTrend = typeof trend === "number";
  const isPositive = trend >= 0;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        {hasTrend && (
          <div
            className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold ${
              isPositive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-rose-50 text-rose-600"
            }`}
          >
            {isPositive ? (
              <ArrowUp className="h-3.5 w-3.5" />
            ) : (
              <ArrowDown className="h-3.5 w-3.5" />
            )}
            {Math.abs(trend)}٪
          </div>
        )}
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="mt-1 text-2xl font-black tracking-tight text-slate-900">
          {value}
        </p>
        {description && (
          <p className="mt-1 text-xs text-slate-400">{description}</p>
        )}
      </div>
    </article>
  );
}
