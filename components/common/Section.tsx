import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "default" | "white" | "main";
}) {
  const toneClass =
    tone === "white"
      ? "bg-bg-white"
      : tone === "main"
        ? "bg-main text-white"
        : "bg-bg";
  return (
    <section id={id} className={`py-14 sm:py-20 ${toneClass} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-8 sm:mb-10 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium tracking-wide text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p className={`mt-3 max-w-2xl text-ink-soft ${align === "center" ? "mx-auto" : ""}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
