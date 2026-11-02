import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <span aria-hidden className="flex items-center">
            <span className="inline-block h-6 w-6 rounded-full border-[3px] border-red-600" />
            <span className="ml-[-10px] inline-block h-6 w-6 rounded-full border-[3px] border-red-600" />
          </span>
          <span className="text-2xl font-extrabold">(주)신성이앤에스</span>
        </div>
        <p className="mt-5 text-sm leading-7">
          ㈜신성이앤에스 179-81-03087 | 대표 : 이 석 중 | 주 소 : 경기도
          시흥시 공단2대로 318번길 3(시화공단 3바401)
          <br />
          TEL : 031) 434 – 6433 | FAX : 031) 434 - 6434 |{" "}
          <a href="mailto:electric5366@naver.com" className="underline">
            electric5366@naver.com
          </a>
        </p>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-neutral-500">
          Copyright © 2026 -{" "}
          <Link href="/" className="underline">
            신성이앤에스
          </Link>{" "}
          All Rights Reserved. 원본: https://www.shinsungcnc.com/
        </p>
      </div>
    </footer>
  );
}
