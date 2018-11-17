// The drag and drop functionality is found on stack overflow
// https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable

import { useState, useEffect } from 'react';

export default function UseDraggable() {
  let [isDragging, setIsDragging] = useState(false);
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [relativePosition, setRelativePosition] = useState(null);
  let [zIndex, setZIndex] = useState(0);

  let onMouseDown = function(e) {
    if (e.button !== 0) return;
    setIsDragging(true);
    setZIndex(1);
    setRelativePosition({
      x: e.pageX - position.x,
      y: e.pageY - position.y
    });
    e.stopPropagation();
    e.preventDefault();
  };

  let onMouseUp = function(e) {
    setIsDragging(false);
    setZIndex(0);
    e.stopPropagation();
    e.preventDefault();
  };

  let onMouseMove = function(e) {
    if (!isDragging) return;
    setPosition({
      x: e.pageX - relativePosition.x,
      y: e.pageY - relativePosition.y
    });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(
    () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
    },
    [isDragging]
  );

  return [
    {
      position: 'absolute',
      left: position.x + 'px',
      top: position.y + 'px',
      zIndex: zIndex
    },
    onMouseDown
  ];
}
