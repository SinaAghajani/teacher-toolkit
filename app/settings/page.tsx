import {
  Bell,
  Globe2,
  LockKeyhole,
  Palette,
  Save,
  UserRound,
} from "lucide-react";
import { teacher } from "@/data/teacher";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
          <UserRound className="size-4" />
          تنظیمات
        </div>

        <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
          تنظیمات حساب کاربری
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
          اطلاعات پروفایل، ظاهر و تنظیمات عمومی Teacher Toolkit را مدیریت کنید.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-4xl border border-slate-200 bg-white p-4 shadow-sm">
          <nav className="space-y-2">
            <button className="flex w-full items-center gap-3 rounded-2xl bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700">
              <UserRound className="size-4" />
              پروفایل
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50">
              <Bell className="size-4" />
              اعلان‌ها
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50">
              <Palette className="size-4" />
              ظاهر
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50">
              <LockKeyhole className="size-4" />
              امنیت
            </button>
          </nav>
        </aside>

        <div className="space-y-6">
          <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                <UserRound className="size-5" />
              </div>
              <div>
                <h2 className="font-black text-slate-900">اطلاعات شخصی</h2>
                <p className="mt-1 text-xs text-slate-400">
                  اطلاعات پایه حساب کاربری
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  نام و نام خانوادگی
                </label>
                <input
                  defaultValue={teacher.fullName}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  نقش
                </label>
                <input
                  defaultValue={teacher.role}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  ایمیل
                </label>
                <input
                  defaultValue={teacher.email}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  شماره تماس
                </label>
                <input
                  defaultValue={teacher.phone}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </div>
            </div>
          </section>

          <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                <Globe2 className="size-5" />
              </div>
              <div>
                <h2 className="font-black text-slate-900">اطلاعات آموزشی</h2>
                <p className="mt-1 text-xs text-slate-400">
                  اطلاعات مرتبط با مدرسه و کلاس
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  مدرسه
                </label>
                <input
                  defaultValue={teacher.school}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  شهر
                </label>
                <input
                  defaultValue={teacher.city}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  پایه
                </label>
                <input
                  defaultValue={`پایه ${teacher.grade}`}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  سابقه تدریس
                </label>
                <input
                  defaultValue={`${teacher.experience} سال`}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:bg-white"
                />
              </div>
            </div>
          </section>

          <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-violet-50 p-3 text-violet-600">
                <Bell className="size-5" />
              </div>
              <div>
                <h2 className="font-black text-slate-900">اعلان‌ها</h2>
                <p className="mt-1 text-xs text-slate-400">
                  مدیریت اعلان‌های داشبورد
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "اعلان عملکرد دانش‌آموزان",
                "یادآوری آزمون‌ها و فعالیت‌ها",
                "گزارش هفتگی کلاس",
              ].map((item, index) => (
                <label
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>

                  <input
                    type="checkbox"
                    defaultChecked={index !== 1}
                    className="size-5 accent-indigo-600"
                  />
                </label>
              ))}
            </div>
          </section>

          <div className="flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
              <Save className="size-4" />
              ذخیره تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
