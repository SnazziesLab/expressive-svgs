import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Nerd({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-nerd-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* square glasses */}
        <rect className="ef-ln" x="32" y="46" width="22" height="18" rx="2" />
        <rect className="ef-ln" x="66" y="46" width="22" height="18" rx="2" />
        <path className="ef-ln" d="M54 55 l12 0" />
        <path className="ef-ln" d="M32 52 l-10 -4" />
        <path className="ef-ln" d="M88 52 l10 -4" />
        {/* buck teeth */}
        <path className="ef-ln" d="M50 74 l0 10 l10 0 l0-10" />
        <path className="ef-ln" d="M60 74 l0 10 l10 0 l0-10" />
        <path className="ef-ln" d="M48 74 l24 0" />
      </g>
    </svg>
  );
}
