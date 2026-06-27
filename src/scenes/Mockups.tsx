import type { SVGProps } from "react";

interface SceneProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  width?: number | string;
  height?: number | string;
  glow?: boolean;
}

export function Mockups({ accent, width = 240, height = 170, glow = true, style, ...props }: SceneProps) {
  const fill = accent ?? "var(--ef-accent, #c6f432)";
  const bg = "var(--ef-bg, #0c0c0a)";
  return (
    <svg
      viewBox="0 0 240 170"
      width={width}
      height={height}
      className={glow ? "es-glow es-s4" : "es-s4"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <rect className="es-ln es-dim" x="64" y="40" width="112" height="84" rx="8" />
      <path className="es-ln es-dim" d="M64 56 h112" />
      <circle fill={fill} cx="74" cy="48" r="2.2" />
      <circle fill={fill} cx="82" cy="48" r="2.2" />
      <rect className="es-ln es-blk" x="74" y="66" width="40" height="48" rx="4" />
      <path className="es-ln es-blk es-blk-b" d="M124 66 h44" />
      <path className="es-ln es-blk es-blk-c" d="M124 80 h44 M124 92 h30" />
      <path className="es-ln es-cursor" d="M150 96 l0 22 6 -6 4 9 4 -2 -4 -9 8 0 z" fill={bg} />
    </svg>
  );
}
