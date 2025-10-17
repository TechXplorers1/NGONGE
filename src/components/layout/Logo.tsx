import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      {...props}
    >
      <path
        d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
        className="fill-primary"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
      />
      <text
        x="12"
        y="16"
        fontFamily="sans-serif"
        fontSize="12"
        fill="hsl(var(--primary-foreground))"
        textAnchor="middle"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  );
}
