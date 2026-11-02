import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/sites/gmsangjin/Header";
import { SiteFooter } from "@/components/sites/gmsangjin/Footer";

export const metadata: Metadata = {
  title: "지엠상진 - 도장설비 및 공장 자동화 전문 기업",
  description:
    "DACRO 설비(SPIN, DIP, TILTI), 도장설비(액체·분체·전착·전처리), 자동제어 전문. GM SANGJIN ENGINEERING & ELECTRIC Co., Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
