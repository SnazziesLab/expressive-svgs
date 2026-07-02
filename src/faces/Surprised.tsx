import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Surprised({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-surp-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* wide circular eyes */}
        <circle className="ef-ln" cx="46" cy="52" r="9" />
        <circle className="ef-ln" cx="74" cy="52" r="9" />
        {/* raised brows */}
        <path className="ef-ln" d="M38 38 q8 -5 16 -1" />
        <path className="ef-ln" d="M82 38 q-8 -5 -16 -1" />
        {/* O mouth */}
        <ellipse className="ef-ln" cx="60" cy="78" rx="9" ry="10" />
      </g>
    </svg>
  );
}
