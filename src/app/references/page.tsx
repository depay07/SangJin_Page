import { pageSeo } from "@/lib/seo";
import { PageHero, SectionTitle } from "@/components/sites/gmsangjin/shared";
import { REFERENCES } from "@/components/sites/gmsangjin/data";

export const metadata = pageSeo({
  "path": "/references",
  "title": "도장설비·다크로·자동제어 시공실적",
  "description": "지엠상진의 도장라인, 다크로 코팅라인, 전기제어 및 공장자동화 설비 시공실적. 국내와 중국·폴란드·일본·인도·브라질 등 프로젝트."
});

const total = REFERENCES.reduce((n, g) => n + g.rows.length, 0);

export default function ReferencesPage() {
  return (
    <main>
      <PageHero title="시공실적" en="References" />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          kicker="Track record"
          title="공사 지명원 (시공 실적)"
          desc={`총 ${total}건 게재. 상기 표기 이외 다수의 공사실적 보유.`}
        />
        <div className="mt-8 space-y-10">
          {REFERENCES.map((g, gi) => (
            <section key={`${g.category}-${gi}`} className="overflow-hidden rounded-2xl border">
              <h2 className="border-b-2 border-red-700 bg-blue-50 px-5 py-3 text-base font-extrabold text-[var(--legacy-2)] sm:px-6">
                {g.category}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b bg-neutral-50 text-neutral-500">
                      <th className="px-5 py-3 font-bold sm:px-6">업 체 명</th>
                      <th className="px-5 py-3 font-bold">생 산 품 목</th>
                      <th className="w-28 px-5 py-3 font-bold">적 용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.rows.map((r, i) => (
                      <tr key={i} className="border-b last:border-0 odd:bg-white even:bg-neutral-50/60">
                        <td className="px-5 py-2.5 font-bold sm:px-6">{r.client}</td>
                        <td className="px-5 py-2.5 text-neutral-700">{r.item}</td>
                        <td className="px-5 py-2.5 font-semibold text-blue-800">{r.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
        <p className="mt-8 text-right text-sm font-bold text-neutral-500">
          상기 표기 이외 다수의 공사실적 보유
        </p>
      </section>
    </main>
  );
}
