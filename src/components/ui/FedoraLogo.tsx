interface Props {
  size?: number;
  className?: string;
  /** "roundel" = "f" branco no círculo azul Fedora · "mark" = só o "f" em currentColor */
  variant?: "roundel" | "mark";
  title?: string;
}

// Logo do Fedora — o "f" branco dentro do círculo azul (Fedora Blue #3C6EB4),
// símbolo público do projeto. Recriado em SVG leve.
export function FedoraLogo({ size = 40, className, variant = "roundel", title = "Fedora" }: Props) {
  const roundel = variant === "roundel";
  const stroke = roundel ? "#fff" : "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      {roundel && <circle cx="50" cy="50" r="50" fill="#3C6EB4" />}
      {/* o "f": haste vertical que sobe e curva à esquerda (gancho) + travessão */}
      <g fill="none" stroke={stroke} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 82 L55 42 Q55 28 41 28 Q34 28 34 35" />
        <path d="M39 50 L64 50" />
      </g>
    </svg>
  );
}
