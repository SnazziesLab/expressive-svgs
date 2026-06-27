import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Upload({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s7" : "es-s7"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      {/* storage box */}
      <rect className="es-ln" x="70" y="18" width="100" height="66" rx="8" />
      <path className="es-ln es-dim" d="M90 57 l28 0" />
      <path className="es-ln es-dim" d="M90 68 l20 0" />
      <circle className="es-ln es-dim" cx="152" cy="62" r="10" />
      {/* upload arrow */}
      <g className="es-arrow">
        <line className="es-ln" x1="120" y1="155" x2="120" y2="90" />
        <path className="es-ln" d="M104 118 l16 -22 16 22" />
      </g>
      {/* progress dots */}
      <circle className="es-ln es-prog" cx="102" cy="158" r="4" />
      <circle className="es-ln es-prog es-prog-b" cx="120" cy="158" r="4" />
      <circle className="es-ln es-prog es-prog-c" cx="138" cy="158" r="4" />
    </svg>
  );
}
