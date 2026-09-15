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
import type { SubjectPerformance } from "@/types/student";

interface StudentPerformanceProps {
  subjects: SubjectPerformance[];
  title?: string;
}

export function StudentPerformance({
  subjects,
  title = "عملکرد دروس",
}: StudentPerformanceProps) {
  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-black text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          مقایسه عملکرد دانش‌آموز در دروس مختلف
        </p>
      </div>

      <div className="h-[300px] w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={subjects}
            layout="vertical"
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="#E2E8F0"
            />
            <XAxis
              type="number"
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 11 }}
            />
            <YAxis
              dataKey="subject"
              type="category"
              width={70}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 11 }}
            />
            <Tooltip
              cursor={{ fill: "#F8FAFC" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E2E8F0",
                direction: "rtl",
              }}
              formatter={(value) => [`${value}٪`, "نمره"]}
            />
            <Bar
              dataKey="score"
              fill="#4F46E5"
              radius={[0, 6, 6, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
