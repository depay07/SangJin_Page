import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/sites/gmsangjin/Header";
import { SiteFooter } from "@/components/sites/gmsangjin/Footer";
import { COMPANY } from "@/components/sites/gmsangjin/data";

const SITE_URL = "https://sangjin-fa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "지엠상진 | 전기제어·도장설비·공장자동화 전문 (PLC, 전기판넬제작, 전기공사)",
    template: "%s | 지엠상진 전기제어·자동제어 전문",
  },
  description:
    "전기제어시스템 설계·제작·시공 전문 지엠상진. PLC 제어프로그램, 전기판넬제작(HMI·계장), 전기공사, DACRO·도장설비(액체·분체·전착·전처리) 턴키 시공. 대표전화 010-8228-4252.",
  keywords: [
    "전기제어",
    "전기제어시스템",
    "제어시스템",
    "전기판넬제작",
    "PLC",
    "PLC제어",
    "제어프로그램",
    "전기공사",
    "자동제어",
    "공장자동화",
    "HMI",
    "판넬제작",
    "계장제작",
    "도장설비",
    "도장부스",
    "분체도장",
    "DACRO",
    "다크로설비",
    "건조로",
    "지엠상진",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sangjin-fa.com" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "지엠상진",
    title: "지엠상진 | 전기제어·도장설비·공장자동화 전문",
    description:
      "전기제어시스템·PLC·전기판넬제작·전기공사·도장설비 턴키 전문기업. GM SANGJIN ENGINEERING & ELECTRIC.",
  },
};

function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: "GM SANGJIN ENGINEERING & ELECTRIC Co., Ltd.",
    description:
      "전기제어시스템, PLC 제어프로그램, 전기판넬제작, 전기공사, 도장설비(DACRO·액체·분체·전착) 전문 기업",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressCountry: "KR",
    },
    telephone: `+82-10-8228-4252`,
    email: COMPANY.email,
    foundingDate: "2015-12",
    "@id": `${SITE_URL}/#organization`,
    url: SITE_URL,
    logo: `${SITE_URL}/sites/gmsangjin/slides/logo-small.png`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
