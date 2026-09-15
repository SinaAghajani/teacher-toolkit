import { CheckCircle2, CircleHelp, FileText, Minus } from "lucide-react";
import type { Worksheet } from "@/types/worksheet";

interface WorksheetPreviewProps {
  worksheet: Worksheet;
}

export function WorksheetPreview({ worksheet }: WorksheetPreviewProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <FileText className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-xl font-black text-slate-900">
                {worksheet.title}
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {worksheet.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-indigo-50 px-3 py-2 text-center">
            <p className="text-xs text-indigo-500">پایه</p>
            <p className="mt-0.5 text-sm font-black text-indigo-700">
              {worksheet.grade}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">درس</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {worksheet.subject}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">سؤالات</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {worksheet.questionCount}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">زمان پیشنهادی</p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {worksheet.estimatedTime} دقیقه
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">سطح</p>
            <p className="mt-1 text-sm font-bold text-indigo-600">
              {worksheet.difficulty === "easy"
                ? "آسان"
                : worksheet.difficulty === "medium"
                  ? "متوسط"
                  : "سخت"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        {worksheet.questions.map((question, index) => (
          <div
            key={question.id}
            className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
          >
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-xs font-black text-indigo-600">
                {index + 1}
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold leading-7 text-slate-800">
                  {question.question}
                </p>

                {question.type === "multiple-choice" && question.options && (
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={option}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-600"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-[10px] font-bold text-slate-500">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        {option}
                      </div>
                    ))}
                  </div>
                )}

                {question.type === "true-false" && (
                  <div className="mt-4 flex gap-2">
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      درست
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-600">
                      <Minus className="h-4 w-4 text-rose-500" />
                      نادرست
                    </div>
                  </div>
                )}

                {question.type === "short-answer" && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-5 text-xs text-slate-400">
                    <CircleHelp className="h-4 w-4" />
                    پاسخ خود را در این قسمت بنویسید.
                  </div>
                )}
              </div>

              <span className="shrink-0 text-xs font-bold text-slate-400">
                {question.points} نمره
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
