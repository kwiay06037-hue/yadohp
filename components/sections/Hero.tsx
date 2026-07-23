import type { Locale, Messages } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { t } from "@/lib/text";
import { site } from "@/data/site";
import { Button } from "@/components/common/Button";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";

export function Hero({ locale, messages }: { locale: Locale; messages: Messages }) {
  return (
    <section className="relative overflow-hidden bg-main text-white">
      <div className="absolute inset-0">
        <PlaceholderImage
          src={null}
          alt={t(site.tagline, locale)}
          width={1920}
          height={1280}
          priority
          fill
          label="倉敷美観地区 / Kurashiki Bikan Historical Quarter"
          className="opacity-40"
        />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end gap-6 px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {t(site.tagline, locale)}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          {t(site.subTagline, locale)}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={localizedPath(locale, "/stays")} variant="accent" size="lg">
            {messages.cta.compareStays}
          </Button>
          <Button
            href={localizedPath(locale, "/stays#compare")}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-main"
          >
            {messages.cta.checkAvailability}
          </Button>
        </div>
      </div>
    </section>
  );
}
