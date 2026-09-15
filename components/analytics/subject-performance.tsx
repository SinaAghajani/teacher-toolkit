"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SubjectPerformanceData {
  subject: string;
  score: number;
  studentCount?: number;
}

interface SubjectPerformanceProps {
  data: SubjectPerformanceData[];
  title?: string;
}

export function SubjectPerformance({
  data,
  title = "عملکرد بر اساس درس",
}: SubjectPerformanceProps) {
  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-black text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          میانگین عملکرد دانش‌آموزان در هر درس
        </p>
      </div>

      <div className="h-[320px] w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -15, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="subject"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 11 }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 11 }}
              width={35}
            />

            <Tooltip
              cursor={{ fill: "#F8FAFC" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                direction: "rtl",
              }}
              formatter={(value) => [`${value}٪`, "میانگین"]}
            />

            <Bar
              dataKey="score"
              fill="#4F46E5"
              radius={[6, 6, 0, 0]}
              barSize={34}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
