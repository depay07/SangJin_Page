import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/contact",
  title: "도장설비·PLC 자동제어 견적문의",
  description:
    "지엠상진 도장설비·DACRO·PLC 자동제어·전기판넬 제작·전기공사 상담 및 견적문의. 경기도 시흥시 본사 대표전화 010-8228-4252.",
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
