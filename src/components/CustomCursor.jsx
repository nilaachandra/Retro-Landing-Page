import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="fixed z-50 pointer-events-none">
      <div
        className="w-[2vw] h-[2vw] bg-[#bbe4d0] rounded-full shadow-lg"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
