import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Asleep({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-asleep-wrap ef-asleep">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* fully closed eyes */}
        <path className="ef-ln" d="M38 54 l18 0" />
        <path className="ef-ln" d="M64 54 l18 0" />
        {/* small open mouth */}
        <ellipse className="ef-ln" cx="60" cy="76" rx="6" ry="5" />
        {/* Z shapes */}
        <path className="ef-ln ef-zzz" d="M82 28 l8 0 -8 10 8 0" />
        <path className="ef-ln ef-zzz ef-zzz-b" d="M90 16 l11 0 -11 14 11 0" />
        <path className="ef-ln ef-zzz ef-zzz-c" d="M76 18 l6 0 -6 8 6 0" />
      </g>
    </svg>
  );
}
