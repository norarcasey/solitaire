import React from 'react';
import Card from '../card';
import styles from './styles.module.css';

export default function DiscardPile({ cards }) {
  return (
    <div className={styles['discard-pile']}>
      {cards.map((card, idx) => {
        let key = card.value + card.suit + idx;
        return <Card key={key} displayValue={card.displayValue} value={card.value} suit={card.suit} />;
      })}
    </div>
  );
}
