import Link from "next/link";
import { ArrowLeft, Download, FileText, Plus, Timer } from "lucide-react";
import { worksheets } from "@/data/worksheets";

const statusMap = {
  draft: {
    label: "پیش‌نویس",
    className: "bg-slate-100 text-slate-600",
  },
  published: {
    label: "منتشر شده",
    className: "bg-emerald-50 text-emerald-700",
  },
  archived: {
    label: "آرشیو شده",
    className: "bg-amber-50 text-amber-700",
  },
};

export default function WorksheetsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
              <FileText className="size-4" />
              محتوای آموزشی
            </div>

            <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
              کاربرگ‌های من
            </h1>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              کاربرگ‌های آموزشی را مدیریت کنید و برای تمرین بیشتر در اختیار
              دانش‌آموزان قرار دهید.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700">
            <Plus className="size-4" />
            کاربرگ جدید
          </button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {worksheets.map((worksheet) => {
          const status = statusMap[worksheet.status];

          return (
            <Link
              key={worksheet.id}
              href={`/worksheets/${worksheet.id}`}
              className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <FileText className="size-5" />
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${status.className}`}
                >
                  {status.label}
                </span>
              </div>

              <h2 className="mt-5 text-lg font-black text-slate-900">
                {worksheet.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                {worksheet.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
                  {worksheet.subject}
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
                  پایه {worksheet.grade}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <FileText className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {worksheet.questionCount}
                  </p>
                  <p className="text-xs text-slate-400">سؤال</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3">
                  <Timer className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {worksheet.estimatedTime}
                  </p>
                  <p className="text-xs text-slate-400">دقیقه</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3">
                  <Download className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {worksheet.downloads}
                  </p>
                  <p className="text-xs text-slate-400">دانلود</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end border-t border-slate-100 pt-5">
                <ArrowLeft className="size-4 text-slate-300 transition group-hover:-translate-x-1 group-hover:text-indigo-600" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
