import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Dizzy({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-dizzy-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* X left eye */}
        <path className="ef-ln" d="M40 46 l12 12 M52 46 l-12 12" />
        {/* X right eye */}
        <path className="ef-ln" d="M68 46 l12 12 M80 46 l-12 12" />
        {/* wavy mouth */}
        <path className="ef-ln" d="M42 76 q9 -8 18 0 q9 8 18 0" />
        {/* dizzy stars */}
        <path className="ef-ln ef-star" d="M20 34 l4 -9 4 9" />
        <path className="ef-ln ef-star ef-star-b" d="M92 34 l4 -9 4 9" />
      </g>
    </svg>
  );
}
