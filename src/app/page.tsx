import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CircuitBoard, Factory, Layers3, Wrench, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/components/sites/gmsangjin/data";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  path: "/",
  title: "도장설비·다크로·PLC 자동제어·전기계장공사",
  description: "지엠상진은 도장설비, 다크로(DACRO)·지오메트 코팅라인, PLC 자동제어와 전기·계장공사(케이블 포설·계측기 설치·시운전)를 연결하는 산업설비 전문기업입니다.",
  keywords: ["지엠상진", "도장설비", "도장라인", "다크로 설비", "DACRO 코팅라인", "지오메트", "PLC 자동제어", "전기제어반 제작", "공장자동화", "전기계장공사", "계장설치", "케이블 포설"],
});

const businesses = [
  {
    number: "01",
    eyebrow: "PAINT FINISHING SYSTEM",
    title: "도장설비",
    desc: "전처리·전착·액체도장·분체도장부터 도장부스, 건조로와 급배기 설비까지 생산공정에 맞춘 도장라인 엔지니어링.",
    tags: ["전처리 · 전착", "도장부스", "분체도장 · 건조로"],
    href: "/business",
    img: "/sites/gmsangjin/slides/cover-booth2.jpg",
    alt: "지엠상진 도장부스와 산업용 도장설비 시공 사진",
  },
  {
    number: "02",
    eyebrow: "DACRO & GEOMET COATING",
    title: "DACRO 표면처리",
    desc: "DIP·SPIN·TILTI 코터, 지오메트 코팅라인, 세척·쇼트 및 도료공급 시스템을 아우르는 표면처리 설비.",
    tags: ["DIP · SPIN", "TILTI COATER", "지오메트 코팅라인"],
    href: "/dacro",
    img: "/sites/gmsangjin/slides/coaterline-2.jpg",
    alt: "지엠상진 DACRO 다크로 코팅라인 및 SPIN 코팅설비 현장",
  },
  {
    number: "03",
    eyebrow: "INDUSTRIAL AUTOMATION",
    title: "PLC 자동제어",
    desc: "PLC 프로그램, HMI 화면, 제어반·전기판넬 설계 및 제작, 현장 전기공사와 설비 연동 시운전.",
    tags: ["PLC 프로그램", "HMI · 전기판넬", "전장 · 시운전"],
    href: "/automation",
    img: "/sites/gmsangjin/slides/panel-2.jpg",
    alt: "지엠상진 PLC 자동제어 전기판넬 및 산업용 제어반",
  },
  {
    number: "04",
    eyebrow: "ELECTRICAL & INSTRUMENTATION",
    title: "전기·계장공사",
    desc: "산업설비 전기공사, 케이블 포설, 계장기기 설치와 현장 결선, I/O 점검 및 Loop Check까지.",
    tags: ["전기공사 · 케이블", "계장설치", "현장 시운전"],
    href: "/electrical-instrumentation",
    img: "/sites/gmsangjin/slides/panel-1.jpg",
    alt: "산업용 제어반과 전기·계장 시공 연결을 위한 전장 설비 사진",
  },
];

const focus = [
  { name: "전처리 · 전착 라인", copy: "탕세, 탈지, 수세, 화성피막 공정과 전착 도장라인의 설비 구성", href: "/business" },
  { name: "액체 · 분체 도장", copy: "도장부스, 분체 도장 시스템, 건조로와 공조·환경 설비", href: "/business" },
  { name: "다크로 · 지오메트", copy: "SPIN/DIP/TILTI 코터와 코팅라인, 쇼트·세척 및 도료 공급", href: "/dacro" },
  { name: "PLC · HMI · 제어반", copy: "제어프로그램과 HMI, 제어반 설계·제작", href: "/automation" },
  { name: "전기 · 계장공사", copy: "케이블 포설, 계측기 설치, 현장 결선 및 Loop Check", href: "/electrical-instrumentation" },
];

const steps = [
  { no: "01", name: "기술 상담", desc: "생산품, 공정 조건, 설비 규모와 요구사항 확인" },
  { no: "02", name: "설계 · 검토", desc: "라인 레이아웃, 설비 구성, 제어·전장 사양 검토" },
  { no: "03", name: "제작 · 시공", desc: "기계 설비, 제어반 및 프로그램 구성과 현장 설치" },
  { no: "04", name: "시운전 · 지원", desc: "설비 연동, 가동 점검 및 운영·유지보수 상담" },
];

