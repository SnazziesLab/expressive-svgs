import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Cry({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-cry">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* sad brows */}
        <path className="ef-ln" d="M38 44 l12 5" />
        <path className="ef-ln" d="M82 44 l-12 5" />
        {/* closed sad eyes */}
        <path className="ef-ln" d="M40 56 q6 4 12 0" />
        <path className="ef-ln" d="M68 56 q6 4 12 0" />
        {/* frown */}
        <path className="ef-ln" d="M44 78 q16 -12 32 0" />
        {/* tears */}
        <circle className="ef-ln ef-tear" cx="46" cy="64" r="3" />
        <circle className="ef-ln ef-tear ef-tear-r" cx="74" cy="64" r="3" />
      </g>
    </svg>
  );
}
