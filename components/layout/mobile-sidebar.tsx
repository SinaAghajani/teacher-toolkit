"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Settings,
  School,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const items = [
  {
    title: "داشبورد",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "دانش‌آموزان",
    href: "/students",
    icon: Users,
  },
  {
    title: "کلاس‌ها",
    href: "/classes",
    icon: School,
  },
  {
    title: "آزمون‌ها",
    href: "/quizzes",
    icon: ClipboardCheck,
  },
  {
    title: "طرح درس",
    href: "/lesson-plans",
    icon: CalendarDays,
  },
  {
    title: "برگه تمرین",
    href: "/worksheets",
    icon: FileText,
  },
  {
    title: "تحلیل و آمار",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "تنظیمات",
    href: "/settings",
    icon: Settings,
  },
];

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72.5 bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <GraduationCap size={21} />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Teacher Toolkit
                </p>

                <p className="text-[10px] text-slate-400">
                  ابزارهای حرفه‌ای معلم
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="بستن منو"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <X size={19} />
            </button>
          </div>

          <nav className="mt-8 flex-1 space-y-1.5 overflow-y-auto">
            {items.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200/40"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                  )}
                >
                  <Icon size={19} strokeWidth={active ? 2.2 : 1.8} />

                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          <div className="rounded-2xl bg-slate-50 p-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                س
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">سینا آقاجانی</p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  معلم پایه ششم
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
