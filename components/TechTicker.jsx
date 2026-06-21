import React from 'react';

import styles from '../styles/components/TechTicker.module.css';

export default function TechTicker({ items, reverse = false }) {
  const blocks = items.map((item) => (
    <span key={item} className={styles.block}>
      {item}
    </span>
  ));

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.row}>{blocks}</div>
        <div className={styles.row}>{blocks}</div>
      </div>
    </div>
  );
}
