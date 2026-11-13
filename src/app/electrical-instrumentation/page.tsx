import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/components/sites/gmsangjin/data";
import { PageHero, SubNav, SectionTitle, BIZ_NAV } from "@/components/sites/gmsangjin/shared";
import { pageSeo, SITE_URL } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/electrical-instrumentation",
  title: "전기·계장공사 | 산업설비 전기공사·계장설치",
  description:
    "지엠상진의 전기·계장공사 사업분야. 산업설비 전기배선, 케이블 포설, 케이블 트레이, 계장기기 설치·결선, PLC·HMI 연동, I/O 점검과 Loop Check 및 시운전 관련 공사 내용을 안내합니다.",
  keywords: [
    "전기계장공사",
    "전기·계장공사",
    "산업설비 전기공사",
    "계장공사",
    "계장설치",
    "계장배선",
    "전기배선공사",
    "케이블 포설",
    "케이블 트레이",
    "계장배관",
    "PLC 제어반 설치",
    "Loop Check",
    "시흥 전기계장",
  ],
});

const SERVICES = [
  {
    no: "01",
    title: "산업설비 전기공사",
    en: "ELECTRICAL INSTALLATION",
    desc: "도장설비·표면처리설비·공장자동화 라인의 전원·동력·제어 배선과 제어반 연결을 현장 설비 조건에 맞춰 검토합니다.",
    items: ["설비 전원·동력 배선", "제어반 설치·현장 결선", "설비 신설·증설 전기 연동"],
  },
  {
    no: "02",
    title: "케이블 포설·전선관",
    en: "CABLE & CONDUIT",
    desc: "전력 및 제어·계장 신호 케이블의 포설 경로를 검토하고 현장 케이블 트레이, 전선관 및 단말 결선을 연계합니다.",
    items: ["전력·제어·신호 케이블 포설", "케이블 트레이·전선관", "배선 정리 및 단말 접속"],
  },
  {
    no: "03",
    title: "계장설치·계장배선",
    en: "FIELD INSTRUMENTATION",
    desc: "온도·압력·유량·레벨 등 공정 계측기기의 설치·배선과 현장 신호 전달을 위한 계장 공사 범위를 검토합니다.",
    items: ["온도·압력·유량·레벨 계측", "센서·계측기 설치 및 배선", "계장배관 및 신호 연결"],
  },
  {
    no: "04",
    title: "PLC·HMI 제어반 연동",
    en: "CONTROL SYSTEM INTEGRATION",
    desc: "현장 계장신호와 PLC 입력·출력을 연결하고 HMI 상태 표시, 인터록 및 구동 제어 시스템과 연계합니다.",
    items: ["PLC I/O 결선", "제어반·계장반 연결", "설비 인터록·HMI 연동"],
  },
  {
    no: "05",
    title: "계장 점검·시운전",
    en: "TESTING & COMMISSIONING",
    desc: "설치 및 결선 이후 계측 신호와 제어 입·출력을 확인하고 설비 시운전에 필요한 I/O 점검과 Loop Check를 검토합니다.",
    items: ["I/O 동작·신호 점검", "계장 Loop Check", "설비 연동 및 시운전"],
  },
  {
    no: "06",
    title: "기존 설비 개조·증설",
    en: "RETROFIT & EXPANSION",
    desc: "기존 도장라인·DACRO 코팅라인의 배선 변경, 계장기기 추가, 제어반 변경 및 설비 증설에 따른 전기·계장 연동을 검토합니다.",
    items: ["설비 개조·증설 배선", "계측기 교체·추가", "PLC 제어시스템 변경 연계"],
  },
];

const PROCESS = [
  ["01", "요구사항 확인", "설비 종류, 전원·계장 사양, 현장 조건 및 시공 범위를 검토"],
  ["02", "시공계획·설계", "전기도면, 배선 경로, 계측기 및 제어반 구성을 검토"],
  ["03", "설치·배선", "현장 조건에 맞춰 케이블·계장기기·전기제어반을 설치 및 결선"],
  ["04", "신호점검·시운전", "I/O 확인, 계장 Loop Check 및 설비 동작을 점검"],
];

