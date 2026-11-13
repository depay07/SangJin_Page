import type { Metadata } from "next";
import "./globals.css";
import "./corporate.css";
import { SiteHeader } from "@/components/sites/gmsangjin/Header";
import { SiteFooter } from "@/components/sites/gmsangjin/Footer";
import { COMPANY } from "@/components/sites/gmsangjin/data";

const SITE_URL = "https://sangjin-fa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "지엠상진 | 도장설비·다크로 코팅라인·PLC 자동제어",
    template: "%s | 지엠상진",
  },
  description:
    "지엠상진은 도장설비·도장라인, DACRO(다크로)·지오메트 코팅설비, PLC 자동제어, HMI 및 전기제어반 설계·제작·시공·시운전을 수행하는 시흥 소재 산업설비 전문기업입니다.",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "지엠상진",
    url: SITE_URL,
    title: "지엠상진 | 도장설비·다크로 코팅라인·PLC 자동제어",
    description:
      "산업용 도장설비, DACRO 지오메트 코팅라인, PLC·HMI 전기제어반 제작 및 시공. GM SANGJIN ENGINEERING & ELECTRIC.",
    images: [{ url: "/sites/gmsangjin/slides/coaterline-1.jpg", width: 1200, height: 630, alt: "지엠상진 산업용 코팅설비" }],
  },
  twitter: { card: "summary_large_image", images: ["/sites/gmsangjin/slides/coaterline-1.jpg"] },
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
    knowsAbout: ["산업용 도장설비", "액체도장·분체도장", "전처리·전착", "DACRO 다크로 코팅라인", "지오메트 코팅", "PLC 자동제어", "HMI", "전기제어반 제작"],
    "@id": `${SITE_URL}/#organization`,
    url: SITE_URL,
    contactPoint: [{ "@type": "ContactPoint", telephone: COMPANY.tel, contactType: "sales", areaServed: "KR", availableLanguage: ["ko"] }],
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
