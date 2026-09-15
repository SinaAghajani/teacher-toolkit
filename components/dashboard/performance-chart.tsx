"use client";

import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PerformanceData {
  name: string;
  score: number;
}

interface PerformanceChartProps {
  data?: PerformanceData[];
  title?: string;
  description?: string;
}

export function PerformanceChart({
  data = [
    { name: "مهر", score: 72 },
    { name: "آبان", score: 76 },
    { name: "آذر", score: 74 },
    { name: "دی", score: 81 },
    { name: "بهمن", score: 84 },
    { name: "اسفند", score: 88 },
  ],
  title = "روند عملکرد کلاس",
  description = "میانگین نمرات کلاس در ماه‌های اخیر",
}: PerformanceChartProps) {
  const average = useMemo(() => {
    if (!data.length) return 0;

    return Math.round(
      data.reduce((sum, item) => sum + item.score, 0) / data.length,
    );
  }, [data]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-lg font-black text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>

        <div className="rounded-xl bg-indigo-50 px-4 py-2 text-left">
          <p className="text-xs font-medium text-indigo-500">میانگین</p>
          <p className="mt-0.5 text-lg font-black text-indigo-700">
            {average}٪
          </p>
        </div>
      </div>

      <div className="h-70 w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 11 }}
              width={35}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                direction: "rtl",
              }}
              formatter={(value) => [`${value}٪`, "میانگین نمره"]}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#FFFFFF",
                stroke: "#4F46E5",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
