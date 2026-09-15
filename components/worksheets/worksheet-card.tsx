import {
  ArrowLeft,
  Clock3,
  Download,
  FileText,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import type { Worksheet } from "@/types/worksheet";

interface WorksheetCardProps {
  worksheet: Worksheet;
}

const statusConfig = {
  draft: {
    label: "پیش‌نویس",
    className: "bg-slate-100 text-slate-500",
  },
  published: {
    label: "منتشر شده",
    className: "bg-emerald-50 text-emerald-600",
  },
  archived: {
    label: "آرشیو شده",
    className: "bg-amber-50 text-amber-600",
  },
};

const difficultyConfig = {
  easy: {
    label: "آسان",
    className: "text-emerald-600",
  },
  medium: {
    label: "متوسط",
    className: "text-amber-600",
  },
  hard: {
    label: "سخت",
    className: "text-rose-600",
  },
};

export function WorksheetCard({ worksheet }: WorksheetCardProps) {
  const status = statusConfig[worksheet.status];
  const difficulty = difficultyConfig[worksheet.difficulty];

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <FileText className="h-5 w-5" />
        </div>

        <span
          className={`rounded-lg px-2.5 py-1 text-[11px] font-bold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="line-clamp-1 text-base font-black text-slate-900">
          {worksheet.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
          {worksheet.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className="font-bold text-indigo-600">{worksheet.subject}</span>
        <span className="text-slate-500">پایه {worksheet.grade}</span>
        <span className={`font-bold ${difficulty.className}`}>
          {difficulty.label}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <HelpCircle className="h-4 w-4 text-slate-400" />
          <p className="mt-2 text-sm font-black text-slate-800">
            {worksheet.questionCount}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-400">سؤال</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <Clock3 className="h-4 w-4 text-slate-400" />
          <p className="mt-2 text-sm font-black text-slate-800">
            {worksheet.estimatedTime}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-400">دقیقه</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <Download className="h-4 w-4 text-slate-400" />
          <p className="mt-2 text-sm font-black text-slate-800">
            {worksheet.downloads}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-400">دریافت</p>
        </div>
      </div>

      <Link
        href={`/worksheets/${worksheet.id}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
      >
        مشاهده برگه
        <ArrowLeft className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
