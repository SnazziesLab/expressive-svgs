import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Deposit({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  const fill = accent ?? "var(--ef-accent, #c6f432)";
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s3" : "es-s3"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="es-coin">
        <circle className="es-ln" cx="120" cy="46" r="14" />
        <path className="es-ln" d="M120 39 v14 M115 46 h10" />
      </g>
      <path className="es-ln es-shackle" d="M104 96 v-8 a16 16 0 0 1 32 0 v8" />
      <rect className="es-ln" x="98" y="96" width="44" height="40" rx="7" />
      <circle className="es-spark" cx="120" cy="116" r="3" fill={fill} />
    </svg>
  );
}
