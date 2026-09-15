import { ArrowLeft, CalendarDays, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import type { ClassRoom } from "@/types/class";

interface ClassCardProps {
  classroom: ClassRoom;
}

export function ClassCard({ classroom }: ClassCardProps) {
  return (
    <article className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <GraduationCap className="h-6 w-6" />
        </div>

        <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
          فعال
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-black text-slate-900">
          پایه {classroom.grade} ـ کلاس {classroom.section}
        </h3>

        <p className="mt-1 text-sm text-slate-500">{classroom.name}</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Users className="h-3.5 w-3.5" />
            دانش‌آموزان
          </div>
          <p className="mt-1 text-lg font-black text-slate-800">
            {classroom.studentCount}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-400">میانگین کلاس</p>
          <p className="mt-1 text-lg font-black text-indigo-600">
            {classroom.averageScore}٪
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <CalendarDays className="h-4 w-4" />
        سال تحصیلی {classroom.academicYear}
      </div>

      <Link
        href={`/classes/${classroom.id}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
      >
        مشاهده کلاس
        <ArrowLeft className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
