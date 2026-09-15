import { ArrowLeft, Clock3, FileQuestion, Users } from "lucide-react";
import Link from "next/link";
import type { Quiz } from "@/types/quiz";

interface QuizCardProps {
  quiz: Quiz;
}

const statusConfig = {
  draft: {
    label: "پیش‌نویس",
    className: "bg-slate-100 text-slate-500",
  },
  published: {
    label: "منتشر شده",
    className: "bg-emerald-50 text-emerald-600",
  },
  completed: {
    label: "تکمیل شده",
    className: "bg-indigo-50 text-indigo-600",
  },
};

const difficultyConfig = {
  easy: {
    label: "آسان",
    className: "text-emerald-600",
  },
  medium: {
    label: "متوسط",
    className: "text-amber-600",
  },
  hard: {
    label: "سخت",
    className: "text-rose-600",
  },
};

export function QuizCard({ quiz }: QuizCardProps) {
  const status = statusConfig[quiz.status];
  const difficulty = difficultyConfig[quiz.difficulty];

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <FileQuestion className="h-5 w-5" />
        </div>

        <span
          className={`rounded-lg px-2.5 py-1 text-[11px] font-bold ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="line-clamp-1 text-base font-black text-slate-900">
          {quiz.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
          {quiz.description}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3 text-xs">
        <span className="font-bold text-indigo-600">{quiz.subject}</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-500">پایه {quiz.grade}</span>
        <span className="text-slate-300">•</span>
        <span className={`font-bold ${difficulty.className}`}>
          {difficulty.label}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <FileQuestion className="h-4 w-4 text-slate-400" />
          <p className="mt-2 text-sm font-black text-slate-800">
            {quiz.questionCount}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-400">سؤال</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <Clock3 className="h-4 w-4 text-slate-400" />
          <p className="mt-2 text-sm font-black text-slate-800">
            {quiz.duration}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-400">دقیقه</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <Users className="h-4 w-4 text-slate-400" />
          <p className="mt-2 text-sm font-black text-slate-800">
            {quiz.participantCount}
          </p>
          <p className="mt-0.5 text-[10px] text-slate-400">شرکت‌کننده</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-[11px] text-slate-400">میانگین نمره</p>
          <p className="mt-1 text-sm font-black text-indigo-600">
            {quiz.averageScore}٪
          </p>
        </div>

        <Link
          href={`/quizzes/${quiz.id}`}
          className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
        >
          جزئیات
          <ArrowLeft className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
