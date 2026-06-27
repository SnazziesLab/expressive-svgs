import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Joy({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-joy-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        <path className="ef-ln" d="M40 50 q6 -8 12 0" />
        <path className="ef-ln" d="M68 50 q6 -8 12 0" />
        <path className="ef-ln" d="M40 70 q20 22 40 0" />
      </g>
    </svg>
  );
}
