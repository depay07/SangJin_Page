import { pageSeo } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/components/sites/gmsangjin/data";
import { COMPANY_NAV, BIZ_NAV } from "@/components/sites/gmsangjin/shared";

export const metadata = pageSeo({
  path: "/",
  title: "도장설비·DACRO·PLC 자동제어·전기판넬 제작",
  description: "시흥 지엠상진. 도장설비·DACRO 다크로 표면처리 설비·PLC 자동제어·HMI·전기판넬 제작 및 전기공사와 시운전까지 종합 시공.",
  keywords: ["도장설비","다크로","DACRO","전기판넬 제작","PLC 자동제어","공장자동화"],
});

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
    title: "PLC 자동제어",
    en: "전기판넬 · HMI",
    img: "/sites/gmsangjin/slides/panel-2.jpg",
    href: "/automation",
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
    <main className="home-page">
      {/* Hero */}
      <section className="home-hero relative overflow-hidden bg-[var(--legacy-1)] text-white">
        <Image
          src="/sites/gmsangjin/slides/coaterline-1.jpg"
          alt="지엠상진 도장 라인 현장"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--legacy-1)]/70 via-[var(--legacy-1)]/50 to-[var(--legacy-1)]/95" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
          <p className="text-center text-xs font-bold   text-blue-200">
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
              className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[var(--legacy-2)] hover:bg-blue-50"
            >
              회사소개
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-bold hover:bg-white/10"
            >
              견적 문의 {COMPANY.mobile}
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
                className="aspect-[16/10] w-full object-cover transition-colors "
              />
              <div className="p-5">
                <p className="text-xs font-bold text-blue-700">{p.en}</p>
                <p className="mt-1 text-xl font-extrabold">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 전기제어 소개 (SEO) */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <p className="text-xs font-bold   text-blue-700">
          Electric control systems
        </p>
        <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
          전기제어시스템부터 전기공사까지 한 번에
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-600">
          지엠상진은 전기제어 전문 기업으로, 제어시스템 기본·상세 설계, PLC
          제어프로그램 작성, 전기판넬제작(HMI·계장제작 포함), 현장 전기공사와
          시운전을 일괄 수행합니다. <Link href="/automation" className="font-bold text-blue-800 underline">PLC 자동제어·전기판넬 제작 서비스</Link>에서 자세한 작업 범위를 확인할 수 있습니다. 도장설비(전처리·전착·도장부스·건조로·급배기),
          DACRO 표면처리(SPIN·DIP·TILTI 코터), 공장자동화(FA) 라인까지
          기계·전기 통합 턴키로 맡기실 수 있습니다. 자동차 부품·전자제품
          도장라인을 국내는 물론 중국·폴란드·일본·베트남·미국·인도·브라질에
          시공한 실적을 <Link href="/references" className="font-bold text-blue-800 underline">시공실적</Link>에서
          확인하세요.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-neutral-600">
          {["전기제어", "전기제어시스템", "제어시스템", "전기판넬제작", "PLC", "제어프로그램", "전기공사", "자동제어", "공장자동화", "HMI", "도장설비", "DACRO"].map((k) => (
            <span key={k} className="rounded-full border px-3 py-1.5">{k}</span>
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

      {/* 자주 묻는 질문 (SEO) */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-extrabold">전기제어·도장설비 자주 묻는 질문</h2>
        <div className="mt-5 space-y-3">
          {[
            {
              q: "전기제어시스템 설계부터 시공까지 가능한가요?",
              a: "가능합니다. 제어시스템 기본·상세 설계, PLC 제어프로그램, 계장제작, 전기판넬제작, 현장 전기공사와 시운전을 자동제어 사업부에서 일괄 수행합니다.",
            },
            {
              q: "전기판넬제작(PLC 판넬, HMI 포함) 주문제작이 되나요?",
              a: "됩니다. 컨트롤 판넬 구성과 HMI 화면 구성까지 주문사양에 맞춰 제작하며, 기존 설비의 판넬 교체·증설도 수행합니다.",
            },
            {
              q: "PLC 제어프로그램 수정이나 유지보수도 하나요?",
              a: "합니다. 프로그램 신규 작성은 물론 기존 제어프로그램 수정, 신속한 A/S와 자율적 순회점검으로 사후 관리까지 지원합니다.",
            },
            {
              q: "도장설비 전기공사는 어디까지 포함되나요?",
              a: "전처리·전착·도장부스·건조로·급기·배기(환경) 설비의 전기제어와 기계설치를 포함한 턴키 시공이 가능합니다. 사업분야 페이지에서 설비별 구성을 확인하세요.",
            },
            {
              q: "견적 문의는 어떻게 하나요?",
              a: `대표전화 ${COMPANY.mobile} 또는 고객문의 페이지에서 설비 종류·물량·희망 일정을 남겨주세요. 본사는 ${COMPANY.address}에 있습니다.`,
            },
          ].map((f) => (
            <details key={f.q} className="rounded-xl border bg-white px-5 py-4">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-2 text-sm leading-7 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--legacy-2)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold">신규 설비계획이 있으신가요?</h2>
          <p className="text-sm text-blue-100">
            본사 {COMPANY.address} / 대표전화 {COMPANY.mobile} / T. {COMPANY.tel} · F. {COMPANY.fax}
          </p>
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[var(--legacy-2)] hover:bg-blue-50"
          >
            고객문의
          </Link>
        </div>
      </section>
    </main>
  );
}
