import React, { useEffect, useState } from 'react';

import styles from '../styles/components/TypewriterJobTitle.module.css';

export default function TypewriterJobTitle({ text, accentColor = '#90cdf4' }) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayed('');
    let index = 0;
    let typingTimer;

    const typeNext = () => {
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index += 1;
        typingTimer = window.setTimeout(typeNext, 70);
      }
    };

    typeNext();

    const cursorTimer = window.setInterval(() => {
      setShowCursor((value) => !value);
    }, 530);

    return () => {
      window.clearTimeout(typingTimer);
      window.clearInterval(cursorTimer);
    };
  }, [text]);

  return (
    <span className={styles.wrap}>
      <span className={styles.prompt} style={{ color: accentColor }}>
        &gt;
      </span>
      <span className={styles.text}>{displayed}</span>
      <span
        className={styles.cursor}
        style={{
          color: accentColor,
          opacity: showCursor ? 1 : 0,
        }}
        aria-hidden="true"
      >
        _
      </span>
    </span>
  );
}
