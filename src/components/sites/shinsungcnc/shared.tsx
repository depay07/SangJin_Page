import Image from "next/image";

function PageHero({ title, en }: { title: string; en: string }) {
  return (
    <section className="bg-[#111518] py-14 text-center text-white">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{en}</p>
      <h1 className="mt-2 text-3xl font-extrabold">{title}</h1>
    </section>
  );
}

export function SubNav({ current }: { current: string }) {
  const items = [
    { label: "회사소개", href: "/about" },
    { label: "시공사례", href: "/case" },
    { label: "제품소개", href: "/product" },
    { label: "고객문의", href: "/contact" },
  ];
  return (
    <div className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 sm:px-6">
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className={`whitespace-nowrap px-4 py-3 text-sm font-bold ${current === i.href ? "border-b-2 border-red-600 text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export { PageHero };
export function CaseCard({ title, img }: { title: string; img: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border bg-neutral-100">
        <Image src={img} alt={title} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
      </div>
      <p className="mt-3 text-center font-bold">{title}</p>
    </div>
  );
}
