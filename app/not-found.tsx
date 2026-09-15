import Link from "next/link";
import { ArrowRight, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-indigo-50 text-indigo-600">
          <SearchX size={36} strokeWidth={1.7} />
        </div>

        <p className="mt-7 text-sm font-bold text-indigo-600">خطای ۴۰۴</p>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          صفحه پیدا نشد
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است جابه‌جا شده باشد.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white shadow-lg shadow-indigo-200/40 transition-all hover:bg-indigo-700"
          >
            <Home size={17} />
            بازگشت به داشبورد
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <ArrowRight size={17} />
            صفحه قبل
          </button>
        </div>
      </div>
    </main>
  );
}
