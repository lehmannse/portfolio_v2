import React from 'react';

import styles from '../styles/components/JobTitleAccent.module.css';

export default function JobTitleAccent() {
  return (
    <span className={styles.accentWrap} aria-hidden="true">
      <span className={styles.accentTrack}>
        <span className={styles.accentBar} />
      </span>
    </span>
  );
}
