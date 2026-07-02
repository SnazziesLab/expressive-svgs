import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Star({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-star-eyes ef-star-eyes-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* 4-point star left eye */}
        <path className="ef-ln ef-eye-star" d="M46 47 l2 5 5 2 -5 2 -2 5 -2-5 -5-2 5-2 2-5 z" />
        {/* 4-point star right eye */}
        <path className="ef-ln ef-eye-star ef-eye-star-r" d="M74 47 l2 5 5 2 -5 2 -2 5 -2-5 -5-2 5-2 2-5 z" />
        {/* wide smile */}
        <path className="ef-ln" d="M40 72 q20 20 40 0" />
        {/* mini stars */}
        <path className="ef-ln-dim" d="M18 36 l2 4 4 2 -4 2 -2 4 -2-4 -4-2 4-2 2-4 z" />
        <path className="ef-ln-dim" d="M100 28 l2 4 4 2 -4 2 -2 4 -2-4 -4-2 4-2 2-4 z" />
      </g>
    </svg>
  );
}
