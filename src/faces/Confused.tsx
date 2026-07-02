import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Confused({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-confused-wrap ef-confused">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* one big eye, one small */}
        <circle className="ef-ln" cx="46" cy="53" r="9" />
        <circle className="ef-ln" cx="74" cy="53" r="5" />
        {/* wavy uncertain mouth */}
        <path className="ef-ln" d="M44 76 q8 -6 16 0 q8 6 16 0" />
        {/* floating question mark */}
        <path className="ef-ln ef-qmark" d="M92 22 q0-9 8-9 q8 0 8 7 q0 5-8 8 l0 4" />
        <circle className="ef-ln ef-qmark" cx="100" cy="40" r="2" />
      </g>
    </svg>
  );
}
