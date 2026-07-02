import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Zen({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-zen-wrap ef-zen">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* serenely closed eyes */}
        <path className="ef-ln" d="M40 54 q6 6 12 0" />
        <path className="ef-ln" d="M68 54 q6 6 12 0" />
        {/* gentle smile */}
        <path className="ef-ln" d="M46 72 q14 10 28 0" />
        {/* enlightenment rays */}
        <path className="ef-ln ef-ray" d="M60 14 l0 -8" />
        <path className="ef-ln ef-ray" d="M82 18 l5 -7" />
        <path className="ef-ln ef-ray" d="M100 38 l7 -4" />
        <path className="ef-ln ef-ray" d="M38 18 l-5 -7" />
        <path className="ef-ln ef-ray" d="M20 38 l-7 -4" />
      </g>
    </svg>
  );
}
