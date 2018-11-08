import React from 'react';
import useDraggable from '../use-draggable';
import styles from './styles.module.css';

export default function Card({ suit, displayValue, value }) {
  let [style, onDragging] = useDraggable();

  let suitUnicodeMap = {
    hearts: '\u2665',
    diamonds: '\u2666',
    spades: '\u2660',
    clubs: '\u2663'
  };

  let suitIconWidth = () => {
    if (value < 4) {
      return 100;
    } else {
      return 50;
    }
  };

  let cardColor = ['diamonds', 'hearts'].includes(suit) ? 'red' : 'black';

  return (
    <div className={styles.card} style={{ color: cardColor, ...style }} onMouseDown={onDragging}>
      <div className={styles.left}>
        <div className={styles['display-number']}>{`${displayValue}`}</div>
      </div>
      <div className={styles.center}>
        {Array.from(Array(value), (val, i) => {
          return (
            <div key={val + suit + i} className={styles.suit} style={{ width: `${suitIconWidth()}%` }}>
              {suitUnicodeMap[suit]}
            </div>
          );
        })}
      </div>
      <div className={styles.right}>
        <div className={styles['display-number']}>{`${displayValue}`}</div>
      </div>
    </div>
  );
}
