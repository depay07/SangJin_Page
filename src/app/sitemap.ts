import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://sangjin-fa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/greeting",
    "/about",
    "/vision",
    "/org",
    "/factory",
    "/business",
    "/dacro",
    "/automation",
    "/references",
    "/contact",
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/contact" ? 0.9 : 0.8,
  }));
}
