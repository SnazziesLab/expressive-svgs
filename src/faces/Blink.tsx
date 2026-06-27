import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Blink({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-blink">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        <rect className="ef-ln ef-eye" x="40" y="48" width="3" height="16" rx="1.5" />
        <rect className="ef-ln ef-eye ef-eye-r" x="77" y="48" width="3" height="16" rx="1.5" />
        <path className="ef-ln" d="M44 78 q16 14 32 0" />
      </g>
    </svg>
  );
}
