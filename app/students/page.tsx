import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Search,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { students } from "@/data/students";

const statusMap = {
  active: {
    label: "فعال",
    className: "bg-emerald-50 text-emerald-700",
  },
  attention: {
    label: "نیازمند توجه",
    className: "bg-amber-50 text-amber-700",
  },
  inactive: {
    label: "غیرفعال",
    className: "bg-slate-100 text-slate-600",
  },
};

export default function StudentsPage() {
  const averageScore = Math.round(
    students.reduce((sum, student) => sum + student.overallScore, 0) /
      students.length,
  );

  const averageAttendance = Math.round(
    students.reduce((sum, student) => sum + student.attendance, 0) /
      students.length,
  );

  const attentionCount = students.filter(
    (student) => student.status === "attention",
  ).length;

  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-600">
              <Users className="size-4" />
              مدیریت دانش‌آموزان
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              دانش‌آموزان کلاس
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              عملکرد، حضور و وضعیت آموزشی دانش‌آموزان کلاس خود را مدیریت و بررسی
              کنید.
            </p>
          </div>

          <Link
            href="/classes/class-001"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
          >
            مشاهده کلاس
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">کل دانش‌آموزان</span>
            <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
              <Users className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {students.length}
          </p>
          <p className="mt-1 text-xs text-slate-400">دانش‌آموز ثبت‌شده</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">میانگین عملکرد</span>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
              <TrendingUp className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {averageScore}٪
          </p>
          <p className="mt-1 text-xs text-emerald-600">عملکرد مطلوب کلاس</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">میانگین حضور</span>
            <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
              <BookOpen className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {averageAttendance}٪
          </p>
          <p className="mt-1 text-xs text-slate-400">حضور و مشارکت</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">نیازمند توجه</span>
            <div className="rounded-2xl bg-amber-50 p-3 text-amber-600">
              <TrendingDown className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-black text-slate-900">
            {attentionCount}
          </p>
          <p className="mt-1 text-xs text-amber-600">نیازمند پیگیری بیشتر</p>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-black text-slate-900">
              فهرست دانش‌آموزان
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              برای مشاهده جزئیات روی هر دانش‌آموز کلیک کنید.
            </p>
          </div>

          <div className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-400">
            <Search className="size-4" />
            جستجوی دانش‌آموز
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {students.map((student) => {
            const status = statusMap[student.status];

            return (
              <Link
                key={student.id}
                href={`/students/${student.id}`}
                className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-black text-indigo-600">
                    {student.firstName.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-slate-900">
                      {student.fullName}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      کد دانش‌آموزی: {student.studentCode}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-6 sm:flex">
                  <div>
                    <p className="text-xs text-slate-400">عملکرد</p>
                    <p className="mt-1 font-black text-slate-900">
                      {student.overallScore}٪
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">حضور</p>
                    <p className="mt-1 font-black text-slate-900">
                      {student.attendance}٪
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-center text-xs font-bold ${status.className}`}
                  >
                    {status.label}
                  </span>

                  <ArrowLeft className="hidden size-4 text-slate-300 sm:block" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
