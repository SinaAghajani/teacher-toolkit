import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Teacher Toolkit",
    template: "%s | Teacher Toolkit",
  },
  description: "A modern digital toolkit for teachers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
