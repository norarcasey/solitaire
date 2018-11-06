import { useState, useEffect } from 'react';

export default function UseDraggable() {
  let [isDragging, setIsDragging] = useState(false);
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });

  let onMouseDown = function(e) {
    console.log('On Mouse Down');
    // only left mouse button
    if (e.button !== 0) return;
    var pos = { left: e.target.offsetLeft, top: e.target.offsetTop };
    setIsDragging(true);
    setRelativePosition({
      x: e.pageX - pos.left,
      y: e.pageY - pos.top
    });
    e.stopPropagation();
    e.preventDefault();
  };

  let onMouseUp = function(e) {
    console.log('On Mouse up');
    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  let onMouseMove = function(e) {
    console.log('On Mouse move');
    if (!isDragging) return;
    setPosition({
      x: e.pageX - relativePosition.x,
      y: e.pageY - relativePosition.y
    });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    console.log('use Effects');
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      if (!isDragging) {
        console.log('Not dragging anymore');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
    };
  });

  return [
    {
      position: 'absolute',
      left: position.x + 'px',
      top: position.y + 'px'
    },
    onMouseDown
  ];
}
