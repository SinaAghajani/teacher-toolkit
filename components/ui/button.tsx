"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-200",
  secondary:
    "bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-200",
  outline:
    "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-200",
  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-200",
  danger:
    "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-200",
};

const sizeClasses = {
  sm: "h-9 rounded-lg px-3 text-xs",
  md: "h-11 rounded-xl px-4 text-sm",
  lg: "h-12 rounded-xl px-5 text-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold outline-none transition focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
