import React from 'react';

import styles from '../styles/components/TechTicker.module.css';

export default function TechTicker({ items, reverse = false }) {
  const label = `Technologies: ${items.join(', ')}.`;

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
        <span className={styles.item}>{label}</span>
        <span className={styles.item}>{label}</span>
      </div>
    </div>
  );
}
