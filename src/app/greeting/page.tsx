import Image from "next/image";
import { PageHero, SubNav, SectionTitle, COMPANY_NAV } from "@/components/sites/gmsangjin/shared";
import { COMPANY, GREETING } from "@/components/sites/gmsangjin/data";

export default function GreetingPage() {
  return (
    <main>
      <PageHero title="인사말" en="Greeting" />
      <SubNav current="/greeting" items={COMPANY_NAV} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Greeting" title="인사말" />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-6 sm:p-10">
            {GREETING.map((p, i) => (
              <p key={i} className="mb-4 text-[15px] leading-8 text-neutral-800 last:mb-0">
                {p}
              </p>
            ))}
            <p className="mt-6 text-right text-lg font-extrabold">
              {COMPANY.name} 임직원 일동
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border self-start">
            <Image
              src="/sites/gmsangjin/slides/cover-booth2.jpg"
              alt="도장 부스 현장"
              width={400}
              height={260}
              className="w-full object-cover"
            />
            <figcaption className="bg-neutral-50 px-4 py-3 text-center text-xs font-bold text-neutral-600">
              PAINT BOOTH 현장
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
