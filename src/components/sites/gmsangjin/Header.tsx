"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { COMPANY_NAV, BIZ_NAV } from "./data";

function DesktopDropdown({
  label,
  openKey,
  current,
  onEnter,
  onLeave,
  items,
}: {
  label: string;
  openKey: string;
  current: string | null;
  onEnter: (k: string) => void;
  onLeave: () => void;
  items: { label: string; href: string }[];
}) {
  const open = current === openKey;
  return (
    <div className="relative" onMouseEnter={() => onEnter(openKey)} onMouseLeave={onLeave}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onEnter(open ? "" : openKey)}
        className="opacity-90 hover:opacity-100 hover:underline underline-offset-8"
      >
        {label}
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div className="w-44 overflow-hidden rounded-lg border border-white/10 bg-[var(--legacy-4)]">
          {items.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block px-4 py-2.5 text-sm hover:bg-white/10"
            >
              {n.label}
            </Link>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Menus() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="hidden items-center gap-6 text-[15px] font-medium md:flex">
          <Link href="/" className="opacity-90 hover:opacity-100 hover:underline underline-offset-8">
            홈
          </Link>
          <DesktopDropdown
            label="회사소개"
            openKey="company"
            current={open}
            onEnter={setOpen}
            onLeave={() => setOpen(null)}
            items={COMPANY_NAV}
          />
          <DesktopDropdown
            label="사업분야"
            openKey="biz"
            current={open}
            onEnter={setOpen}
            onLeave={() => setOpen(null)}
            items={BIZ_NAV}
          />
          <Link href="/references" className="opacity-90 hover:opacity-100 hover:underline underline-offset-8">
            시공실적
          </Link>
          <Link href="/contact" className="opacity-90 hover:opacity-100 hover:underline underline-offset-8">
            고객문의
          </Link>
        </nav>
        <div className="relative md:hidden">
          <button
            type="button"
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
            className="rounded-md border border-white/20 px-3 py-2 text-sm"
          >
            메뉴
          </button>
          {mobile && (
            <div className="absolute right-0 mt-2 max-h-[70vh] w-48 overflow-y-auto rounded-lg border border-white/10 bg-[var(--legacy-4)]">
              <Link href="/" className="block px-4 py-3 text-sm font-bold hover:bg-white/10">
                홈
              </Link>
              <p className="border-t border-white/10 px-4 pb-1 pt-3 text-xs text-blue-200">회사소개</p>
              {COMPANY_NAV.map((n) => (
                <Link key={n.href} href={n.href} className="block px-4 py-2.5 text-sm hover:bg-white/10">
                  {n.label}
                </Link>
              ))}
              <p className="border-t border-white/10 px-4 pb-1 pt-3 text-xs text-blue-200">사업분야</p>
              {BIZ_NAV.map((n) => (
                <Link key={n.href} href={n.href} className="block px-4 py-2.5 text-sm hover:bg-white/10">
                  {n.label}
                </Link>
              ))}
              <Link href="/references" className="block border-t border-white/10 px-4 py-3 text-sm font-bold hover:bg-white/10">
                시공실적
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-sm font-bold hover:bg-white/10">
                고객문의
              </Link>
            </div>
          )}
        </div>
    </>
  );
}

export function SiteHeader() {
  // pathname이 바뀌면 Menus를 리마운트해 열린 메뉴를 닫는다
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--legacy-2)]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/sites/gmsangjin/slides/logo-small.png"
            alt="GM상진 로고"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full bg-white"
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight">
              지엠상진
            </span>
            <span className="block text-[10px] font-medium  text-neutral-300">
              GM SANGJIN ENGINEERING & ELECTRIC
            </span>
          </span>
        </Link>
        <Menus key={pathname} />
      </div>
    </header>
  );
}
