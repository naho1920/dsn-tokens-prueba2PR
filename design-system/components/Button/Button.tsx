import "./button.css";

export type ButtonProps = {
  /** Tamaño */
  size?: "sm" | "md" | "lg";
  /** Estilo */
  variant?: "solid" | "outline" | "ghost";
  /** Ícono */
  icon?: "none" | "leading" | "trailing" | "both" | "only";
  /** Texto */
  label?: string;
  disabled?: boolean;
};

export function Button({ size = "md", variant = "solid", icon = "none", label = "Button", disabled = false }: ButtonProps) {
  return (
    <button className="button" data-size={size} data-variant={variant} data-icon={icon} disabled={disabled} type="button">
      {label}
    </button>
  );
}