const FAQ = [
  {
    q: "전기·계장공사와 PLC 자동제어는 어떻게 다른가요?",
    a: "전기·계장공사는 전원·동력·제어 배선, 계측기 설치와 현장 결선 등 시공을 중심으로 하고, PLC 자동제어는 제어프로그램과 HMI·제어반 구성을 중심으로 합니다. 설비 조건에 따라 두 업무를 연계할 수 있습니다.",
  },
  {
    q: "도장설비와 DACRO 설비의 전기·계장 작업도 가능한가요?",
    a: "전처리·전착·도장부스·건조로 및 DACRO 코팅라인의 전기·계장 연동 범위를 검토할 수 있습니다. 구체적인 시공 범위는 현장 조건과 필요한 등록·자격 요건에 따라 협의합니다.",
  },
  {
    q: "기존 설비의 케이블·계장배선 변경과 Loop Check도 상담할 수 있나요?",
    a: "기존 설비의 결선 상태, 계측기 사양, PLC I/O 목록과 현장 도면을 확인해 변경·증설 및 점검 범위를 상담할 수 있습니다.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/electrical-instrumentation/#service`,
  name: "산업설비 전기·계장공사",
  description: "산업설비 전기배선·케이블 포설·계장설치·제어반 연동 및 계장 신호 점검",
  serviceType: "Electrical and Instrumentation",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "대한민국" },
  url: `${SITE_URL}/electrical-instrumentation`,
};

export default function ElectricalInstrumentationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero title="전기·계장공사" en="Electrical & Instrumentation Works" />
      <SubNav current="/electrical-instrumentation" items={BIZ_NAV} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              kicker="ELECTRICAL & INSTRUMENTATION"
              title="산업설비 전기공사부터 현장 계장설치·시운전까지"
              desc="전원·동력·제어배선과 계측기 설치, 제어반 연동으로 생산설비의 안정적인 가동을 지원하는 전기·계장공사 분야"
            />
            <p className="mt-5 text-sm leading-8 text-neutral-700">
              {COMPANY.name}은 도장라인 및 DACRO 표면처리설비, PLC 자동제어 분야의 공정 이해를 기반으로
              전기·계장공사의 설치·연동 범위를 검토합니다. 케이블 포설, 현장 계장기기 결선,
              제어반 신호 연결 및 시운전까지 설비 조건에 맞춰 상담할 수 있습니다.
            </p>
            <p className="mt-4 text-sm leading-8 text-neutral-700">
              관련 설비는 <Link href="/business" className="font-bold text-blue-800 underline">도장설비</Link> 및{" "}
              <Link href="/dacro" className="font-bold text-blue-800 underline">DACRO 코팅라인</Link>,
              제어시스템은 <Link href="/automation" className="font-bold text-blue-800 underline">PLC 자동제어</Link> 사업분야에서 확인할 수 있습니다.
            </p>
            <Link href="/contact" className="mt-5 inline-block font-bold text-blue-800 underline">전기·계장공사 견적문의</Link>
          </div>
          <Image
            src="/sites/gmsangjin/slides/panel-2.jpg"
            alt="지엠상진 산업설비 전기제어반과 현장 전장 배선"
            width={900}
            height={650}
            priority
            className="w-full rounded-2xl border object-cover"
          />
        </div>
      </section>

      <section className="border-y bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="Service"
            title="전기·계장공사 주요 업무"
            desc="기존 PLC 자동제어 사업과 구분하여 현장 전기공사 및 계장설치 업무를 안내합니다."
          />
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article key={service.no} className="rounded-2xl border bg-white p-6">
                <p className="text-sm font-extrabold text-blue-700">{service.no} / {service.en}</p>
                <h3 className="mt-3 text-xl font-extrabold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{service.desc}</p>
                <ul className="mt-4 space-y-2 border-t pt-4 text-sm text-neutral-600">
                  {service.items.map(item => <li key={item}>· {item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Work Process" title="전기·계장공사 진행 절차" />
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {PROCESS.map(([no, title, desc]) => (
            <li key={no} className="rounded-2xl border p-5">
              <p className="font-extrabold text-blue-700">{no}</p>
              <h3 className="mt-2 text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{desc}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-7 text-neutral-600">
          ※ 실제 시공 범위는 설비 조건과 전기공사업 관련 등록·자격 요건을 확인한 후 협의합니다.
        </p>
      </section>

      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold">전기·계장공사 자주 묻는 질문</h2>
          <div className="mt-6 space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="rounded-xl border bg-white p-5">
                <summary className="cursor-pointer font-bold">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[var(--legacy-2)] p-8 text-white">
            <h2 className="text-xl font-extrabold">전기·계장공사 견적 및 기술문의</h2>
            <p className="mt-3 text-sm leading-7 text-blue-100">
              현장 위치, 설비 종류, 케이블·계장기기 구성과 희망 일정을 알려주세요. 대표전화 {COMPANY.mobile}
            </p>
            <Link href="/contact" className="mt-5 inline-block rounded-md bg-white px-5 py-3 text-sm font-bold text-[var(--legacy-2)]">상담 및 견적 문의</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
