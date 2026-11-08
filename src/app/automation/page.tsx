import Image from "next/image";
import Link from "next/link";
import { PageHero, SubNav, BIZ_NAV } from "@/components/sites/gmsangjin/shared";
import { COMPANY } from "@/components/sites/gmsangjin/data";
import { pageSeo, SITE_URL } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/automation",
  title: "PLC 자동제어·전기판넬 제작·HMI 설계",
  description:
    "PLC 제어프로그램, 전기제어시스템 설계, 전기판넬·제어반 제작, HMI 화면 구성, 현장 전기공사 및 시운전. 도장설비·DACRO 자동제어 전문 지엠상진.",
  keywords: ["PLC 자동제어", "PLC 프로그램", "전기판넬 제작", "제어반 제작", "전기제어시스템", "HMI", "공장자동화", "시흥 자동제어"],
});

const services = [
  ["전기제어시스템 설계", "설비 동작 순서와 현장 조건에 맞춰 기본·상세 제어설계와 계장 구성을 정리합니다."],
  ["PLC 제어프로그램", "신규 PLC 프로그램 작성, 기존 설비 제어프로그램 수정 및 설비 증설에 따른 연동을 검토합니다."],
  ["전기판넬·제어반 제작", "PLC 판넬과 컨트롤 판넬의 전장 설계, 기기 배치, 배선 및 계장 제작을 진행합니다."],
  ["HMI·현장 전기공사·시운전", "HMI 화면 구성, 설비 인터록 연동, 현장 배선과 설치 및 시운전을 지원합니다."],
];

const steps = [
  ["01", "요구사항 검토", "설비 종류, PLC 기종, 제어 대상과 동작 순서 확인"],
  ["02", "제어설계", "기기 구성, 제어반과 계장 사양 검토"],
  ["03", "제작·프로그램", "PLC 프로그램·HMI 구성과 전기판넬 제작"],
  ["04", "설치·시운전", "현장 전기공사, 설비 연동, 동작 점검 및 조정"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/automation/#service`,
  name: "PLC 자동제어 및 전기판넬 제작",
  serviceType: "PLC 제어프로그램·전기제어시스템 설계·HMI·전기판넬 제작",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/automation`,
  areaServed: { "@type": "Country", name: "대한민국" },
};

export default function AutomationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero title="PLC 자동제어·전기판넬 제작" en="PLC / HMI / CONTROL PANEL" />
      <SubNav current="/automation" items={BIZ_NAV} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold   text-blue-700">Industrial Automation</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">PLC 프로그램부터 제어반 제작·현장 시운전까지</h2>
            <p className="mt-5 text-sm leading-8 text-neutral-700">
              {COMPANY.name}은 자동제어 설계, PLC 제어프로그램 작성, 전기판넬 제작, HMI 화면 구성 및 현장 전기공사를 수행합니다.
              신규 공장자동화 설비와 기존 설비의 제어시스템 수정·증설을 현장 조건에 맞춰 검토하며,
              제어설계에서 제작·시공·시운전까지 업무를 연계합니다.
            </p>
            <p className="mt-4 text-sm leading-8 text-neutral-700">
              <Link href="/business" className="font-bold text-blue-800 underline">도장설비</Link>의 전처리·전착·도장부스·건조로와
              {" "}<Link href="/dacro" className="font-bold text-blue-800 underline">DACRO 다크로 코팅라인</Link>, 컨베이어 등
              실제 설비에 필요한 제어반·PLC·HMI를 함께 검토합니다.
            </p>
            <Link href="/references" className="mt-4 inline-block font-bold text-blue-800 underline">관련 시공실적 확인</Link>
          </div>
          <Image
            src="/sites/gmsangjin/slides/panel-2.jpg"
            alt="지엠상진 PLC 자동제어 전기판넬 제작 및 제어반 구성"
            width={900}
            height={650}
            className="w-full rounded-2xl border object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-y bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold">자동제어 서비스 분야</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map(([title, desc]) => (
              <article key={title} className="rounded-2xl border bg-white p-6">
                <h3 className="text-lg font-extrabold text-[var(--legacy-2)]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-extrabold">PLC 자동제어 제작 및 설치 절차</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map(([no, title, desc]) => (
            <li key={no} className="rounded-2xl border p-5">
              <p className="font-extrabold text-blue-700">{no}</p>
              <h3 className="mt-2 font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{desc}</p>
            </li>
          ))}
        </ol>
        <Image
          src="/sites/gmsangjin/slides/hmi-1.png"
          alt="지엠상진 자동제어 설비 HMI 화면 구성"
          width={1000}
          height={600}
          className="mt-8 w-full rounded-2xl border object-contain"
        />
      </section>

      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold">PLC·전기판넬 제작 자주 묻는 질문</h2>
          <div className="mt-6 space-y-3">
            <details className="rounded-xl border bg-white p-5">
              <summary className="cursor-pointer font-bold">PLC 제어프로그램 수정도 가능한가요?</summary>
              <p className="mt-3 text-sm leading-7">기존 제어프로그램의 수정이나 증설 연동 범위를 상담할 수 있습니다. 설비 기종과 현재 상태를 알려주세요.</p>
            </details>
            <details className="rounded-xl border bg-white p-5">
              <summary className="cursor-pointer font-bold">전기판넬 제작과 HMI 구성까지 함께 진행하나요?</summary>
              <p className="mt-3 text-sm leading-7">제어설계, 판넬·계장 제작, PLC와 HMI 화면 구성, 현장 전기공사 및 시운전을 연계해 검토합니다.</p>
            </details>
            <details className="rounded-xl border bg-white p-5">
              <summary className="cursor-pointer font-bold">다크로 코팅라인에도 PLC 제어를 적용하나요?</summary>
              <p className="mt-3 text-sm leading-7">DACRO 코터, 도장설비, 컨베이어 등 회사에서 취급하는 설비의 자동제어 및 연동을 검토합니다.</p>
            </details>
          </div>
          <div className="mt-8 rounded-2xl bg-[var(--legacy-2)] p-8 text-white">
            <h2 className="text-xl font-extrabold">전기제어·판넬 제작 견적문의</h2>
            <p className="mt-3 text-sm leading-7 text-blue-100">설비 사양, PLC 기종, 시공 범위와 희망 일정을 알려주세요. 대표전화 {COMPANY.mobile}</p>
            <Link href="/contact" className="mt-5 inline-block rounded-md bg-white px-5 py-3 text-sm font-bold text-[var(--legacy-2)]">상담 및 견적 문의</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
