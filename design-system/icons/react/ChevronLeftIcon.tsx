import type { IconProps } from "./types";

export function ChevronLeftIcon({ size = 24, title, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      width={size}
      height={size}
      // También en style: así un token (var(--icon-size-md)) vale en cualquier
      // navegador, no solo en los que leen el atributo como CSS.
      style={{ width: size, height: size, ...style }}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M15 18C15 18 9.00001 13.5811 9 12C8.99999 10.4188 15 6 15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
