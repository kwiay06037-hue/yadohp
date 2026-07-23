import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/lib/i18n";
import { getStayBySlug } from "@/data/stays";
import { site } from "@/data/site";
import { t } from "@/lib/text";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function StayOpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; stay: string }>;
}) {
  const { locale: raw, stay: slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const stay = getStayBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1D2A38",
          color: "#F8F7F3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#C9A96A", marginBottom: 16 }}>
          {site.brandName}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700 }}>
          {stay ? t(stay.name, locale) : site.brandName}
        </div>
        {stay ? (
          <div style={{ fontSize: 28, marginTop: 24, color: "#F8F7F3AA" }}>
            {t(stay.concept, locale)}
          </div>
        ) : null}
      </div>
    ),
    { ...size }
  );
}
