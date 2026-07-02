import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Sigh({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-sigh-wrap ef-sigh">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* heavy lidded eyes */}
        <rect className="ef-ln" x="40" y="53" width="16" height="8" rx="3" />
        <path className="ef-ln" d="M40 53 l16 0" />
        <rect className="ef-ln" x="64" y="53" width="16" height="8" rx="3" />
        <path className="ef-ln" d="M64 53 l16 0" />
        {/* slightly open mouth */}
        <path className="ef-ln" d="M48 76 a12 5 0 0 0 24 0" />
        {/* exhale puff lines */}
        <path className="ef-ln ef-puff" d="M94 64 q7 -1 8 -6" />
        <path className="ef-ln ef-puff ef-puff-b" d="M96 72 q7 -2 7 -7" />
      </g>
    </svg>
  );
}
