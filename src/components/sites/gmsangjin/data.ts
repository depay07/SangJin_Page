export const COMPANY_NAV = [
  { label: "인사말", href: "/greeting" },
  { label: "회사현황", href: "/about" },
  { label: "경영비전", href: "/vision" },
  { label: "조직도", href: "/org" },
  { label: "공장 및 장비", href: "/factory" },
];

export const BIZ_NAV = [
  { label: "도장설비", href: "/business" },
  { label: "DACRO 표면처리", href: "/dacro" },
  { label: "PLC 자동제어·판넬", href: "/automation" },
];

export const COMPANY = {
  name: "(주)지엠상진",
  en: "GM SANGJIN ENGINEERING & ELECTRIC Co., Ltd.",
  tagline: "도장설비 및 공장 자동화 전문 기업",
  ceo: "조성호",
  founded: "2015년 12월",
  businessType: "제조",
  address: "경기도 시흥시 정왕동 1416-14번지",
  tel: "031-432-8778",
  fax: "031-432-8779",
  mobile: "010-8228-4252",
  email: "gm-sangjin@naver.com",
  siteArea: "대지 326㎡",
  buildingArea: "건물 438㎡(4층)",
  capital: "2억",
};

export const PILLARS = [
  {
    title: "DACRO 설비",
    en: "SPIN · DIP · TILTI",
    desc: "SPIN / DIP / TILTI 코터, 지오메트 하드 자동 LINE, ROBOT CARRIER, 도료 공급(P.C.S), 세척·쇼트 설비",
  },
  {
    title: "도장 설비",
    en: "액체 · 분체 · 전착 · 전처리",
    desc: "전처리(P.T), 전착(E.D), PAINT BOOTH, 건조로, 급기·배기(환경) 설비까지 턴키 공급",
  },
  {
    title: "자동제어 전문",
    en: "PLC · HMI · PANEL",
    desc: "제어설계·프로그램·계장제작·현장설치, 컨트롤 판넬과 HMI 구성",
  },
];

export const GREETING = [
  "금번 귀사의 신규 설비계획에 저희 업체가 그 일원으로 참여하여 소개 드리게 된 것을 무한한 영광으로 생각 합니다.",
  "저희 지엠상진은 2015년 창사이래 자동제어 관련 업체로 시작해서 도장설비에 이르기까지 20여 년간을 높은 신뢰성과 선진기술 확보를 위하여 꾸준히 개발하는데 노력 하고 있습니다.",
  "또한 신속한 A/S 및 고객의 불편 사항을 즉시 해결하기 위해 전 직원이 노력하는 것으로 고객으로 부터 높은 신뢰와 기술을 인정받고 있습니다. 아울러 폐사는 현장에서 발생하는 모든 문제들을 일일이 기록하고 개발하여 지속적인 양질의 제품이 생산될 수 있도록 관리와 기술을 보급하여 국내, 외 산업발전에 기여 하고자 계속 노력할 것 입니다.",
  "귀사의 지속적인 관심과 성원에 부흥 하도록 최선을 다 할 것을 진심으로 약속 드립니다.",
];

export const VISION_KEYWORDS = ["신뢰성 확보", "인력 양성", "기술 혁신"];

export const VISION_GOALS = [
  "글로벌 네트워크 구성",
  "신기술 개발",
  "고용 안정화",
  "고객관리 네트워킹",
  "자율적 순회점검",
];

export const ORG = [
  { dept: "관리과", teams: ["경리", "구매"] },
  {
    dept: "자동제어 사업부",
    teams: ["제어설계", "프로그램", "계장제작", "현장설치"],
  },
  {
    dept: "설비 사업부",
    teams: ["기술영업", "기계설계", "기계제작", "설치시운전"],
  },
];

