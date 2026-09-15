import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Users,
} from "lucide-react";
import { classes } from "@/data/classes";

interface ClassDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ClassDetailsPage({
  params,
}: ClassDetailsPageProps) {
  const { id } = await params;
  const classRoom = classes.find((item) => item.id === id);

  if (!classRoom) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/classes"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600"
      >
        <ArrowRight className="size-4" />
        بازگشت به کلاس‌ها
      </Link>

      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <BookOpen className="size-6" />
            </div>

            <h1 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">
              {classRoom.name}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              پایه {classRoom.grade} · گروه {classRoom.section} ·{" "}
              {classRoom.academicYear}
            </p>
          </div>

          <div className="rounded-3xl bg-indigo-50 px-6 py-5">
            <p className="text-sm text-indigo-500">میانگین کلاس</p>
            <p className="mt-1 text-3xl font-black text-indigo-700">
              {classRoom.averageScore}٪
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Users className="size-5 text-indigo-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {classRoom.studentCount}
          </p>
          <p className="mt-1 text-sm text-slate-500">دانش‌آموز</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <CheckCircle2 className="size-5 text-emerald-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {classRoom.attendanceRate}٪
          </p>
          <p className="mt-1 text-sm text-slate-500">نرخ حضور</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <GraduationCap className="size-5 text-violet-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {classRoom.subjects.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">درس فعال</p>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">
            عملکرد دروس کلاس
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            میانگین عملکرد دانش‌آموزان در هر درس
          </p>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2">
          {classRoom.subjects.map((subject) => (
            <div
              key={subject.id}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">{subject.name}</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {subject.studentCount} دانش‌آموز
                  </p>
                </div>

                <span className="text-2xl font-black text-indigo-600">
                  {subject.averageScore}٪
                </span>
              </div>

              <div className="mt-5 h-2 rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-indigo-600"
                  style={{ width: `${subject.averageScore}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
