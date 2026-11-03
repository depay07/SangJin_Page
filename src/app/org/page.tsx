import type { Metadata } from "next";
import { PageHero, SubNav, SectionTitle, COMPANY_NAV } from "@/components/sites/gmsangjin/shared";
import { ORG } from "@/components/sites/gmsangjin/data";

export const metadata: Metadata = {
  title: "조직도 | 자동제어사업부·설비사업부·관리과",
  description:
    "지엠상진 조직도. 제어설계·PLC 제어프로그램·계장제작·현장설치(자동제어), 기술영업·기계설계·제작·시운전(설비), 경리·구매(관리) 체제로 전기공사를 수행합니다.",
};

export default function OrgPage() {
  return (
    <main>
      <PageHero title="회사 조직도" en="Organization" />
      <SubNav current="/org" items={COMPANY_NAV} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Organization" title="회사 조직도" />
        <div className="mt-6 text-center">
          <p className="mx-auto inline-block rounded-md border-2 border-red-700 bg-violet-100 px-10 py-3 text-lg font-extrabold text-[#0e2a63]">
            대표 이사
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ORG.map((o) => (
            <div key={o.dept} className="rounded-2xl border bg-white p-5">
              <p className="rounded-md bg-violet-100 px-4 py-2.5 text-center font-extrabold text-[#0e2a63]">
                {o.dept}
              </p>
              <ul className="mt-3 space-y-2">
                {o.teams.map((t) => (
                  <li key={t} className="rounded-md border border-red-700/60 bg-violet-50 px-4 py-2.5 text-center text-sm font-bold">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