const faqs = [
  { q: "도장라인을 전처리부터 건조까지 일괄 시공할 수 있나요?", a: "전처리, 전착, 액체·분체 도장부스, 건조로와 급기·배기 설비를 공정 조건에 맞춰 검토합니다. 설비의 PLC 및 HMI 제어 구성도 함께 상담할 수 있습니다." },
  { q: "다크로(DACRO)와 지오메트 코팅설비도 제작하나요?", a: "SPIN, DIP, TILTI 코터와 코팅라인, 세척·쇼트 설비 및 도료 공급장치(P.C.S) 등 표면처리 라인 구성을 다룹니다." },
  { q: "기존 PLC 프로그램 수정과 전기판넬 교체도 가능한가요?", a: "기존 설비의 PLC 프로그램 수정, 자동제어반 교체, HMI 구성과 증설 연동을 현장 조건에 따라 검토합니다. 기종과 설비 현황을 알려주시면 상담에 도움이 됩니다." },
  { q: "전기·계장공사와 Loop Check도 상담할 수 있나요?", a: "산업설비의 케이블 포설, 계장기기 설치·결선, PLC I/O 확인 및 Loop Check 범위를 현장 조건과 관련 자격 요건에 따라 검토합니다." },
];

export default function Home() {
  return (
    <main className="sj-home" id="main-content">
      <section className="sj-hero" aria-labelledby="sj-hero-heading">
        <Image src="/sites/gmsangjin/slides/coaterline-1.jpg" alt="지엠상진 산업용 다크로 코팅 생산라인" fill priority sizes="100vw" className="sj-hero__photo" />
        <div className="sj-hero__shade" aria-hidden="true" />
        <div className="sj-wrap sj-hero__content">
          <div className="sj-hero__intro"><span className="sj-overline sj-overline--light"><span className="sj-line" /> GM SANGJIN ENGINEERING</span><span>INDUSTRIAL PLANT & AUTOMATION</span></div>
          <h1 id="sj-hero-heading">도장설비부터<br /><strong>PLC 자동제어까지.</strong><br />생산의 기준을 설계하다.</h1>
          <p className="sj-hero__description">도장라인 · DACRO 다크로/지오메트 코팅설비 · PLC 자동제어 · 전기·계장공사<br className="sj-desktop-only" /> 설계, 제작, 시공과 시운전까지 연결하는 산업설비 엔지니어링.</p>
          <div className="sj-hero__actions">
            <Link href="/business" className="sj-button sj-button--solid">사업분야 살펴보기 <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/contact" className="sj-button sj-button--outline">프로젝트 상담 <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="sj-wrap sj-hero__bottom">
          <p>PRECISION IN EVERY PROCESS.</p>
          <a href="#business" aria-label="사업분야 섹션으로 이동"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={22} aria-hidden="true" /></a>
        </div>
      </section>

      <div className="sj-quick" aria-label="주요 사업 바로가기">
        <div className="sj-wrap sj-quick__grid">
          <Link href="/business"><span>01 / PAINT</span><strong>도장설비 · 도장라인</strong><ArrowUpRight size={20} aria-hidden="true" /></Link>
          <Link href="/dacro"><span>02 / SURFACE</span><strong>다크로 · 지오메트</strong><ArrowUpRight size={20} aria-hidden="true" /></Link>
          <Link href="/automation"><span>03 / CONTROL</span><strong>PLC · 전기제어반</strong><ArrowUpRight size={20} aria-hidden="true" /></Link>
          <Link href="/electrical-instrumentation"><span>04 / E&I</span><strong>전기 · 계장공사</strong><ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
      </div>

      <section className="sj-section sj-intro">
        <div className="sj-wrap sj-intro__grid">
          <div>
            <p className="sj-overline"><span className="sj-line" /> ABOUT GM SANGJIN</p>
            <h2 className="sj-section-title">현장을 이해하는 기술,<br /><span>공정을 완성하는 설계.</span></h2>
          </div>
          <div className="sj-intro__right">
            <p className="sj-intro__lead">산업설비의 안정적인 운영은 정확한 공정 이해와 견고한 제어시스템에서 시작됩니다.</p>
            <p>{COMPANY.name}은 도장설비, DACRO 표면처리, PLC 자동제어와 전기·계장공사를 중심으로 기계설비와 현장 제어를 연결합니다. 공정 검토에서 설계·제작·현장 설치·시운전에 이르는 과정을 함께 고민합니다.</p>
            <Link className="sj-text-link" href="/about">회사소개 <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="business" className="sj-section sj-business">
        <div className="sj-wrap">
          <div className="sj-section-heading">
            <div><p className="sj-overline"><span className="sj-line" /> OUR BUSINESS</p><h2 className="sj-section-title">공정에 최적화된<br /><span>산업설비 솔루션</span></h2></div>
            <p>도장 플랜트부터 표면처리 장비, 자동제어반까지.<br />네 가지 핵심 사업을 유기적으로 연결합니다.</p>
          </div>
          <div className="sj-business__grid">
            {businesses.map((item) => (
              <Link key={item.number} href={item.href} className="sj-business-card">
                <div className="sj-business-card__visual"><Image src={item.img} alt={item.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1150px) 50vw, 25vw" className="sj-business-card__image" /><span className="sj-business-card__num">{item.number}</span><span className="sj-business-card__arrow"><ArrowUpRight size={23} aria-hidden="true" /></span></div>
                <div className="sj-business-card__body"><span className="sj-eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.desc}</p><div className="sj-business-card__tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-feature">
        <div className="sj-feature__photo"><Image src="/sites/gmsangjin/slides/robot-1.jpg" alt="지엠상진 산업용 로봇 캐리어 및 자동화 코팅설비" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
        <div className="sj-feature__copy">
          <p className="sj-overline sj-overline--light"><span className="sj-line" /> ENGINEERING CAPABILITY</p>
          <h2>하나의 라인,<br />하나로 연결되는 기술.</h2>
          <p>공정설비와 제어기술을 분리하지 않고 하나의 생산시스템으로 봅니다. 실제 현장에 필요한 설비 구성, 계장 및 전장, 프로그램 연동을 함께 검토합니다.</p>
          <ul>
            <li><Factory size={22} aria-hidden="true" /><span>산업용 도장 · 표면처리 설비</span></li>
            <li><CircuitBoard size={22} aria-hidden="true" /><span>PLC · HMI · 제어판넬</span></li>
            <li><Wrench size={22} aria-hidden="true" /><span>전기 · 계장공사 · 현장 시운전</span></li>
          </ul>
          <Link href="/electrical-instrumentation" className="sj-text-link sj-text-link--light">전기·계장공사 안내 <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="sj-section sj-solutions">
        <div className="sj-wrap">
          <div className="sj-section-heading">
            <div><p className="sj-overline"><span className="sj-line" /> SOLUTION SCOPE</p><h2 className="sj-section-title">공정별 사업 영역</h2></div>
            <p>필요한 공정을 선택해 적용 가능한 설비와 제어 범위를 확인하세요.</p>
          </div>
          <div className="sj-solutions__grid">{focus.map((item, index) => <Link href={item.href} key={item.name} className="sj-solution"><span className="sj-solution__num">0{index+1}</span><div><h3>{item.name}</h3><p>{item.copy}</p></div><ArrowUpRight size={24} aria-hidden="true" /></Link>)}</div>
        </div>
      </section>

      <section className="sj-project">
        <div className="sj-wrap sj-project__grid">
          <div className="sj-project__copy">
            <p className="sj-overline sj-overline--light"><span className="sj-line" /> PROJECT REFERENCES</p>
            <h2>설계도 위의 계획을<br />현장의 결과로.</h2>
            <p>자동차 부품 도장라인, 다크로 코팅설비와 전기 자동제어에 이르기까지 다양한 산업 현장의 시공실적을 확인할 수 있습니다.</p>
            <p className="sj-project__places">국내 · 중국 · 일본 · 폴란드 · 베트남 · 미국 · 인도</p>
            <Link href="/references" className="sj-button sj-button--outline">시공실적 보기 <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="sj-project__figure"><Image src="/sites/gmsangjin/slides/coaterline-3.jpg" alt="지엠상진 코팅라인 시공 현장 및 공장 설비" fill sizes="(max-width: 900px) 100vw, 50vw" /><span>INDUSTRIAL PROJECT / COATING LINE</span></div>
        </div>
      </section>

      <section className="sj-section sj-process">
        <div className="sj-wrap">
          <div className="sj-section-heading"><div><p className="sj-overline"><span className="sj-line" /> WORK PROCESS</p><h2 className="sj-section-title">상담부터 시운전까지</h2></div><p>설비 계획의 초기 단계부터 제작·설치 이후까지 이어지는 업무 흐름.</p></div>
          <ol className="sj-process__grid">{steps.map(s => <li key={s.no}><span>{s.no}</span><Layers3 size={27} aria-hidden="true" /><h3>{s.name}</h3><p>{s.desc}</p></li>)}</ol>
          <div className="sj-process__footer"><p><CheckCircle2 size={21} aria-hidden="true" /> 기존 생산라인 개조, 제어반 교체, 설비 증설도 상담 가능</p><Link href="/contact" className="sj-text-link">견적 및 기술문의 <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="sj-section sj-faq">
        <div className="sj-wrap sj-faq__grid">
          <div><p className="sj-overline"><span className="sj-line" /> FAQ</p><h2 className="sj-section-title">자주 묻는 질문</h2><p className="sj-faq__intro">도장설비, DACRO 코팅라인 및 PLC 자동제어에 관해 많이 궁금해하시는 내용을 정리했습니다.</p></div>
          <div>{faqs.map((item,i) => <details key={item.q} className="sj-faq__item"><summary><span>0{i+1}</span>{item.q}<span className="sj-faq__plus" aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className="sj-contact-cta">
        <div className="sj-wrap sj-contact-cta__inner">
          <div><p className="sj-overline sj-overline--light"><span className="sj-line" /> LET'S BUILD YOUR NEXT LINE</p><h2>새로운 생산라인을<br />계획하고 계신가요?</h2><p>설비 종류, 생산 조건, 현장 상황을 알려주시면 프로젝트 범위를 함께 검토합니다.</p></div>
          <div className="sj-contact-cta__actions"><a href={`tel:${COMPANY.mobile.replaceAll("-", "")}`} className="sj-contact-cta__phone">{COMPANY.mobile}</a><Link href="/contact" className="sj-button sj-button--solid">프로젝트 문의하기 <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  );
}
