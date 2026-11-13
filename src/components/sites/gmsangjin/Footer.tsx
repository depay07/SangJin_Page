import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, COMPANY_NAV, BIZ_NAV } from "./data";

export function SiteFooter() {
  return <footer className="sj-site-footer">
    <div className="sj-container sj-footer-main">
      <div className="sj-footer-company">
        <div className="sj-footer-brand"><Image src="/sites/gmsangjin/slides/logo-small.png" alt="" width={46} height={46} /><div><strong>{COMPANY.name}</strong><span>{COMPANY.en}</span></div></div>
        <p>도장설비 · DACRO 코팅라인 · PLC 자동제어<br/>설계에서 제작, 시공과 시운전까지.</p>
        <p className="sj-footer-address">{COMPANY.address}<br/>대표 {COMPANY.ceo} · 설립 {COMPANY.founded}<br/>T. {COMPANY.tel} / F. {COMPANY.fax}<br/><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
      </div>
      <nav className="sj-footer-links" aria-label="하단 회사소개"><h2>COMPANY</h2>{COMPANY_NAV.map(i=><Link href={i.href} key={i.href}>{i.label}</Link>)}</nav>
      <nav className="sj-footer-links" aria-label="하단 사업분야"><h2>BUSINESS</h2>{BIZ_NAV.map(i=><Link href={i.href} key={i.href}>{i.label}</Link>)}<Link href="/references">시공실적</Link></nav>
      <div className="sj-footer-contact"><h2>CONTACT</h2><a className="sj-footer-phone" href={`tel:${COMPANY.mobile.replaceAll("-", "")}`}>{COMPANY.mobile}</a><p>프로젝트 설비 사양과 시공 범위를 문의하세요.</p><Link href="/contact">온라인 문의 <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
    </div>
    <div className="sj-container sj-footer-bottom"><small>© 2026 {COMPANY.name}. ALL RIGHTS RESERVED.</small><span>PAINT FINISHING · DACRO COATING · INDUSTRIAL AUTOMATION</span></div>
  </footer>;
}
