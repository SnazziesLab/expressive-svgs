import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Sick({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-sick-wrap ef-sick">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* wavy squiggly eyes */}
        <path className="ef-ln" d="M38 54 q4-6 8 0 q4 6 8 0" />
        <path className="ef-ln" d="M66 54 q4-6 8 0 q4 6 8 0" />
        {/* frown */}
        <path className="ef-ln" d="M44 80 q16-12 32 0" />
        {/* nausea swirl */}
        <path className="ef-ln ef-swirl" d="M50 92 q5-4 10 0 q5 4 10 0 q5-4 10 0" />
        {/* sick tinge marks */}
        <path className="ef-ln-dim" d="M24 65 q4 2 3 8" />
        <path className="ef-ln-dim" d="M96 65 q4 2 3 8" />
      </g>
    </svg>
  );
}
