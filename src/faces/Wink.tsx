import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Wink({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-wink ef-wink-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        <rect className="ef-ln ef-eye-l" x="40" y="48" width="3" height="15" rx="1.5" />
        <circle cx="78" cy="55" r="4" fill={accent ?? "var(--ef-accent, #c6f432)"} />
        <path className="ef-ln" d="M44 74 q16 12 30 2" />
      </g>
    </svg>
  );
}
