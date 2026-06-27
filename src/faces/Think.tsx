import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Think({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-think">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* raised left brow */}
        <path className="ef-ln" d="M38 44 q8 -6 14 1" />
        {/* eyes */}
        <rect className="ef-ln" x="40" y="50" width="3" height="14" rx="1.5" />
        <rect className="ef-ln" x="77" y="50" width="3" height="14" rx="1.5" />
        {/* smirk */}
        <path className="ef-ln" d="M46 76 q10 5 20 1" />
        {/* thought bubble */}
        <circle className="ef-ln ef-dot" cx="82" cy="28" r="3" />
        <circle className="ef-ln ef-dot ef-dot-b" cx="92" cy="18" r="4.5" />
        <circle className="ef-ln ef-dot ef-dot-c" cx="104" cy="9" r="6" />
      </g>
    </svg>
  );
}
