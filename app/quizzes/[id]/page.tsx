import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileQuestion,
  Users,
} from "lucide-react";
import { quizzes } from "@/data/quizzes";

interface QuizDetailsPageProps {
  params: Promise<{ id: string }>;
}

const statusMap = {
  draft: "پیش‌نویس",
  published: "منتشر شده",
  completed: "تکمیل شده",
};

export default async function QuizDetailsPage({
  params,
}: QuizDetailsPageProps) {
  const { id } = await params;
  const quiz = quizzes.find((item) => item.id === id);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/quizzes"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600"
      >
        <ArrowRight className="size-4" />
        بازگشت به آزمون‌ها
      </Link>

      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <FileQuestion className="size-6" />
            </div>

            <h1 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">
              {quiz.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              {quiz.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
                {quiz.subject}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                پایه {quiz.grade}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                {statusMap[quiz.status]}
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-indigo-50 p-6 lg:min-w-48">
            <p className="text-sm text-indigo-500">میانگین امتیاز</p>
            <p className="mt-1 text-4xl font-black text-indigo-700">
              {quiz.averageScore || "—"}
              {quiz.averageScore ? "٪" : ""}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <FileQuestion className="size-5 text-indigo-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {quiz.questionCount}
          </p>
          <p className="mt-1 text-sm text-slate-500">سؤال</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Clock3 className="size-5 text-sky-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {quiz.duration}
          </p>
          <p className="mt-1 text-sm text-slate-500">دقیقه</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Users className="size-5 text-emerald-600" />
          <p className="mt-4 text-2xl font-black text-slate-900">
            {quiz.participantCount}
          </p>
          <p className="mt-1 text-sm text-slate-500">شرکت‌کننده</p>
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-black text-slate-900">سؤالات آزمون</h2>
        </div>

        <div className="space-y-4 p-6">
          {quiz.questions.map((question, index) => (
            <div
              key={question.id}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5"
            >
              <div className="flex gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
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

                <span className="shrink-0 text-xs font-bold text-slate-400">
                  {question.points} امتیاز
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {quiz.results.length > 0 && (
        <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-6">
            <h2 className="text-lg font-black text-slate-900">نتایج ثبت‌شده</h2>
          </div>

          <div className="divide-y divide-slate-100">
            {quiz.results.map((result) => (
              <div
                key={result.studentId}
                className="flex items-center justify-between gap-4 p-5"
              >
                <span className="text-sm font-bold text-slate-700">
                  دانش‌آموز {result.studentId}
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500">
                    {result.correctAnswers} پاسخ صحیح
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-black text-emerald-700">
                    {result.score}٪
                  </span>

                  <CheckCircle2 className="size-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
