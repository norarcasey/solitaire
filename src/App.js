import React, { Component } from 'react';
import cards from './deck/cards';
import Deck from './deck';
import DiscardPile from './discard-pile';
import './App.css';

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
      <div className="App">
        <Deck cards={this.state.cards} onDiscard={this.handleDiscard} />
        <DiscardPile cards={this.state.discards} />
      </div>
    );
  }
}

export default App;
