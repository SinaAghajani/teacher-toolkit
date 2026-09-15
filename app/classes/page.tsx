import Link from "next/link";
import { ArrowLeft, BookOpen, CalendarDays, Users } from "lucide-react";
import { classes } from "@/data/classes";

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3 text-indigo-600">
          <BookOpen className="size-5" />
          <span className="text-sm font-bold">مدیریت کلاس‌ها</span>
        </div>

        <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
          کلاس‌های من
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
          کلاس‌ها، دانش‌آموزان، میانگین عملکرد و وضعیت حضور را از یکجا مدیریت
          کنید.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {classes.map((classRoom) => (
          <Link
            key={classRoom.id}
            href={`/classes/${classRoom.id}`}
            className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <BookOpen className="size-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-slate-900">
                  {classRoom.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  پایه {classRoom.grade} · سال تحصیلی {classRoom.academicYear}
                </p>
              </div>

              <ArrowLeft className="size-5 text-slate-300 transition group-hover:-translate-x-1 group-hover:text-indigo-600" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <Users className="size-4 text-slate-400" />
                <p className="mt-3 text-xl font-black text-slate-900">
                  {classRoom.studentCount}
                </p>
                <p className="mt-1 text-xs text-slate-400">دانش‌آموز</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <CalendarDays className="size-4 text-slate-400" />
                <p className="mt-3 text-xl font-black text-slate-900">
                  {classRoom.attendanceRate}٪
                </p>
                <p className="mt-1 text-xs text-slate-400">حضور</p>
              </div>

              <div className="rounded-2xl bg-indigo-50 p-4">
                <p className="text-xs text-indigo-500">میانگین</p>
                <p className="mt-3 text-xl font-black text-indigo-700">
                  {classRoom.averageScore}٪
                </p>
                <p className="mt-1 text-xs text-indigo-400">عملکرد</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
