import { PageHero, SubNav, SectionTitle, COMPANY_NAV } from "@/components/sites/gmsangjin/shared";
import { VISION_KEYWORDS, VISION_GOALS } from "@/components/sites/gmsangjin/data";

export default function VisionPage() {
  return (
    <main>
      <PageHero title="경영 비전" en="Vision" />
      <SubNav current="/vision" items={COMPANY_NAV} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Vision" title="경영 비전 및 사업목표" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {VISION_KEYWORDS.map((v) => (
            <div key={v} className="rounded-2xl bg-[#0e2a63] p-8 text-center text-xl font-extrabold text-white">
              {v}
            </div>
          ))}
        </div>
        <ol className="mt-6 list-decimal space-y-2 rounded-2xl border-2 border-red-700 p-6 pl-10 text-[15px] font-bold text-[#0e2a63] sm:p-8 sm:pl-12">
          {VISION_GOALS.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
