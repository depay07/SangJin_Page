import type { Metadata } from "next";

export const SITE_URL = "https://sangjin-fa.com";
const SHARE_IMAGE = "/sites/gmsangjin/slides/coaterline-1.jpg";

export function pageSeo({
  path,
  title,
  description,
  keywords,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "지엠상진",
      url,
      title: `${title} | 지엠상진`,
      description,
      images: [{ url: SHARE_IMAGE, alt: "지엠상진 도장설비 시공 현장" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | 지엠상진`,
      description,
      images: [SHARE_IMAGE],
    },
  };
}
