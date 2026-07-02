import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Shy({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-shy">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* downcast eyes */}
        <path className="ef-ln" d="M40 56 l12 0" />
        <path className="ef-ln" d="M68 56 l12 0" />
        {/* small shy smile */}
        <path className="ef-ln" d="M50 74 q10 6 20 0" />
        {/* blush circles */}
        <circle className="ef-ln-dim ef-blush" cx="38" cy="70" r="12" />
        <circle className="ef-ln-dim ef-blush" cx="82" cy="70" r="12" />
      </g>
    </svg>
  );
}
