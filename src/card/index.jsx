import React from 'react';
import './styles.css';

export default function Card({ suit, displayValue, value }) {
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

  return (
    <div className="card" style={{ color: ['diamonds', 'hearts'].includes(suit) ? 'red' : 'black' }}>
      <div className="left col">
        <div className="display-number">{`${displayValue}`}</div>
      </div>
      <div className="center col">
        {Array.from(Array(value), () => {
          return (
            <div className="suit" style={{ width: `${suitIconWidth()}%` }}>
              {suitUnicodeMap[suit]}
            </div>
          );
        })}
      </div>
      <div className="right col">
        <div className="display-number">{`${displayValue}`}</div>
      </div>
    </div>
  );
}
