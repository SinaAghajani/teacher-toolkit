import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "دانش‌آموزان",
    value: "۲۸",
    description: "دانش‌آموز فعال",
    icon: GraduationCap,
  },
  {
    title: "آزمون‌ها",
    value: "۱۲",
    description: "آزمون برگزار شده",
    icon: ClipboardCheck,
  },
  {
    title: "میانگین کلاس",
    value: "۸۶٪",
    description: "عملکرد کلی",
    icon: TrendingUp,
  },
  {
    title: "درس‌ها",
    value: "۲۴",
    description: "درس برنامه‌ریزی شده",
    icon: BookOpen,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="rounded-4xl bg-linear-to-br from-indigo-600 via-indigo-600 to-violet-600 p-7 text-white shadow-xl shadow-indigo-200/40 sm:p-9">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              داشبورد معلم
            </span>

            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              صبح بخیر، سینا 👋
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-indigo-100 sm:text-base">
              اینجا می‌توانید وضعیت کلاس، عملکرد دانش‌آموزان و فعالیت‌های آموزشی
              خود را در یک نگاه مدیریت کنید.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {stat.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900">عملکرد کلاس</h2>
              <p className="mt-1 text-xs text-slate-400">
                میانگین عملکرد دروس مختلف
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
              +۸٪ این ماه
            </span>
          </div>

          <div className="mt-8 space-y-5">
            {[
              ["ریاضی", "91%"],
              ["علوم", "84%"],
              ["فارسی", "87%"],
              ["مطالعات اجتماعی", "78%"],
            ].map(([subject, value]) => (
              <div key={subject}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{subject}</span>
                  <span className="font-bold text-slate-900">{value}</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm">
          <div>
            <h2 className="font-bold text-slate-900">فعالیت‌های اخیر</h2>
            <p className="mt-1 text-xs text-slate-400">آخرین فعالیت‌های کلاس</p>
          </div>

          <div className="mt-6 space-y-5">
            {[
              ["آزمون ریاضی تکمیل شد", "۱۰ دقیقه پیش"],
              ["درس علوم ایجاد شد", "۱ ساعت پیش"],
              ["سارا احمدی آزمون را ارسال کرد", "۲ ساعت پیش"],
              ["برگه تمرین فارسی ایجاد شد", "امروز"],
            ].map(([title, time], index) => (
              <div key={title} className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xs font-bold text-indigo-600">
                  {index + 1}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-700">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
