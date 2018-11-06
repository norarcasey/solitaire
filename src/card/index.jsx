import React from 'react';
import useDraggable from '../use-draggable';
import './styles.css';

export function Cards() {
  let [style, onDragging] = useDraggable();

  console.log('Styles', style);
  console.log('onDragging', onDragging);
  return (
    <>
      <Card suit="clubs" displayValue="4" value={4} style={style} onMouseDown={onDragging} />
      <Card suit="diamonds" displayValue="6" value={6} />
      <Card suit="spades" displayValue="2" value={2} />
      <Card suit="hearts" displayValue="8" value={8} />
    </>
  );
}

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
        {Array.from(Array(value), (val, i) => {
          return (
            <div key={val + suit + i} className="suit" style={{ width: `${suitIconWidth()}%` }}>
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