export const PAINT_EQUIPMENT = [
  {
    no: "1",
    title: "전처리 장치",
    en: "PRE-TREATMENT EQUIPMENT",
    desc: "탕세 ▶ 탈지 ▶ 수세 ▶ 표면조정 ▶ 화성피막 ▶ 수세 ▶ 수절 공정. 연속 SPRAY 방식과 DIP 방식.",
    img: "/sites/gmsangjin/slides/pretreatment-1.jpg",
  },
  {
    no: "2",
    title: "도장 부스",
    en: "PAINT BOOTH",
    desc: "비산 도료·인화/폭발 방지를 위한 배기 장치, 필요시 급기 장치. 습식 도장실과 건식 도장실로 분류.",
    img: "/sites/gmsangjin/slides/booth-1.jpg",
  },
  {
    no: "2-1",
    title: "분체 도장 설비",
    en: "POWDER PAINTING",
    desc: "정전 분체 도장. 분체 도료 회수방식과 색상교체에 따른 SYSTEM 구성 가능.",
    img: "/sites/gmsangjin/slides/powder-1.jpg",
  },
  {
    no: "3",
    title: "도장 건조로",
    en: "BAKING OVEN",
    desc: "도장건조로/수분건조로, 상자형(BATCH)/수평 터널형, 대류방식/복사방식(적외선·자외선).",
    img: "/sites/gmsangjin/slides/oven-4.jpg",
  },
  {
    no: "4",
    title: "급기 설비",
    en: "AIR HANDLING UNIT",
    desc: "에어필터, 공기가열기, 공기냉각기, 습도조절기, 풍량 제어기.",
    img: "/sites/gmsangjin/slides/ahu-2.jpg",
  },
  {
    no: "5",
    title: "배기 설비",
    en: "환경설비",
    desc: "활성탄 집진기(ACTIVE CARBON TOWER), 습식 세정기(WET SCRUBBER), 재연소 장치(RTO).",
    img: "/sites/gmsangjin/slides/exhaust-2.jpg",
  },
  {
    no: "6",
    title: "판넬 · HMI",
    en: "PANEL · HMI",
    desc: "컨트롤 판넬 구성과 HMI 화면 구성까지 자동제어 일괄 수행.",
    img: "/sites/gmsangjin/slides/panel-2.jpg",
  },
];

export const DACRO_EQUIPMENT = [
  {
    no: "1",
    title: "COATING 장치",
    en: "SPIN · TILTI COATER",
    desc: "SPRAY, DIP, SPIN, TILTI COATER. TANK UP-DOWN TYPE, TILTI TYPE SPIN COATER.",
    img: "/sites/gmsangjin/slides/coater-1.jpg",
  },
  {
    no: "2",
    title: "COATING LINE",
    en: "지오메트 하드 자동 LINE",
    desc: "LINE LAY-OUT, ROBOT CARRIER TYPE, 도료 공급장치(P.C.S).",
    img: "/sites/gmsangjin/slides/coaterline-2.jpg",
  },
  {
    no: "3",
    title: "세척장비",
    en: "CLEANING UNIT",
    desc: "피도물의 세척을 위한 전처리 시스템. 초음파 세척 장비.",
    img: "/sites/gmsangjin/slides/cleaning-1.jpg",
  },
  {
    no: "4",
    title: "쇼트설비",
    en: "SHOT BLAST",
    desc: "표면 부착성 향상을 위한 물리적 표면 전처리. BOLT용 SHOT BLAST 장비.",
    img: "/sites/gmsangjin/slides/shotblast-photo.jpg",
  },
];

export type ReferenceRow = { client: string; item: string; region: string };

