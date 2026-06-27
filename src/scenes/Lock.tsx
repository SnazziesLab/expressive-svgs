import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Lock({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s8" : "es-s8"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      {/* shield */}
      <path className="es-ln es-shield" d="M120 18 l52 22 0 46 q0 52 -52 64 q-52 -12 -52 -64 l0 -46 z" />
      {/* padlock body */}
      <rect className="es-ln" x="100" y="92" width="40" height="34" rx="5" />
      {/* shackle */}
      <path className="es-ln es-shackle" d="M108 92 v-10 a12 12 0 0 1 24 0 v10" />
      {/* keyhole */}
      <circle className="es-ln es-key-glow" cx="120" cy="106" r="5" />
      <path className="es-ln es-key-glow" d="M117 111 l6 0 -1 10 -4 0 z" />
    </svg>
  );
}
