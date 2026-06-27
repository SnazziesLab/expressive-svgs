import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Sleepy({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  const fill = accent ?? "var(--ef-accent, #c6f432)";
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-sleepy ef-sleepy-wrap ef-glow" : "ef-sleepy ef-sleepy-wrap"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <circle className="ef-ln" cx="60" cy="60" r="44" />
      <path className="ef-ln ef-lid" d="M40 56 q5 5 10 0" />
      <path className="ef-ln ef-lid" d="M70 56 q5 5 10 0" />
      <path className="ef-ln" d="M48 76 q12 6 24 0" />
      <text className="ef-z" x="86" y="44" fill={fill} fontSize="14" fontFamily="monospace">z</text>
      <text className="ef-z ef-z-b" x="92" y="38" fill={fill} fontSize="10" fontFamily="monospace">z</text>
    </svg>
  );
}
