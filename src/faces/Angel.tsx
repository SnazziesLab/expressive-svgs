import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Angel({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-angel">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* halo */}
        <ellipse className="ef-ln ef-halo" cx="60" cy="10" rx="20" ry="5" />
        {/* serene closed eyes */}
        <path className="ef-ln" d="M40 54 q6 5 12 0" />
        <path className="ef-ln" d="M68 54 q6 5 12 0" />
        {/* gentle smile */}
        <path className="ef-ln" d="M44 72 q16 12 32 0" />
        {/* wing hints */}
        <path className="ef-ln-dim" d="M16 68 q-8-10 0-22 q10 8 10 22 z" />
        <path className="ef-ln-dim" d="M104 68 q8-10 0-22 q-10 8 -10 22 z" />
      </g>
    </svg>
  );
}
