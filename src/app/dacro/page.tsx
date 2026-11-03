import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SubNav, SectionTitle, BIZ_NAV } from "@/components/sites/gmsangjin/shared";
import { DACRO_EQUIPMENT } from "@/components/sites/gmsangjin/data";

export const metadata: Metadata = {
  title: "DACRO 표면처리 | SPIN·DIP·TILTI 코터·자동라인·제어시스템",
  description:
    "DACRO(다크로) 설비 전문: SPIN·DIP·TILTI 코터, 지오메트 자동라인, ROBOT CARRIER, 도료공급·세척·쇼트와 PLC 제어시스템·HMI·전기판넬 일괄 시공.",
};

const EXTRA = [
  { title: "COATER LINE 현장", img: "/sites/gmsangjin/slides/coaterline-3.jpg" },
  { title: "COATER LINE 현장", img: "/sites/gmsangjin/slides/coaterline-4.jpg" },
  { title: "ROBOT CARRIER", img: "/sites/gmsangjin/slides/robot-1.jpg" },
  { title: "도료 공급 ROOM (P.C.S)", img: "/sites/gmsangjin/slides/pcs-room.jpg" },
  { title: "초음파 세척 장비", img: "/sites/gmsangjin/slides/cleaning-2.jpg" },
  { title: "HMI 구성", img: "/sites/gmsangjin/slides/hmi-1.png" },
];

export default function DacroPage() {
  return (
    <main>
      <PageHero title="DACRO 표면처리" en="Dacro Plant" />
      <SubNav current="/dacro" items={BIZ_NAV} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          kicker="Dacro plant"
          title="표면처리 설비 부문"
          desc="1) COATING 장치  2) COATING LINE (지오메트 하드 자동 LINE)  3) 세척장비  4) 쇼트설비 — PLC 제어시스템·전기판넬제작·HMI·전기공사 포함"
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {DACRO_EQUIPMENT.map((e) => (
            <article key={e.no} className="overflow-hidden rounded-2xl border">
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
        <ul className="mt-6 grid gap-2 text-sm leading-7 text-neutral-700 sm:grid-cols-2">
          <li className="rounded-xl bg-neutral-50 p-4">· COATER는 SPRAY · DIP · SPIN · TILTI COATER로 분류 (TANK UP-DOWN TYPE / TILTI TYPE SPIN COATER)</li>
          <li className="rounded-xl bg-neutral-50 p-4">· COATER LINE: 지오메트 하드 코팅 LINE LAY-OUT, TILTI TYPE SPIN COATER & BAKING OVEN LINE, ROBOT CARRIER TYPE</li>
          <li className="rounded-xl bg-neutral-50 p-4">· 도료 공급 LINE(P.C.S): 지오메트 도료 연속 공급 시스템 — 도료 보관 및 공급 ROOM</li>
          <li className="rounded-xl bg-neutral-50 p-4">· 세척: 초음파 세척 장비 / 쇼트: BOLT용 표면 SHOT BLAST 장비 / 판넬·HMI 구성 포함</li>
        </ul>
      </section>
      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle kicker="Photos" title="현장 사진" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXTRA.map((p, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl border bg-white">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-center text-sm font-bold">{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
