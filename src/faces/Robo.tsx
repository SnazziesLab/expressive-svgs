import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Robo({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-robo ef-robo-wrap ef-glow" : "ef-robo ef-robo-wrap"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <line className="ef-ln" x1="60" y1="34" x2="60" y2="22" />
      <circle className="ef-ln ef-ant" cx="60" cy="20" r="4" fill={accent ?? "var(--ef-accent, #c6f432)"} />
      <rect className="ef-ln" x="26" y="36" width="68" height="58" rx="14" />
      <rect className="ef-ln ef-eye" x="40" y="58" width="12" height="6" rx="3" />
      <rect className="ef-ln ef-eye" x="68" y="58" width="12" height="6" rx="3" />
      <path className="ef-ln" d="M46 80 h28" />
    </svg>
  );
}
