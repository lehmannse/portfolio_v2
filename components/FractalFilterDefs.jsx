import React from 'react';

export default function FractalFilterDefs() {
  return (
    <svg style={{ display: 'none' }}>
      <defs>
        <filter id="fractalNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
  );
}
