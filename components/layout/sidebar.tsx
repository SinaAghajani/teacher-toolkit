"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  School,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";

interface NavigationItemType {
  title: string;
  href: string;
  icon: LucideIcon;
}

const navigation: NavigationItemType[] = [
  {
    title: "داشبورد",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
];

const classroomNavigation: NavigationItemType[] = [
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
];

const teachingNavigation: NavigationItemType[] = [
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
];

const insightNavigation: NavigationItemType[] = [
  {
    title: "تحلیل و آمار",
    href: "/analytics",
    icon: BarChart3,
  },
];

function NavigationItem({
  title,
  href,
  icon: Icon,
  collapsed,
}: NavigationItemType & {
  collapsed: boolean;
}) {
  const pathname = usePathname();

  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      title={collapsed ? title : undefined}
      className={cn(
        "group flex items-center rounded-2xl py-3 text-sm font-medium transition-all duration-300",
        collapsed ? "justify-center px-3" : "gap-3 px-3.5",
        active
          ? "bg-indigo-600! text-white! shadow-lg shadow-indigo-200/40"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
      )}
    >
      <Icon
        size={19}
        strokeWidth={active ? 2.2 : 1.8}
        className={cn("shrink-0", active ? "text-white!" : "text-current")}
      />

      {!collapsed && (
        <span
          className={cn(
            "whitespace-nowrap",
            active ? "text-white!" : "text-current",
          )}
        >
          {title}
        </span>
      )}
    </Link>
  );
}

function NavigationGroup({
  title,
  items,
  collapsed,
}: {
  title: string;
  items: NavigationItemType[];
  collapsed: boolean;
}) {
  return (
    <div className="space-y-1.5">
      {!collapsed && (
        <p className="px-3.5 pb-2 pt-5 text-[10px] font-bold tracking-wider text-slate-400">
          {title}
        </p>
      )}

      {collapsed && <div className="h-3" />}

      {items.map((item) => (
        <NavigationItem key={item.href} {...item} collapsed={collapsed} />
      ))}
    </div>
  );
}

export function Sidebar() {
  const router = useRouter();
  const { isOpen, toggle } = useSidebar();

  const collapsed = !isOpen;

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 right-0 z-40 hidden border-l border-slate-200/80 bg-white lg:block",
        "transition-[width] duration-300 ease-in-out",
        collapsed ? "w-20" : "w-72",
      )}
    >
      <div className="flex h-full flex-col px-3 py-5">
        <Link
          href="/"
          className={cn(
            "flex items-center transition-all duration-300",
            collapsed ? "justify-center" : "gap-3",
          )}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200/50">
            <GraduationCap size={23} strokeWidth={2} />
          </div>

          <div
            className={cn(
              "min-w-0 overflow-hidden transition-all duration-300",
              collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
            )}
          >
            <h1 className="whitespace-nowrap text-base font-extrabold text-slate-900">
              Teacher Toolkit
            </h1>

            <p className="mt-0.5 whitespace-nowrap text-[10px] font-medium text-slate-400">
              ابزارهای حرفه‌ای معلم
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={toggle}
          aria-label={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
          title={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
          className="absolute -left-4 top-20 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-md transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <ChevronLeft
            size={16}
            className={cn(
              "transition-transform duration-300",
              collapsed && "rotate-180",
            )}
          />
        </button>

        <nav className="mt-7 flex-1 overflow-y-auto overflow-x-hidden px-1">
          <div className="space-y-1.5">
            {navigation.map((item) => (
              <NavigationItem key={item.href} {...item} collapsed={collapsed} />
            ))}
          </div>

          <NavigationGroup
            title="کلاس من"
            items={classroomNavigation}
            collapsed={collapsed}
          />

          <NavigationGroup
            title="آموزش"
            items={teachingNavigation}
            collapsed={collapsed}
          />

          <NavigationGroup
            title="گزارش‌ها"
            items={insightNavigation}
            collapsed={collapsed}
          />
        </nav>

        <div className="space-y-1.5 border-t border-slate-100 px-1 pt-4">
          <NavigationItem
            title="تنظیمات"
            href="/settings"
            icon={Settings}
            collapsed={collapsed}
          />

          <NavigationItem
            title="راهنما"
            href="/help"
            icon={HelpCircle}
            collapsed={collapsed}
          />
        </div>

        <div
          className={cn(
            "mt-4 overflow-hidden rounded-2xl bg-slate-50 p-3.5 transition-all duration-300",
            collapsed ? "mx-auto w-12 p-1.5" : "w-full",
          )}
        >
          <div
            className={cn(
              "flex items-center",
              collapsed ? "justify-center" : "gap-3",
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
              س
            </div>

            <div
              className={cn(
                "min-w-0 overflow-hidden transition-all duration-300",
                collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
              )}
            >
              <p className="truncate whitespace-nowrap text-sm font-bold text-slate-800">
                سینا آقاجانی
              </p>

              <p className="mt-0.5 whitespace-nowrap text-[11px] text-slate-400">
                معلم پایه ششم
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          title="خروج از حساب کاربری"
          aria-label="خروج از حساب کاربری"
          className={cn(
            "mt-3 flex w-full items-center rounded-2xl py-3 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600",
            collapsed ? "justify-center px-3" : "gap-3 px-3.5",
          )}
        >
          <LogOut size={19} strokeWidth={1.8} className="shrink-0" />

          {!collapsed && (
            <span className="whitespace-nowrap">خروج از حساب کاربری</span>
          )}
        </button>
      </div>
    </aside>
  );
}
