"use client";

import { ArrowLeft, ChevronDown, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Student, StudentStatus } from "@/types/student";

interface StudentTableProps {
  students: Student[];
}

const statusConfig: Record<
  StudentStatus,
  { label: string; className: string }
> = {
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

export function StudentTable({ students }: StudentTableProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | StudentStatus>("all");

  const filteredStudents = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesSearch =
        !normalizedSearch ||
        student.fullName.toLowerCase().includes(normalizedSearch) ||
        student.studentCode.toLowerCase().includes(normalizedSearch);

      const matchesStatus = status === "all" || student.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [students, search, status]);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="جستجوی دانش‌آموز..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pr-10 pl-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
          />
        </div>

        <div className="relative w-full lg:w-44">
          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as "all" | StudentStatus)
            }
            className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pl-10 text-sm font-medium text-slate-600 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50"
          >
            <option value="all">همه وضعیت‌ها</option>
            <option value="active">فعال</option>
            <option value="attention">نیازمند توجه</option>
            <option value="inactive">غیرفعال</option>
          </select>
          <ChevronDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-190 text-right">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70 text-xs text-slate-500">
              <th className="px-5 py-4 font-bold">دانش‌آموز</th>
              <th className="px-5 py-4 font-bold">کلاس</th>
              <th className="px-5 py-4 font-bold">میانگین</th>
              <th className="px-5 py-4 font-bold">حضور</th>
              <th className="px-5 py-4 font-bold">آزمون‌ها</th>
              <th className="px-5 py-4 font-bold">وضعیت</th>
              <th className="px-5 py-4" />
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredStudents.map((student) => {
              const studentStatus = statusConfig[student.status];

              return (
                <tr
                  key={student.id}
                  className="group transition hover:bg-slate-50/70"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-indigo-50 text-indigo-500">
                        {student.avatar ? (
                          <img
                            src={student.avatar}
                            alt={student.fullName}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <UserRound className="h-5 w-5" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {student.fullName}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {student.studentCode}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    پایه {student.grade} ـ {student.className}
                  </td>

                  <td className="px-5 py-4 text-sm font-black text-slate-800">
                    {student.overallScore}٪
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {student.attendance}٪
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {student.completedQuizzes}/{student.totalQuizzes}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold ${studentStatus.className}`}
                    >
                      {studentStatus.label}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      href={`/students/${student.id}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600"
                      aria-label={`مشاهده ${student.fullName}`}
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <div className="flex min-h-48 items-center justify-center px-5 text-sm text-slate-400">
          دانش‌آموزی با این مشخصات پیدا نشد.
        </div>
      )}

      <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-400">
        نمایش {filteredStudents.length} دانش‌آموز از {students.length} دانش‌آموز
      </div>
    </section>
  );
}
