import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Call({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s2" : "es-s2"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <circle className="es-ln es-wave" cx="120" cy="85" r="34" />
      <circle className="es-ln es-wave es-wave-b" cx="120" cy="85" r="34" />
      <circle className="es-ln es-wave es-wave-c" cx="120" cy="85" r="34" />
      <g className="es-phone">
        <rect className="es-ln" x="104" y="46" width="32" height="60" rx="7" />
        <path className="es-ln" d="M114 96 h12" />
      </g>
    </svg>
  );
}
