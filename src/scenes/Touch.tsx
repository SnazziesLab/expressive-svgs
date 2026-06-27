import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Touch({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s1" : "es-s1"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <path className="es-ln es-trail" d="M30 120 Q90 70 150 60" />
      <g className="es-plane">
        <path className="es-ln" d="M150 60 l46 -18 -16 44 -12 -16 z" />
        <path className="es-ln" d="M180 86 l4 -14" />
      </g>
      <g className="es-at">
        <circle className="es-ln es-dim" cx="56" cy="118" r="20" />
        <path className="es-ln" d="M62 118 a6 6 0 1 0 -6 6 a10 10 0 1 0 9 -14" />
      </g>
    </svg>
  );
}
