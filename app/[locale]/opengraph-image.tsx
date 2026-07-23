import { ImageResponse } from "next/og";
import { isLocale, getDictionary, type Locale } from "@/lib/i18n";
import { site } from "@/data/site";
import { t } from "@/lib/text";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "ja";
  const messages = getDictionary(locale);

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
        <div style={{ fontSize: 28, color: "#C9A96A", marginBottom: 16 }}>
          {t(site.tagline, locale)}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700 }}>{site.brandName}</div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#F8F7F3AA" }}>
          {messages.meta.siteDescription}
        </div>
      </div>
    ),
    { ...size }
  );
}
