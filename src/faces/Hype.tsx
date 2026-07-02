import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Hype({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-hype-wrap ef-hype">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* raised excited brows */}
        <path className="ef-ln" d="M40 44 q6 -8 12 -3" />
        <path className="ef-ln" d="M68 44 q6 -8 12 -3" />
        {/* big open mouth */}
        <ellipse className="ef-ln" cx="60" cy="75" rx="15" ry="11" />
        {/* sparkles */}
        <path className="ef-ln ef-sp" d="M16 28 l4-9 4 9" />
        <path className="ef-ln ef-sp ef-sp-b" d="M97 20 l4-9 4 9" />
        <path className="ef-ln ef-sp ef-sp-c" d="M108 85 l4-9 4 9" />
      </g>
    </svg>
  );
}
