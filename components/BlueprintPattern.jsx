import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import styles from '../styles/components/BlueprintPattern.module.css';

export default function BlueprintPattern({ position = 'top' }) {
  const stroke = useColorModeValue(
    'rgba(28, 167, 208, 0.42)',
    'rgba(144, 205, 244, 0.34)'
  );
  const minorStroke = useColorModeValue(
    'rgba(28, 167, 208, 0.22)',
    'rgba(144, 205, 244, 0.16)'
  );

  return (
    <div
      aria-hidden="true"
      className={`${styles.wrap} ${
        position === 'bottom' ? styles.bottom : styles.top
      }`}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="blueprint-grid-major"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke={stroke}
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="blueprint-grid-minor"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={minorStroke}
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="1200" height="320" fill="url(#blueprint-grid-minor)" />
        <rect width="1200" height="320" fill="url(#blueprint-grid-major)" />
        <circle
          cx="180"
          cy="90"
          r="42"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="6 4"
        />
        <path
          d="M 920 220 L 1040 220 L 1040 140"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
        <path
          d="M 260 250 L 420 250 M 260 250 L 260 170"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
        <rect
          x="700"
          y="48"
          width="120"
          height="72"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
