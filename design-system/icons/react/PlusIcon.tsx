import type { IconProps } from "./types";

export function PlusIcon({ size = 24, title, style, ...props }: IconProps) {
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
      <path d="M12.001 5.00003V19.002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M19.002 12.002L4.99998 12.002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
