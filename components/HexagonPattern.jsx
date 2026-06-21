import React, { useId } from 'react';

function hexPoints(cx, cy, r) {
  const startAngle = 0;
  return Array.from({ length: 6 }, (_, i) => {
    const angle = ((startAngle + i * 60) * Math.PI) / 180;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');
}

function getTileGeometry(r, gap) {
  const sqrt3 = Math.sqrt(3);
  const colStep = (3 * r) / 2 + (sqrt3 * gap) / 2;
  const rowStep = sqrt3 * r + gap;
  const tileW = colStep * 2;
  const tileH = rowStep;

  const canonical = [
    [colStep / 2, rowStep / 2],
    [(colStep * 3) / 2, rowStep],
  ];

  const centers = [];
  canonical.forEach(([cx, cy]) => {
    centers.push([cx, cy]);
    if (cy - r < 0) centers.push([cx, cy + tileH]);
    if (cy + r > tileH) centers.push([cx, cy - tileH]);
    if (cx - r < 0) centers.push([cx + tileW, cy]);
    if (cx + r > tileW) centers.push([cx - tileW, cy]);
  });

  return { tileW, tileH, centers };
}

export default function HexagonPattern({
  radius = 24,
  gap = 0,
  x = 0,
  y = 0,
  stroke = 'currentColor',
  strokeOpacity = 0.18,
  className = '',
  style = {},
  masked = false,
}) {
  const id = useId();
  const { tileW, tileH, centers } = getTileGeometry(radius, gap);

  return (
    <svg
      aria-hidden="true"
      className={className}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        ...(masked
          ? {
              maskImage:
                'linear-gradient(to bottom right, white, transparent, transparent)',
              WebkitMaskImage:
                'linear-gradient(to bottom right, white, transparent, transparent)',
            }
          : {}),
        ...style,
      }}
    >
      <defs>
        <pattern
          id={id}
          width={tileW}
          height={tileH}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {centers.map(([cx, cy]) => (
            <polygon
              key={`${cx}-${cy}`}
              points={hexPoints(cx, cy, radius)}
              fill="none"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1"
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
