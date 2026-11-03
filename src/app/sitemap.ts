import type { MetadataRoute } from "next";

const SITE_URL = "https://sagjin-fa.com";

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
    "/references",
    "/contact",
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: new Date("2026-11-03"),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/contact" ? 0.9 : 0.8,
  }));
}
