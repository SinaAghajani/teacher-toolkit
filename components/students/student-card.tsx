import { ArrowLeft, BookOpen, CheckCircle2, UserRound } from "lucide-react";
import Link from "next/link";
import type { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

const statusConfig = {
  active: {
    label: "فعال",
    className: "bg-emerald-50 text-emerald-600",
  },
  inactive: {
    label: "غیرفعال",
    className: "bg-slate-100 text-slate-500",
  },
  attention: {
    label: "نیازمند توجه",
    className: "bg-amber-50 text-amber-600",
  },
};

export function StudentCard({ student }: StudentCardProps) {
  const status = statusConfig[student.status];

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-indigo-50 text-indigo-500">
            {student.avatar ? (
              <img
                src={student.avatar}
                alt={student.fullName}
                className="h-full w-full object-cover"
              />
            ) : (
              <UserRound className="h-6 w-6" />
            )}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-black text-slate-900">
              {student.fullName}
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              کد {student.studentCode}
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-bold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-400">میانگین</p>
          <p className="mt-1 text-lg font-black text-slate-800">
            {student.overallScore}٪
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-400">حضور</p>
          <p className="mt-1 text-lg font-black text-slate-800">
            {student.attendance}٪
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <BookOpen className="h-4 w-4" />
          {student.completedQuizzes} آزمون تکمیل‌شده
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
          <CheckCircle2 className="h-4 w-4" />
          {student.attendance}٪ حضور
        </div>
      </div>

      <Link
        href={`/students/${student.id}`}
        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
      >
        مشاهده پروفایل
        <ArrowLeft className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
