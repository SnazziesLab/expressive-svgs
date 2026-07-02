import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Unamused({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-unamu-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* flat half-open eyes */}
        <rect className="ef-ln ef-eye" x="38" y="52" width="17" height="8" rx="4" />
        <rect className="ef-ln ef-eye" x="65" y="52" width="17" height="8" rx="4" />
        {/* flat unimpressed mouth */}
        <path className="ef-ln" d="M44 76 l32 0" />
        {/* slight eyebrow raise on one side */}
        <path className="ef-ln" d="M65 44 q8 -3 17 0" />
      </g>
    </svg>
  );
}
