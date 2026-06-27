import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Angry({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-angry-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* angry brows angled inward */}
        <path className="ef-ln" d="M38 48 l16 7" />
        <path className="ef-ln" d="M82 48 l-16 7" />
        {/* squinting eyes */}
        <rect className="ef-ln" x="40" y="58" width="14" height="9" rx="2" />
        <rect className="ef-ln" x="66" y="58" width="14" height="9" rx="2" />
        {/* frown */}
        <path className="ef-ln" d="M44 80 q16 -12 32 0" />
        {/* steam */}
        <path className="ef-ln ef-steam" d="M50 17 q4 -7 0 -13" />
        <path className="ef-ln ef-steam ef-steam-b" d="M70 17 q4 -7 0 -13" />
      </g>
    </svg>
  );
}
