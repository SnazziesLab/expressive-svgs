import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Shiver({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-shiver-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* squinting eyes */}
        <rect className="ef-ln" x="38" y="52" width="14" height="6" rx="3" />
        <rect className="ef-ln" x="68" y="52" width="14" height="6" rx="3" />
        {/* chattering teeth mouth */}
        <path className="ef-ln ef-shiver-teeth" d="M44 78 l4 5 l4 -5 l4 5 l4 -5 l4 5 l4 -5 l4 5 l4 -5" />
      </g>
    </svg>
  );
}
