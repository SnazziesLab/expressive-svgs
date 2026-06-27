import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Search({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s6" : "es-s6"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      {/* background text lines */}
      <path className="es-ln es-dim" d="M20 55 l200 0" />
      <path className="es-ln es-dim" d="M20 75 l200 0" />
      <path className="es-ln es-dim" d="M20 95 l200 0" />
      <path className="es-ln es-dim" d="M20 115 l150 0" />
      {/* result lines appearing */}
      <path className="es-ln es-res" d="M158 55 l60 0" />
      <path className="es-ln es-res es-res-b" d="M158 75 l44 0" />
      <path className="es-ln es-res es-res-c" d="M158 95 l52 0" />
      {/* magnifying glass */}
      <g className="es-mag">
        <circle className="es-ln" cx="88" cy="85" r="30" />
        <path className="es-ln" d="M111 108 l22 22" />
        <line className="es-ln es-scanline" x1="66" y1="85" x2="110" y2="85" />
      </g>
    </svg>
  );
}
