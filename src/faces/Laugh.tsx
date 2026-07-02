import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Laugh({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-laugh-wrap ef-laugh">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* squinting happy eyes */}
        <path className="ef-ln" d="M40 54 q6 -5 12 0" />
        <path className="ef-ln" d="M68 54 q6 -5 12 0" />
        {/* laugh lines */}
        <path className="ef-ln-dim" d="M36 58 q-4 6 -2 14" />
        <path className="ef-ln-dim" d="M84 58 q4 6 2 14" />
        {/* open laughing mouth */}
        <ellipse className="ef-ln ef-mouth" cx="60" cy="76" rx="14" ry="10" />
        <path className="ef-ln" d="M46 76 l28 0" />
      </g>
    </svg>
  );
}
