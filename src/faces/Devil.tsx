import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Devil({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-devil-wrap ef-devil">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* horns */}
        <path className="ef-ln ef-horn" d="M40 22 l-5-14 10 0 z" />
        <path className="ef-ln ef-horn" d="M80 22 l-5-14 10 0 z" />
        {/* angled evil brows */}
        <path className="ef-ln" d="M36 48 l16 6" />
        <path className="ef-ln" d="M84 48 l-16 6" />
        {/* narrow eyes */}
        <rect className="ef-ln" x="40" y="56" width="14" height="8" rx="2" />
        <rect className="ef-ln" x="66" y="56" width="14" height="8" rx="2" />
        {/* wide evil grin */}
        <path className="ef-ln" d="M36 74 q24 20 48 0" />
      </g>
    </svg>
  );
}
