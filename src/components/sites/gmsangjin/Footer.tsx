import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "./data";

export function SiteFooter() {
  return (
    <footer className="bg-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center gap-3 text-white">
          <Image
            src="/sites/gmsangjin/slides/logo-small.png"
            alt="GM상진 로고"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full bg-white"
          />
          <div>
            <p className="text-2xl font-extrabold">{COMPANY.name}</p>
            <p className="text-[11px] tracking-wider text-neutral-400">
              {COMPANY.en}
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-7">
          본사 : {COMPANY.address}
          <br />
          T. {COMPANY.tel} | F. {COMPANY.fax} | 대표 : {COMPANY.ceo} |
          설립 {COMPANY.founded}
        </p>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-neutral-500">
          Copyright © 2026 -{" "}
          <Link href="/" className="underline">
            {COMPANY.name}
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
