import { pageSeo } from "@/lib/seo";
import Image from "next/image";
import { PageHero, SubNav, SectionTitle, COMPANY_NAV } from "@/components/sites/gmsangjin/shared";
import { COMPANY } from "@/components/sites/gmsangjin/data";

export const metadata = pageSeo({
  "path": "/about",
  "title": "회사현황·사업소개",
  "description": "경기도 시흥시 소재 지엠상진의 회사현황. 2015년 설립, 도장설비·DACRO 표면처리·PLC 자동제어 사업과 본사 및 공장 정보를 안내합니다."
});

export default function AboutPage() {
  return (
    <main>
      <PageHero title="회사현황" en="Company Profile" />
      <SubNav current="/about" items={COMPANY_NAV} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Company" title="회사 현황표" />
        <div className="mt-6 overflow-hidden rounded-2xl border bg-white text-sm">
          <div className="grid grid-cols-[130px_1fr] border-b sm:grid-cols-[180px_1fr]">
            <dt className="bg-[var(--legacy-3)] px-4 py-3 font-bold text-white">회사명</dt>
            <dd className="px-4 py-3 font-bold">
              {COMPANY.name} <span className="font-normal text-neutral-500">{COMPANY.en}</span>
            </dd>
          </div>
          {[
            ["대표자", COMPANY.ceo],
            ["회사 설립일", COMPANY.founded],
            ["사업 종류", COMPANY.businessType],
            [`주 소`, `본사: ${COMPANY.address} / T. ${COMPANY.tel}  F. ${COMPANY.fax} / ${COMPANY.siteArea} · ${COMPANY.buildingArea}`],
            ["자본금", COMPANY.capital],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[130px_1fr] border-b last:border-0 sm:grid-cols-[180px_1fr]">
              <dt className="bg-neutral-100 px-4 py-3 font-bold">{k}</dt>
              <dd className="px-4 py-3 text-neutral-700">{v}</dd>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border">
          <Image
            src="/sites/gmsangjin/slides/toc-plant.jpg"
            alt="도장 플랜트 전체 조감도"
            width={1000}
            height={600}
            className="w-full object-cover"
          />
          <p className="border-t bg-neutral-50 py-3 text-center text-sm font-bold">
            PLANT LAY-OUT 조감도
          </p>
        </div>
      </section>
    </main>
  );
}
