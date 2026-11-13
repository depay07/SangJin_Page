import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cable, CircuitBoard, Gauge, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/components/sites/gmsangjin/data";
import { BIZ_NAV, SubNav } from "@/components/sites/gmsangjin/shared";
import { pageSeo, SITE_URL } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/electrical-instrumentation",
  title: "전기·계장공사 | 산업플랜트 전기공사·계장설치·케이블 포설",
  description: "지엠상진 전기·계장공사 사업 안내. 산업용 도장설비와 DACRO 코팅라인의 전기배선, 케이블 포설, 계측기·센서 설치, 계장배관 및 PLC 연동, I/O 점검과 Loop Check, 현장 시운전.",
  keywords: ["전기 계장공사", "전기계장공사", "산업플랜트 전기공사", "설비 전기공사", "계장설치", "계장배선", "케이블 포설", "케이블 트레이", "계장배관", "Loop Check", "I/O 체크", "시흥 전기계장", "전기제어반 설치"],
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/electrical-instrumentation/#service`,
  name: "산업설비 전기·계장공사",
  serviceType: "산업용 전기공사 및 계장설비 설치·시운전",
  description: "산업용 도장라인과 DACRO 표면처리 설비의 전기·계장 시공, 전력 및 제어 케이블 포설, 계측기 배선과 PLC 연동 시운전",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/electrical-instrumentation`,
  areaServed: { "@type": "Country", name: "대한민국" },
};

const scopes = [
  { no: "01", english: "ELECTRICAL INSTALLATION", name: "산업설비 전기공사", desc: "생산설비 및 제어반에 필요한 전원·동력·제어 배선을 공정 구성과 현장 설치 조건에 맞춰 검토합니다.", items: ["설비 전원·동력 배선", "제어반 설치 및 현장 결선", "설비 교체·증설 시 배선 연동"] },
  { no: "02", english: "CABLE & TRAY", name: "케이블 포설 · 배선", desc: "전력·제어·신호 케이블의 경로를 검토하고 케이블 트레이, 전선관, 케이블 포설과 단말 결선을 연계합니다.", items: ["전력·제어·계장 케이블", "케이블 트레이·전선관", "현장 단자 접속·회로 확인"] },
  { no: "03", english: "FIELD INSTRUMENTATION", name: "계장설비 · 계측기 설치", desc: "온도, 압력, 유량, 레벨 등의 공정 계측 신호를 제어시스템과 연계하기 위한 설치 및 배선 범위를 검토합니다.", items: ["공정 센서·계측기 배선", "계장배관·설치 범위 협의", "아날로그·디지털 신호 연결"] },
  { no: "04", english: "PANEL & CONTROL", name: "제어반 · 계장반 연동", desc: "PLC 제어반·HMI·현장 계장기기 간 신호를 연결하고 설비별 제어 요구사항과 인터록 조건을 검토합니다.", items: ["PLC·HMI 연결", "현장 제어반·계장반", "도장·표면처리 설비 인터록"] },
  { no: "05", english: "COMMISSIONING", name: "I/O 점검 · Loop Check", desc: "결선 후 신호 입·출력과 계측 신호 전달 상태를 확인하고 설비 시운전에 필요한 기능 점검을 지원합니다.", items: ["I/O 신호 확인", "계장 Loop Check", "설비 연동·시운전 점검"] },
  { no: "06", english: "RETROFIT & EXPANSION", name: "기존 라인 개조 · 증설", desc: "운영 중인 도장설비·DACRO 라인의 전기·계장 배선 개선과 계측기·제어반 추가 연동 범위를 상담합니다.", items: ["라인 증설·이설", "기존 배선·계장 변경", "PLC 제어 프로그램 수정 연계"] },
];

const workflow = [
  { no: "01", title: "현장 조건 확인", detail: "설비 목록, 도면, 전원 및 계장 신호 구성 검토" },
  { no: "02", title: "공사 범위 협의", detail: "배선 경로·기기·공정 일정 및 작업 범위 확인" },
  { no: "03", title: "현장 설치 · 결선", detail: "제어반, 케이블 및 계장기기 설치·연결" },
  { no: "04", title: "점검 · 시운전", detail: "I/O 확인, Loop Check 및 설비 연동 점검" },
];

const questions = [
  { q: "PLC 자동제어와 전기·계장공사는 무엇이 다른가요?", a: "PLC 자동제어는 제어 프로그램과 HMI·제어반 설계에 중점을 두고, 전기·계장공사는 현장의 케이블 포설, 계측기 설치·결선, 신호 점검과 같은 시공 업무에 중점을 둡니다. 설비 특성에 따라 연계하여 검토할 수 있습니다." },
  { q: "도장설비 및 DACRO 코팅라인의 전기공사도 상담 가능한가요?", a: "전처리·전착·도장부스·건조로, DIP/SPIN/TILTI 코터, 펌프와 팬 등 설비의 전원·동력·제어·계장 신호 연동 범위를 상담할 수 있습니다. 구체적인 시공 범위는 현장 조건과 관련 자격 요건을 확인해 정합니다." },
  { q: "기존 설비의 계장 배선 변경이나 Loop Check도 가능한가요?", a: "기존 계측기 교체, 신호 배선 변경, PLC I/O 추가 및 Loop Check에 필요한 작업 범위를 설비 도면과 현장 상태를 바탕으로 검토합니다." },
  { q: "견적 요청 시 무엇을 준비하면 좋나요?", a: "설비 종류, 현장 위치, 시공 일정, 전기도면·계장도면(P&ID), I/O List, 계측기 목록 등을 알려주시면 검토에 도움이 됩니다. 자료가 없더라도 현재 상황부터 상담할 수 있습니다." },
];

export default function ElectricalInstrumentationPage() {
  return (
    <main className="ei-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="ei-hero">
        <Image src="/sites/gmsangjin/slides/panel-2.jpg" alt="지엠상진 산업설비 PLC 전기제어반 및 현장 결선" fill priority sizes="100vw" className="ei-hero__image" />
        <div className="ei-hero__overlay" aria-hidden="true" />
        <div className="sj-wrap ei-hero__content">
          <nav aria-label="현재 위치" className="ei-breadcrumb"><Link href="/">HOME</Link><span>/</span><span>BUSINESS</span><span>/</span><strong>전기·계장공사</strong></nav>
          <p className="ei-hero__eyebrow">ELECTRICAL & INSTRUMENTATION</p>
          <h1>전기·계장공사</h1>
          <p className="ei-hero__lead">생산설비의 전원부터 공정 계측 신호까지,<br />현장을 연결하는 전기·계장 엔지니어링.</p>
          <Link href="/contact" className="ei-hero__link">시공·기술 문의 <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <SubNav current="/electrical-instrumentation" items={BIZ_NAV} />

      <section className="ei-section ei-intro">
        <div className="sj-wrap ei-intro__grid">
          <div>
            <p className="ei-kicker">ELECTRICAL · INSTRUMENTATION</p>
            <h2>설비의 가동을 완성하는<br /><span>전기·계장 시공</span></h2>
          </div>
          <div className="ei-intro__copy">
            <p className="ei-intro__lead">기계설비가 제 역할을 하기 위해서는 전원, 제어신호, 계측 데이터가 정확하게 연결되어야 합니다.</p>
            <p>{COMPANY.name}은 도장설비와 DACRO 표면처리라인, PLC 자동제어 사업에 축적된 공정 이해를 바탕으로 전기배선과 계장설치, 제어반 연동 및 현장 시운전 범위를 함께 검토합니다.</p>
            <p>신규 라인 구축뿐 아니라 기존 설비의 배선 변경·계장기기 추가·제어시스템 증설도 현장 조건에 맞춰 상담할 수 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="ei-section ei-services">
        <div className="sj-wrap">
          <div className="ei-heading"><div><p className="ei-kicker">OUR SERVICES</p><h2>전기·계장공사 사업 영역</h2></div><p>현장 설치에서 제어시스템 연동까지 주요 업무를 분야별로 안내합니다.</p></div>
          <div className="ei-services__grid">
            {scopes.map(service => (
              <article key={service.no} className="ei-service">
                <div className="ei-service__head"><span>{service.no}</span><ArrowUpRight size={22} aria-hidden="true" /></div>
                <p className="ei-service__en">{service.english}</p>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <ul>{service.items.map(item => <li key={item}><CheckCircle2 size={15} aria-hidden="true" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ei-application">
        <div className="ei-application__photo"><Image src="/sites/gmsangjin/slides/coaterline-2.jpg" alt="다크로 코팅설비 및 산업용 생산라인 현장" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="ei-application__body">
          <p className="ei-kicker">PLANT INTEGRATION</p>
          <h2>도장·표면처리 플랜트와<br />전기·계장 기술의 연결</h2>
          <p>도장라인은 온도·압력·유량·레벨 등의 공정 계측과 펌프·팬·컨베이어의 동력 및 제어 연동이 중요합니다. 현장 계측 신호를 PLC와 HMI로 연결하고 정상 동작 여부를 확인하는 과정까지 검토합니다.</p>
          <div className="ei-application__features">
            <div><Gauge size={25} aria-hidden="true" /><span>온도 · 압력 · 유량 · 레벨 계측</span></div>
            <div><Cable size={25} aria-hidden="true" /><span>전원 · 동력 · 제어 케이블</span></div>
            <div><CircuitBoard size={25} aria-hidden="true" /><span>PLC · HMI · 인터록 연동</span></div>
          </div>
          <Link href="/automation" className="ei-application__link">PLC 자동제어 사업 보기 <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="ei-section ei-process">
        <div className="sj-wrap">
          <div className="ei-heading"><div><p className="ei-kicker">WORK PROCESS</p><h2>전기·계장공사 진행 절차</h2></div><p>설비의 시공 범위와 현장 조건을 먼저 확인하고 작업을 진행합니다.</p></div>
          <ol className="ei-process__list">{workflow.map(step => <li key={step.no}><span>{step.no}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
        </div>
      </section>

      <section className="ei-section ei-faq">
        <div className="sj-wrap ei-faq__grid">
          <div><p className="ei-kicker">FREQUENTLY ASKED QUESTIONS</p><h2>전기·계장공사<br />자주 묻는 질문</h2><p>공정 자동제어와 현장 전기·계장 시공의 범위를 확인해 보세요.</p></div>
          <div className="ei-faq__questions">{questions.map((entry,i) => <details key={entry.q}><summary><span>0{i+1}</span>{entry.q}<span aria-hidden="true">+</span></summary><p>{entry.a}</p></details>)}</div>
        </div>
      </section>

      <section className="ei-cta">
        <div className="sj-wrap ei-cta__inner">
          <div><p className="ei-kicker">PROJECT INQUIRY</p><h2>전기·계장 시공이 필요하신가요?</h2><p>현장 위치, 설비 종류, 전기·계장 작업 범위와 희망 일정을 알려주세요.</p></div>
          <div><a href={"tel:" + COMPANY.mobile.replaceAll("-", "")}>{COMPANY.mobile}</a><Link href="/contact">견적 및 기술 문의 <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  );
}
