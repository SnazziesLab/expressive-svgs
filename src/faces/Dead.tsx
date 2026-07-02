import type { SVGProps } from "react";

interface FaceProps extends SVGProps<SVGSVGElement> {
  accent?: string;
  size?: number | string;
  glow?: boolean;
}

export function Dead({ accent, size = 120, glow = true, style, ...props }: FaceProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={glow ? "ef-glow" : undefined}
      style={{ "--ef-accent": accent, ...style } as React.CSSProperties}
      {...props}
    >
      <g className="ef-dead-wrap">
        <circle className="ef-ln" cx="60" cy="60" r="44" />
        {/* X left eye */}
        <path className="ef-ln" d="M40 46 l12 12 M52 46 l-12 12" />
        {/* X right eye */}
        <path className="ef-ln" d="M68 46 l12 12 M80 46 l-12 12" />
        {/* flat line mouth */}
        <path className="ef-ln" d="M44 76 l32 0" />
        {/* stray lines */}
        <path className="ef-ln-dim" d="M54 94 l12 0" />
        <path className="ef-ln-dim" d="M56 100 l8 0" />
      </g>
    </svg>
  );
}
