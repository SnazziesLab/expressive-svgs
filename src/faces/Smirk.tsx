import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Smirk({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-smirk-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* left eye normal */}
        <rect className="ef-ln" x="40" y="50" width="3" height="14" rx="1.5" />
        {/* right eye slightly narrowed */}
        <rect className="ef-ln" x="77" y="53" width="3" height="10" rx="1.5" />
        {/* raised right brow */}
        <path className="ef-ln" d="M70 44 q8 -5 14 -1" />
        {/* one-sided smirk */}
        <path className="ef-ln" d="M50 76 q12 8 28 2" />
      </g>
    </svg>
  );
}
