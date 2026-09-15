import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, FileText, Timer } from "lucide-react";
import { worksheets } from "@/data/worksheets";

interface WorksheetDetailsPageProps {
  params: Promise<{ id: string }>;
}

const statusMap = {
  draft: "پیش‌نویس",
  published: "منتشر شده",
  archived: "آرشیو شده",
};

export default async function WorksheetDetailsPage({
  params,
}: WorksheetDetailsPageProps) {
  const { id } = await params;
  const worksheet = worksheets.find((item) => item.id === id);

  if (!worksheet) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/worksheets"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600"
      >
        <ArrowRight className="size-4" />
        بازگشت به کاربرگ‌ها
      </Link>

      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <FileText className="size-6" />
            </div>

            <h1 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">
              {worksheet.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              {worksheet.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
                {worksheet.subject}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                پایه {worksheet.grade}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                {statusMap[worksheet.status]}
              </span>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700">
            <Download className="size-4" />
            دریافت کاربرگ
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <FileText className="size-5 text-indigo-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {worksheet.questionCount}
          </p>
          <p className="mt-1 text-sm text-slate-500">سؤال</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Timer className="size-5 text-sky-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {worksheet.estimatedTime}
          </p>
          <p className="mt-1 text-sm text-slate-500">دقیقه</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Download className="size-5 text-emerald-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {worksheet.downloads}
          </p>
          <p className="mt-1 text-sm text-slate-500">دانلود</p>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">
            پیش‌نمایش سؤالات
          </h2>
        </div>

        <div className="space-y-4 p-6">
          {worksheet.questions.map((question, index) => (
            <div
              key={question.id}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5"
            >
              <div className="flex gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <p className="font-bold leading-7 text-slate-900">
                    {question.question}
                  </p>

                  {question.options && (
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {question.options.map((option) => (
                        <div
                          key={option}
                          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <span className="text-xs font-bold text-slate-400">
                  {question.points} امتیاز
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
