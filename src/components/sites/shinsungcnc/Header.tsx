import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "시공사례", href: "/case" },
  { label: "제품소개", href: "/product" },
  { label: "고객문의", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111518]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden className="flex items-center">
            <span className="inline-block h-5 w-5 rounded-full border-[3px] border-red-600" />
            <span className="ml-[-8px] inline-block h-5 w-5 rounded-full border-[3px] border-red-600" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            (주)신성이앤에스
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="opacity-90 transition hover:opacity-100 hover:underline underline-offset-8">
              {n.label}
            </Link>
          ))}
        </nav>
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-white/20 px-3 py-2 text-sm">
            메뉴
          </summary>
          <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-white/10 bg-[#1a2027] shadow-xl">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="block px-4 py-3 text-sm hover:bg-white/10">
                {n.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
