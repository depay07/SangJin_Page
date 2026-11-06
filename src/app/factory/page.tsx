import { pageSeo } from "@/lib/seo";
import Image from "next/image";
import { PageHero, SubNav, SectionTitle, COMPANY_NAV } from "@/components/sites/gmsangjin/shared";
import { COMPANY } from "@/components/sites/gmsangjin/data";

export const metadata = pageSeo({
  "path": "/factory",
  "title": "공장 및 장비·시흥 전기판넬 제작",
  "description": "경기도 시흥시 정왕동 지엠상진 본사 공장. 전기판넬 제작과 도장설비·DACRO 표면처리 설비 제작·설치에 관한 시설 안내."
});

export default function FactoryPage() {
  return (
    <main>
      <PageHero title="공장 및 장비" en="Factory" />
      <SubNav current="/factory" items={COMPANY_NAV} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          kicker="Factory"
          title="공장 및 장비"
          desc={`시흥 본사 — ${COMPANY.siteArea} · ${COMPANY.buildingArea}`}
        />
        <div className="mt-6 overflow-hidden rounded-2xl border">
          <Image
            src="/sites/gmsangjin/slides/factory-building.jpg"
            alt="시흥 본사 전경"
            width={1400}
            height={900}
            className="w-full object-cover"
          />
          <p className="border-t bg-neutral-50 py-3 text-center text-sm font-bold">
            시흥 본사 전경 — 본사: {COMPANY.address} / T. {COMPANY.tel} · F. {COMPANY.fax}
          </p>
        </div>
      </section>
    </main>
  );
}
