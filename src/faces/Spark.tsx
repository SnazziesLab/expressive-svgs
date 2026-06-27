import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Spark({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-spark ef-glow" : "ef-spark"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <circle className="ef-ln ef-orbit" cx="60" cy="60" r="48" />
      <circle className="ef-ln" cx="60" cy="60" r="38" />
      <circle cx="49" cy="54" r="3.5" fill={accent ?? "var(--ef-accent, #c6f432)"} />
      <circle cx="71" cy="54" r="3.5" fill={accent ?? "var(--ef-accent, #c6f432)"} />
      <ellipse className="ef-ln ef-mouth" cx="60" cy="76" rx="9" ry="7" />
    </svg>
  );
}
