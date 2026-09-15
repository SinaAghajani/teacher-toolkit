"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={cn(
            "h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400",
            "focus:ring-4",
            error
              ? "border-rose-300 focus:border-rose-400 focus:ring-rose-50"
              : "border-slate-200 focus:border-indigo-300 focus:ring-indigo-50",
            className,
          )}
          {...props}
        />

        {error ? (
          <p className="mt-2 text-xs font-medium text-rose-500">{error}</p>
        ) : hint ? (
          <p className="mt-2 text-xs text-slate-400">{hint}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
