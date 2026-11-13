"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { COMPANY, COMPANY_NAV, BIZ_NAV } from "./data";

function NavGroup({ name, items }: { name: string; items: {label:string; href:string}[] }) {
  return <details className="sj-nav-group"><summary>{name}</summary><div className="sj-nav-group__menu">{items.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></details>;
}
function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <div className="sj-header-navigation" key={pathname}>
    <nav className="sj-desktop-nav" aria-label="주 메뉴">
      <Link href="/">홈</Link><NavGroup name="회사소개" items={COMPANY_NAV} /><NavGroup name="사업분야" items={BIZ_NAV} /><Link href="/references">시공실적</Link><Link href="/contact">고객문의</Link>
    </nav>
    <Link className="sj-header-cta" href="/contact">견적문의 <ArrowUpRight size={17} aria-hidden="true" /></Link>
    <button type="button" className="sj-menu-toggle" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-controls="sj-mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={26} /> : <Menu size={26} />}</button>
    {open && <nav id="sj-mobile-menu" className="sj-mobile-menu" aria-label="모바일 메뉴"><Link href="/" onClick={() => setOpen(false)}>홈</Link><span>회사소개</span>{COMPANY_NAV.map(item=><Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<span>사업분야</span>{BIZ_NAV.map(item=><Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href="/references" onClick={() => setOpen(false)}>시공실적</Link><Link href="/contact" onClick={() => setOpen(false)}>고객문의</Link></nav>}
  </div>;
}
export function SiteHeader() {
  return <header className="sj-site-header">
    <div className="sj-site-topbar"><div className="sj-container"><span>INDUSTRIAL PLANT ENGINEERING & AUTOMATION</span><a href={`tel:${COMPANY.tel.replaceAll("-", "")}`}>T. {COMPANY.tel}</a></div></div>
    <div className="sj-container sj-site-header__inner">
      <Link href="/" className="sj-brand" aria-label="지엠상진 홈페이지">
        <Image src="/sites/gmsangjin/slides/logo-small.png" alt="" width={44} height={44} className="sj-brand__mark" />
        <span className="sj-brand__text"><strong>지엠상진</strong><small>GM SANGJIN ENGINEERING</small></span>
      </Link>
      <Navigation />
    </div>
  </header>;
}
