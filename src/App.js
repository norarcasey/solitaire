import React, { Component } from 'react';
import Card from './card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card suit="clubs" displayValue="4" value={4} />
        <Card suit="diamonds" displayValue="6" value={6} />
        <Card suit="spades" displayValue="2" value={2} />
        <Card suit="hearts" displayValue="8" value={8} />
      </div>
    );
  }
}

export default App;
