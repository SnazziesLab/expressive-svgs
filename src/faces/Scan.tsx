import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Scan({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-scan ef-glow" : "ef-scan"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <circle className="ef-ln-dim ef-ring" cx="60" cy="60" r="46" strokeDasharray="6 10" />
      <circle className="ef-ln" cx="60" cy="60" r="38" />
      <g className="ef-pupils">
        <circle className="ef-ln" cx="48" cy="56" r="3.5" fill={accent ?? "var(--ef-accent, #c6f432)"} />
        <circle className="ef-ln" cx="72" cy="56" r="3.5" fill={accent ?? "var(--ef-accent, #c6f432)"} />
      </g>
      <path className="ef-ln" d="M46 76 h28" />
    </svg>
  );
}
