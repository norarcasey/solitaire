import React, { Component } from 'react';
import cards from './deck/cards';
import Deck from './deck';
import DiscardPile from './discard-pile';
import styles from './App.module.css';

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  state = {
    discards: [],
    cards: shuffle(cards)
  };

  handleDiscard = () => {
    this.setState(state => {
      return {
        discards: state.discards.concat(state.cards[state.cards.length - 1]),
        cards: state.cards.slice(0, -1)
      };
    });
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.instructions}>
          <h3>Instructions:</h3>
          <ul>
            <li>Click the deck to draw a card(s)</li>
            <li>Click and drag a drawn card</li>
            <li>Double click a card to flip it over</li>
          </ul>
        </div>
        <div className={styles['deck-container']}>
          <Deck cards={this.state.cards} onDiscard={this.handleDiscard} />
          <DiscardPile cards={this.state.discards} />
        </div>
      </div>
    );
  }
}

export default App;
