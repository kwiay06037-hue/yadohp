import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/data/site";
import { stays } from "@/data/stays";

const staticPaths = [
  "",
  "/stays",
  "/access",
  "/sightseeing",
  "/faq",
  "/contact",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const stayPaths = stays.map((stay) => `/stays/${stay.slug}`);
  const paths = [...staticPaths, ...stayPaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.domain}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.domain}/${l}${path}`])
        ),
      },
    }))
  );
}
