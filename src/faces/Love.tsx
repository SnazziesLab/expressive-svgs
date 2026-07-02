import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Love({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-love">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* heart left eye */}
        <path className="ef-ln ef-heart" d="M46 62 l-8-8 a5.5 5.5 0 0 1 8-8 a5.5 5.5 0 0 1 8 8 z" />
        {/* heart right eye */}
        <path className="ef-ln ef-heart ef-heart-r" d="M74 62 l-8-8 a5.5 5.5 0 0 1 8-8 a5.5 5.5 0 0 1 8 8 z" />
        {/* big smile */}
        <path className="ef-ln" d="M40 72 q20 22 40 0" />
        {/* floating mini hearts */}
        <path className="ef-ln ef-mini-heart" d="M94 28 l-5-5 a3.5 3.5 0 0 1 5-5 a3.5 3.5 0 0 1 5 5 z" />
        <path className="ef-ln ef-mini-heart ef-mini-heart-b" d="M18 34 l-4-4 a3 3 0 0 1 4-4 a3 3 0 0 1 4 4 z" />
      </g>
    </svg>
  );
}
