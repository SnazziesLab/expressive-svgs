import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Grumpy({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-grumpy-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* very heavy angled brows (double lines) */}
        <path className="ef-ln" d="M36 44 l22 9" />
        <path className="ef-ln" d="M36 48 l22 9" />
        <path className="ef-ln" d="M84 44 l-22 9" />
        <path className="ef-ln" d="M84 48 l-22 9" />
        {/* eyes below heavy brows */}
        <rect className="ef-ln" x="40" y="56" width="14" height="8" rx="2" />
        <rect className="ef-ln" x="66" y="56" width="14" height="8" rx="2" />
        {/* deep frown */}
        <path className="ef-ln" d="M42 82 q18-16 36 0" />
        {/* under-eye bags */}
        <path className="ef-ln-dim" d="M42 66 q5 3 12 1" />
        <path className="ef-ln-dim" d="M66 66 q5 3 12 1" />
      </g>
    </svg>
  );
}
