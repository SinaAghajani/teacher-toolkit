import { AlertTriangle, ArrowLeft, UserRound } from "lucide-react";
import Link from "next/link";
import type { Student } from "@/types/student";

interface AttentionStudentsProps {
  students: Student[];
  title?: string;
  limit?: number;
}

export function AttentionStudents({
  students,
  title = "دانش‌آموزان نیازمند توجه",
  limit = 5,
}: AttentionStudentsProps) {
  const visibleStudents = students
    .filter((student) => student.status === "attention")
    .slice(0, limit);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">
            دانش‌آموزانی که بهتر است بررسی شوند
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
          <AlertTriangle className="h-4.5 w-4.5" />
        </div>
      </div>

      {visibleStudents.length > 0 ? (
        <div className="space-y-2">
          {visibleStudents.map((student) => (
            <Link
              key={student.id}
              href={`/students/${student.id}`}
              className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-400">
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

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800">
                  {student.fullName}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  پایه {student.grade} · کلاس {student.className}
                </p>
              </div>

              <div className="text-left">
                <p className="text-sm font-black text-amber-600">
                  {student.overallScore}٪
                </p>
                <ArrowLeft className="mr-auto mt-1 h-3.5 w-3.5 text-slate-300" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-emerald-50 px-4 py-8 text-center text-sm font-medium text-emerald-700">
          عالیه! در حال حاضر دانش‌آموزی نیازمند توجه ویژه نیست.
        </div>
      )}
    </section>
  );
}
