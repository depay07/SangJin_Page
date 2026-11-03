import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SubNav, SectionTitle, BIZ_NAV } from "@/components/sites/gmsangjin/shared";
import { PAINT_EQUIPMENT, BUSINESS_TREE } from "@/components/sites/gmsangjin/data";

export const metadata: Metadata = {
  title: "도장설비 | 전처리·도장부스·건조로·전기제어 턴키 (PLC·HMI)",
  description:
    "도장설비 전문: 전처리·전착·도장부스(액체·분체)·건조로·급배기 설비의 전기제어시스템(PLC·HMI·전기판넬제작·전기공사) 턴키 시공. 지엠상진.",
};

export default function BusinessPage() {
  return (
    <main>
      <PageHero title="도장설비" en="Paint Finishing Plant" />
      <SubNav current="/business" items={BIZ_NAV} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          kicker="Map"
          title="도장설비 계통"
          desc="전처리 · 전착 · PAINT BOOTH · 건조 · 환경 · CONVEYOR — 각 설비의 전기제어시스템(PLC 제어프로그램·HMI·전기판넬제작·전기공사)까지 포함한 턴키 시공"
        />
        <div className="mt-6 overflow-hidden rounded-2xl border">
          <Image
            src="/sites/gmsangjin/slides/toc-plant.jpg"
            alt="도장 플랜트 전체 조감도"
            width={1000}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {BUSINESS_TREE[0] && (
            <div className="rounded-2xl border p-5 sm:p-6">
              <p className="inline-block rounded-md bg-green-600 px-4 py-2 font-extrabold text-white">
                도장설비
              </p>
              <ul className="mt-4 space-y-3">
                {BUSINESS_TREE[0].items.map((it) => (
                  <li key={it.name} className="rounded-xl bg-neutral-50 p-4">
                    <p className="inline-block rounded bg-orange-400 px-3 py-1 text-sm font-extrabold">
                      {it.name}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {it.children.map((c) => (
                        <span key={c} className="rounded bg-blue-200/70 px-2.5 py-1 text-xs font-bold text-[#0e2a63]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-2xl bg-[#0e2a63] p-6 text-sm leading-7 text-blue-50 sm:p-8">
            <p className="font-bold text-white">전처리 공정 (금속도장 전 필수 공정)</p>
            <p className="mt-1">탕세 ▶ 탈지 ▶ 수세 ▶ 표면조정 ▶ 화성피막 ▶ 수세 ▶ 수절 — 제품 종류 및 도장 정도에 따라 세부공정 조정 (주문사양).</p>
            <p className="mt-3 font-bold text-white">건조로 분류</p>
            <p className="mt-1">목적별: 도장건조로(BAKING OVEN) / 수분건조로(DRY OFF OVEN) · 형상별: 상자형(BATCH) / 수평 터널형 · 가열별: 대류방식 / 복사방식(적외선·자외선)</p>
            <p className="mt-3 font-bold text-white">급기·배기 주요장치</p>
            <p className="mt-1">급기: 에어필터·공기가열기·공기냉각기·습도조절기·풍량제어기 / 배기: ACTIVE CARBON TOWER·WET SCRUBBER·RTO</p>
          </div>
        </div>
      </section>

      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="Equipment"
            title="도장 설비 부문"
            desc="1) 전처리 장치  2) 도장 부스  2-1) 분체 도장 설비  3) 도장 건조로  4) 급기 설비  5) 배기설비  6) 판넬 · HMI"
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAINT_EQUIPMENT.map((e) => (
              <article key={e.no} className="overflow-hidden rounded-2xl border bg-white">
                <Image
                  src={e.img}
                  alt={e.title}
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{e.en}</p>
                  <h3 className="mt-1 text-lg font-extrabold">
                    {e.no}) {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
