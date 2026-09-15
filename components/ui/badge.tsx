import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "muted";
  className?: string;
}

const variantClasses = {
  default: "bg-slate-100 text-slate-600",
  primary: "bg-indigo-50 text-indigo-600",
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
  danger: "bg-rose-50 text-rose-600",
  muted: "bg-slate-50 text-slate-500",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-bold",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
