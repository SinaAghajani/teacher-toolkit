"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { MobileSidebar } from "./mobile-sidebar";
import { useSidebar } from "@/hooks/use-sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();

  const isHomePage = pathname === "/";

  if (isHomePage) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main className="min-h-[calc(100vh-5rem)]">{children}</main>

        <footer className="mx-4 mb-4 overflow-hidden rounded-4xl bg-slate-900 px-6 py-7 text-white sm:mx-6 lg:mx-8">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-right">
            <div>
              <p className="font-bold">Teacher Toolkit</p>

              <p className="mt-1 text-xs text-slate-400">
                ابزارهای هوشمند برای یک تجربه آموزشی بهتر
              </p>
            </div>

            <p className="text-xs text-slate-500">© 2026 Teacher Toolkit</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <MobileSidebar isOpen={isOpen} onClose={close} />

      <div
        className={[
          "min-h-screen transition-[margin] duration-300 ease-in-out",
          isOpen ? "lg:mr-72" : "lg:mr-20",
        ].join(" ")}
      >
        <Header />

        <main className="min-h-[calc(100vh-5rem)] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1600px]">{children}</div>
        </main>

        <footer className="mx-4 mb-4 overflow-hidden rounded-4xl bg-slate-900 px-6 py-7 text-white sm:mx-6 lg:mx-8">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-right">
            <div>
              <p className="font-bold">Teacher Toolkit</p>

              <p className="mt-1 text-xs text-slate-400">
                ابزارهای هوشمند برای یک تجربه آموزشی بهتر
              </p>
            </div>

            <p className="text-xs text-slate-500">© 2026 Teacher Toolkit</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
