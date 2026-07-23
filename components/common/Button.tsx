import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "accent" | "main" | "outline" | "ghost";
type Size = "md" | "lg";

const variantClass: Record<Variant, string> = {
  accent:
    "bg-accent text-white hover:bg-accent/90 focus-visible:outline-white",
  main: "bg-main text-white hover:bg-main-soft",
  outline: "border border-main text-main hover:bg-main hover:text-white",
  ghost: "text-main hover:bg-main/5",
};

const sizeClass: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors text-center";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type ButtonElProps = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

export function Button({
  href,
  variant = "main",
  size = "md",
  className = "",
  children,
  ...rest
}: LinkProps | ButtonElProps) {
  const classes = `${base} ${variantClass[variant]} ${sizeClass[size]} ${className}`;
  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
