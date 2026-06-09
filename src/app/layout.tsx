import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Chen | 全栈开发者 & 设计师",
    template: "%s | Alex Chen",
  },
  description:
    "Alex Chen 的个人作品集 — 一位全栈开发者和 UI/UX 设计师，专注于构建现代化、高性能的 Web 应用。",
  keywords: ["开发者", "设计师", "作品集", "全栈", "前端", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Alex Chen | 全栈开发者 & 设计师",
    description: "Alex Chen 的个人作品集 — 用前沿技术打造现代 Web 体验。",
    type: "website",
    locale: "zh_CN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-body antialiased noise-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
