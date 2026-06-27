import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Estimate({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s5" : "es-s5"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <path className="es-ln" d="M84 36 h54 l18 18 v80 a4 4 0 0 1 -4 4 h-68 a4 4 0 0 1 -4 -4 z" />
      <path className="es-ln es-dim" d="M138 36 v18 h18" />
      <path className="es-ln es-dim" d="M96 74 h40 M96 86 h48" />
      <path className="es-ln es-sig" d="M96 110 q8 -14 16 0 t16 0" />
      <g className="es-stamp">
        <circle className="es-ln" cx="150" cy="116" r="16" />
        <path className="es-ln es-check" d="M142 116 l6 6 10 -12" />
      </g>
    </svg>
  );
}
