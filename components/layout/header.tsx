"use client";

import { Bell, Menu, Search } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";

export function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-30 px-3 pt-3 sm:px-5 lg:px-6">
      <div className="flex h-16 items-center justify-between rounded-[1.75rem] border border-slate-200/80 bg-white/95 px-4 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:px-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="باز کردن منو"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          >
            <Menu size={21} />
          </button>

          <div className="hidden items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 md:flex">
            <Search size={17} className="text-slate-400" />

            <input
              type="search"
              placeholder="جستجو..."
              className="w-48 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="md:hidden">
            <p className="text-sm font-extrabold text-slate-900">
              Teacher Toolkit
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="اعلان‌ها"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <Bell size={19} />

            <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-indigo-600" />
          </button>

          <div className="mx-1 hidden h-7 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-2.5">
            <div className="hidden text-left sm:block">
              <p className="text-xs font-bold text-slate-800">سینا آقاجانی</p>
              <p className="mt-0.5 text-[10px] text-slate-400">Teacher</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700">
              س
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
