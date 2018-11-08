import React from 'react';
import styles from './styles.module.css';

function EmptyDeck() {
  return <div className={styles['empty-deck']}>X</div>;
}

export default function Deck({ cards, onDiscard }) {
  return cards.length > 0 ? <div className={styles.deck} onClick={onDiscard} /> : <EmptyDeck />;
}
