import React, { Component } from 'react';
import Deck from './deck';
import DiscardPile from './discard-pile';
import './App.css';

class App extends Component {
  state = {
    discards: [],
    cards: [
      { value: 1, displayValue: 'A', suit: 'spades' },
      { value: 8, displayValue: '8', suit: 'diamonds' },
      { value: 6, displayValue: '6', suit: 'clubs' },
      { value: 3, displayValue: '3', suit: 'clubs' },
      { value: 2, displayValue: '2', suit: 'hearts' }
    ]
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
