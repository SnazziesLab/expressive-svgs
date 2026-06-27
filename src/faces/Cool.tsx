import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Cool({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-cool-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* sunglasses */}
        <rect className="ef-ln" x="28" y="48" width="24" height="16" rx="8" />
        <rect className="ef-ln" x="68" y="48" width="24" height="16" rx="8" />
        <line className="ef-ln" x1="52" y1="56" x2="68" y2="56" />
        <path className="ef-ln" d="M28 54 l-10 -5" />
        <path className="ef-ln" d="M92 54 l10 -5" />
        {/* cool smirk */}
        <path className="ef-ln" d="M46 76 q14 10 28 2" />
      </g>
    </svg>
  );
}
