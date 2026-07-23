import Image from "next/image";

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  priority = false,
  label,
  className = "",
  sizes,
  fill = false,
}: {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  label?: string;
  className?: string;
  sizes?: string;
  /** Stretch to the parent's full size (for absolutely-positioned backdrops) instead of sizing by aspect ratio. */
  fill?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      style={fill ? undefined : { aspectRatio: `${width} / ${height}` }}
      className={`flex w-full items-center justify-center border border-dashed border-border bg-accent-soft text-sm text-ink-soft ${fill ? "h-full items-start pt-6" : ""} ${className}`}
    >
      {/* Decorative full-bleed backdrops (fill) already have real heading/CTA
          text overlaid, so skip the descriptive label to avoid double text. */}
      {fill ? null : <span className="px-3 text-center">{label ?? alt}</span>}
    </div>
  );
}
