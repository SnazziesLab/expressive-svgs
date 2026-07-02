import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Pout({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow ef-float" : "ef-float"}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-pout">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* puffed cheeks */}
        <circle className="ef-ln-dim ef-cheek" cx="22" cy="70" r="13" />
        <circle className="ef-ln-dim ef-cheek" cx="98" cy="70" r="13" />
        {/* narrow irritated eyes */}
        <rect className="ef-ln" x="40" y="50" width="14" height="9" rx="2" />
        <rect className="ef-ln" x="66" y="50" width="14" height="9" rx="2" />
        {/* tight pouty frown */}
        <path className="ef-ln" d="M52 78 q8-8 16 0" />
      </g>
    </svg>
  );
}
