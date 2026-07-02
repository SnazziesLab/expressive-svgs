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
      {/* cloud */}
      <path className="es-ln" d="M74 82 q-2-32 28-30 q4-26 38-14 q24 6 18 32 q12 2 10 18 q-2 12-16 12 h-72 q-14 0-14-14 q0-6 8-4 z" />
      {/* upload arrow */}
      <g className="es-arrow">
        <line className="es-ln" x1="120" y1="160" x2="120" y2="105" />
        <path className="es-ln" d="M104 128 l16-22 16 22" />
      </g>
      {/* progress dots */}
      <circle className="es-ln es-prog" cx="102" cy="162" r="4" />
      <circle className="es-ln es-prog es-prog-b" cx="120" cy="162" r="4" />
      <circle className="es-ln es-prog es-prog-c" cx="138" cy="162" r="4" />
    </svg>
  );
}
