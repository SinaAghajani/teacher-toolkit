import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "warning" | "danger";
  showValue?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3",
};

const variantClasses = {
  primary: "bg-indigo-600",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

export function Progress({
  value,
  max = 100,
  size = "md",
  variant = "primary",
  showValue = false,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      {showValue && (
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-medium text-slate-500">پیشرفت</span>
          <span className="font-black text-slate-700">
            {Math.round(percentage)}٪
          </span>
        </div>
      )}

      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-slate-100",
          sizeClasses[size],
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            variantClasses[variant],
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
