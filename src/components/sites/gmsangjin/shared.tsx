import { COMPANY_NAV, BIZ_NAV } from "./data";

export function PageHero({ title, en }: { title: string; en: string }) {
  return (
    <section className="bg-[#0e2a63] py-14 text-center text-white">
      <p className="text-xs uppercase tracking-[0.3em] text-blue-200">{en}</p>
      <h1 className="mt-2 text-3xl font-extrabold">{title}</h1>
    </section>
  );
}

export function SubNav({
  current,
  items,
}: {
  current: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 sm:px-6">
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className={`whitespace-nowrap px-4 py-3 text-sm font-bold ${current === i.href ? "border-b-2 border-blue-700 text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export { COMPANY_NAV, BIZ_NAV };

export function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
        {kicker}
      </p>
      <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{title}</h2>
      {desc ? (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">{desc}</p>
      ) : null}
    </div>
  );
}
