import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Nervous({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-nervous-wrap ef-nervous">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* wide worried eyes */}
        <circle className="ef-ln" cx="46" cy="52" r="7" />
        <circle className="ef-ln" cx="74" cy="52" r="7" />
        {/* forced smile / grimace */}
        <path className="ef-ln" d="M44 76 l4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5" />
        {/* sweat drops */}
        <path className="ef-ln ef-sweat" d="M97 36 q2 5 0 9 q-3 0 -3-4 q0-5 3-5 z" />
        <path className="ef-ln ef-sweat ef-sweat-b" d="M102 52 q1 4 0 7 q-2.5 0 -2.5-3.5 q0-3.5 2.5-3.5 z" />
      </g>
    </svg>
  );
}
