import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Pulse({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  const fill = accent ?? "var(--ef-accent, #c6f432)";
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <circle className="ef-ln-dim ef-pulse-ring2" cx="60" cy="60" r="44" />
      <g className="ef-pulse-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="40" />
        <circle cx="48" cy="54" r="4" fill={fill} />
        <circle cx="72" cy="54" r="4" fill={fill} />
        <path className="ef-ln" d="M44 72 q16 18 32 0" />
      </g>
    </svg>
  );
}
