import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Chart({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s9" : "es-s9"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      {/* axes */}
      <path className="es-ln es-dim" d="M30 145 l195 0" />
      <path className="es-ln es-dim" d="M30 145 l0 -118" />
      {/* bars */}
      <rect className="es-ln es-bar" x="48" y="88" width="22" height="57" />
      <rect className="es-ln es-bar es-bar-b" x="88" y="62" width="22" height="83" />
      <rect className="es-ln es-bar es-bar-c" x="128" y="44" width="22" height="101" />
      <rect className="es-ln es-bar es-bar-d" x="168" y="24" width="22" height="121" />
      {/* trend line */}
      <path className="es-ln es-trend" d="M59 88 L99 62 L139 44 L179 24" />
      {/* sparkle at peak */}
      <path className="es-ln es-sparkle" d="M179 18 l4 -9 4 9" />
    </svg>
  );
}
