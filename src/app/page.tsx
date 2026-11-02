import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/components/sites/gmsangjin/data";
import { COMPANY_NAV, BIZ_NAV } from "@/components/sites/gmsangjin/shared";

const PILLARS = [
  {
    title: "DACRO 설비",
    en: "SPIN · DIP · TILTI",
    img: "/sites/gmsangjin/slides/coater-1.jpg",
    href: "/dacro",
  },
  {
    title: "도장 설비",
    en: "액체 · 분체 · 전착 · 전처리",
    img: "/sites/gmsangjin/slides/booth-1.jpg",
    href: "/business",
  },
  {
    title: "자동제어",
    en: "판넬 · HMI",
    img: "/sites/gmsangjin/slides/panel-2.jpg",
    href: "/business",
  },
];

const SITEMAP = [
  ...COMPANY_NAV,
  ...BIZ_NAV,
  { label: "시공실적", href: "/references" },
  { label: "고객문의", href: "/contact" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b214f] text-white">
        <Image
          src="/sites/gmsangjin/slides/coaterline-1.jpg"
          alt="지엠상진 도장 라인 현장"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b214f]/70 via-[#0b214f]/50 to-[#0b214f]/95" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
            {COMPANY.en}
          </p>
          <h1 className="mt-3 text-center text-3xl font-extrabold leading-tight sm:text-5xl">
            도장설비 및 공장 자동화
            <br />
            전문 기업
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-blue-100 sm:text-base">
            DACRO 설비(SPIN · DIP · TILTI) / 도장설비(액체 · 분체 · 전착 · 전처리)
            / 자동제어 전문 — {COMPANY.name}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/greeting"
              className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0e2a63] hover:bg-blue-50"
            >
              회사소개
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-bold hover:bg-white/10"
            >
              견적 문의 {COMPANY.tel}
            </Link>
          </div>
        </div>
      </section>

      {/* 3대 사업 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Link key={p.title} href={p.href} className="group overflow-hidden rounded-2xl border">
              <Image
                src={p.img}
                alt={p.title}
                width={800}
                height={500}
                className="aspect-[16/10] w-full object-cover transition group-hover:scale-105"
              />
              <div className="p-5">
                <p className="text-xs font-bold text-blue-700">{p.en}</p>
                <p className="mt-1 text-xl font-extrabold">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 사이트맵 */}
      <section className="border-y bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-xl font-extrabold">바로가기</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SITEMAP.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border bg-white px-4 py-4 text-center text-sm font-bold hover:border-blue-700 hover:text-blue-800"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e2a63] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">신규 설비계획이 있으신가요?</h2>
          <p className="text-sm text-blue-100">
            본사 {COMPANY.address} / T. {COMPANY.tel} / F. {COMPANY.fax}
          </p>
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0e2a63] hover:bg-blue-50"
          >
            고객문의
          </Link>
        </div>
      </section>
    </main>
  );
}
