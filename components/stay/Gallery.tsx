"use client";

import { useEffect, useRef, useState } from "react";
import type { StayImage } from "@/data/types";
import type { Locale, Messages } from "@/lib/i18n";
import { t } from "@/lib/text";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";

const categoryKey: Record<StayImage["category"], keyof Messages["gallery"]> = {
  exterior: "categoryExterior",
  entrance: "categoryEntrance",
  living: "categoryLiving",
  dining: "categoryDining",
  kitchen: "categoryKitchen",
  bedroom: "categoryBedroom",
  "japanese-room": "categoryJapaneseRoom",
  bathroom: "categoryBathroom",
  shower: "categoryShower",
  toilet: "categoryToilet",
  washbasin: "categoryWashbasin",
  laundry: "categoryLaundry",
  projector: "categoryProjector",
  amenity: "categoryAmenity",
  kids: "categoryKids",
  stairs: "categoryStairs",
  parking: "categoryParking",
  street: "categoryStreet",
  bikan: "categoryBikan",
  floorplan: "categoryFloorplan",
};

export function Gallery({
  images,
  locale,
  messages,
}: {
  images: StayImage[];
  locale: Locale;
  messages: Messages;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, i) => {
          const label = messages.gallery[categoryKey[image.category]];
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="overflow-hidden rounded-xl border border-border text-left"
            >
              <PlaceholderImage
                src={image.src}
                alt={t(image.alt, locale)}
                width={image.width}
                height={image.height}
                label={`${label}｜${messages.gallery.photoComingSoon}`}
              />
            </button>
          );
        })}
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(images[activeIndex].alt, locale)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label={messages.gallery.close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            &times;
          </button>

          <div className="flex w-full max-w-3xl items-center justify-between gap-3">
            <button
              type="button"
              aria-label={messages.gallery.previous}
              onClick={() =>
                setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
              }
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              &lsaquo;
            </button>

            <div className="w-full max-w-xl">
              <PlaceholderImage
                src={images[activeIndex].src}
                alt={t(images[activeIndex].alt, locale)}
                width={images[activeIndex].width}
                height={images[activeIndex].height}
                label={`${messages.gallery[categoryKey[images[activeIndex].category]]}｜${messages.gallery.photoComingSoon}`}
                className="rounded-xl"
              />
              {images[activeIndex].caption ? (
                <p className="mt-3 text-center text-sm text-white/80">
                  {t(images[activeIndex].caption!, locale)}
                </p>
              ) : null}
            </div>

            <button
              type="button"
              aria-label={messages.gallery.next}
              onClick={() => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length))}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              &rsaquo;
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