export const REFERENCES: { category: string; rows: ReferenceRow[] }[] = [
  {
    category: "도장설비 및 자동제어부분",
    rows: [
      { client: "상아제관(주)", item: "DRUM 생산 LINE", region: "국내" },
      { client: "기영산업(주)", item: "밀러 생산 LINE", region: "국내" },
      { client: "SAKAE RIKEN(日本)", item: "TOYOTA 자동차 부품 도장 LINE", region: "중국" },
      { client: "(주)우영 밀러시스템", item: "밀러 생산 LINE", region: "국내" },
      { client: "(주)동인", item: "인 판넬 수용성 도장 LINE", region: "국내" },
      { client: "(주)탑런테크", item: "LG전자 TV케이스 후가공 LINE", region: "국내" },
      { client: "(주)화진", item: "자동전사 도장 LINE", region: "국내/중국" },
      { client: "A.G.T.M", item: "헤드램프 생산 LINE", region: "중국" },
      { client: "동양산업(주)", item: "전자제품(플라스틱) 수용성 도장 LINE", region: "폴란드" },
      { client: "(주)유성", item: "인 판넬 수용성 도장 LINE", region: "국내" },
    ],
  },
  {
    category: "도장설비 및 자동제어부분",
    rows: [
      { client: "동양산업(주)", item: "전자제품(플라스틱) 수용성 도장 LINE", region: "폴란드" },
      { client: "(주)화진", item: "자동차 부품(B/K) 도장 LINE", region: "중국" },
      { client: "(주)화진", item: "자동차 부품(AIR BAG) 도장 LINE", region: "중국" },
      { client: "(주)진양", item: "전자제품(플라스틱) 수용성 도장 LINE", region: "폴란드" },
      { client: "동양전자(주)", item: "전자제품(플라스틱) 수용성 도장 LINE", region: "폴란드" },
      { client: "(주)동인", item: "Plastic 부품 도장 Line 증설", region: "울산" },
      { client: "(주)화진테크", item: "Booth 개조 공사", region: "영천" },
      { client: "(주)양지", item: "Baking Oven & Conveyor 신설 공사", region: "울산" },
      { client: "SAKAE RIKEN(日本)", item: "자동차 부품(전사 피도물) 도장 LINE", region: "일본" },
      { client: "SAKAE RIKEN(日本)", item: "자동차 부품(GRILL) 도장 LINE", region: "일본" },
      { client: "CURTIS(POLAND)", item: "전자제품 후가공 도장 LINE", region: "폴란드" },
    ],
  },
  {
    category: "도장설비 및 도금 자동제어부분",
    rows: [
      { client: "동희오토(주)", item: "WET SCRUBBER 설치", region: "국내" },
      { client: "(주)서진산업", item: "자동차 부품(B/K) 도장 LINE", region: "국내" },
      { client: "(주)써테크", item: "BMW 자동차 부품 도금 LINE", region: "국내" },
      { client: "(주)신진테크", item: "GM 자동차 부품 도금 LINE", region: "국내" },
      { client: "대명전자", item: "핸드폰 기판 도금 LINE", region: "베트남" },
      { client: "(주)한국메탈", item: "자동차부품 컨베어 도장 LINE", region: "미국" },
      { client: "(주)서연이화", item: "자동차 범퍼 도장 LINE", region: "인도,중국" },
      { client: "(주)유신정밀", item: "자동차 부품 수용성 LINE 설치", region: "국내" },
    ],
  },
  {
    category: "다크로 설비 및 자동제어부분",
    rows: [
      { client: "한일산업(주)", item: "전자제품(볼트) 수용성 도장 LINE", region: "시화" },
      { client: "(주)코텍 지오메트", item: "자동차 부품(B/K) 수용성 도장 LINE", region: "평택" },
      { client: "(주)코텍(영인)", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "아산" },
      { client: "(주)진아다크로", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "안성" },
      { client: "대승다크로(주)", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "대구" },
      { client: "(주)코텍(안성)", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "안성" },
      { client: "(주)선일다이파스", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "중국" },
      { client: "한일산업(청주)", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "청주" },
      { client: "한일산업(안산)", item: "자동차 부품(메니폴더) 도장 LINE", region: "안산" },
      { client: "한국다크로(주)", item: "자동차 부품(볼트) 수용성 도장 LINE", region: "인천" },
      { client: "첨단다크로(주)", item: "자동차 부품(디스크 휠) 수용성 도장 LINE", region: "평택" },
      { client: "TATA MOTORS", item: "자동차 부품 수용성 도장설비", region: "인도" },
      { client: "HD(브라질)", item: "자동차 부품 수용성 도장설비", region: "브라질" },
    ],
  },
];

export const BUSINESS_TREE = [
  {
    group: "도장설비",
    items: [
      { name: "전처리(P.T)설비", children: ["SPRAY", "DIPPING"] },
      { name: "전착(E.D)설비", children: ["DIPPING"] },
      { name: "PAINT BOOTH", children: ["액체(습식)", "분체(건식)"] },
      { name: "건조설비", children: ["열풍순환", "적외선히터", "UV건조"] },
      { name: "환경설비", children: ["BAG FILTER", "SCRUBBER", "AC CARBON"] },
      { name: "CONVEYOR", children: ["BELT·CHAIN", "NZ-75", "TR-348", "TR-458", "TS-100"] },
    ],
  },
  {
    group: "자동화설비",
    items: [
      { name: "F.A (자동제어)", children: ["자동제어", "산업자동화"] },
      { name: "F.A (공정자동화)", children: ["자동 도장", "공정 자동화", "반도체 장비"] },
    ],
  },
];
