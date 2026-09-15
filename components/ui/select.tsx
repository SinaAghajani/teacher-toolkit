"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, className, id, ...props }, ref) => {
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

        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={cn(
              "h-11 w-full appearance-none rounded-xl border bg-white px-4 pl-10 text-sm text-slate-700 outline-none transition",
              "focus:ring-4",
              error
                ? "border-rose-300 focus:border-rose-400 focus:ring-rose-50"
                : "border-slate-200 focus:border-indigo-300 focus:ring-indigo-50",
              className,
            )}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        {error ? (
          <p className="mt-2 text-xs font-medium text-rose-500">{error}</p>
        ) : hint ? (
          <p className="mt-2 text-xs text-slate-400">{hint}</p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = "Select";
