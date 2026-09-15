import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileQuestion,
  Pencil,
  PlayCircle,
} from "lucide-react";
import { quizzes } from "@/data/quizzes";

const statusMap = {
  draft: {
    label: "پیش‌نویس",
    className: "bg-slate-100 text-slate-600",
  },
  published: {
    label: "منتشر شده",
    className: "bg-indigo-50 text-indigo-700",
  },
  completed: {
    label: "تکمیل شده",
    className: "bg-emerald-50 text-emerald-700",
  },
};

export default function QuizzesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
              <FileQuestion className="size-4" />
              ارزیابی و آزمون
            </div>

            <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
              آزمون‌های من
            </h1>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              آزمون‌های کلاسی را ایجاد، منتشر و عملکرد دانش‌آموزان را بررسی
              کنید.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700">
            <Pencil className="size-4" />
            ایجاد آزمون
          </button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {quizzes.map((quiz) => {
          const status = statusMap[quiz.status];

          return (
            <Link
              key={quiz.id}
              href={`/quizzes/${quiz.id}`}
              className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <FileQuestion className="size-6" />
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${status.className}`}
                >
                  {status.label}
                </span>
              </div>

              <h2 className="mt-5 text-lg font-black text-slate-900">
                {quiz.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                {quiz.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
                  {quiz.subject}
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
                  پایه {quiz.grade}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <FileQuestion className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {quiz.questionCount}
                  </p>
                  <p className="text-xs text-slate-400">سؤال</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <Clock3 className="size-4 text-slate-400" />
                  <p className="mt-2 font-black text-slate-900">
                    {quiz.duration}
                  </p>
                  <p className="text-xs text-slate-400">دقیقه</p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <p className="mt-2 font-black text-emerald-700">
                    {quiz.averageScore || "—"}
                  </p>
                  <p className="text-xs text-emerald-500">میانگین</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs text-slate-400">
                  {quiz.participantCount} از {quiz.totalParticipants} نفر شرکت
                  کرده‌اند
                </span>

                <ArrowLeft className="size-4 text-slate-300 transition group-hover:-translate-x-1 group-hover:text-indigo-600" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
