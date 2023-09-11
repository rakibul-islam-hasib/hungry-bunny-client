import React, { useState } from 'react';
// import './RippleButton.css'; // Import the CSS file for the button styles

const RippleButton = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    // Get the click coordinates relative to the button
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // Add a new ripple element to the list
    const newRipple = { x, y };
    setRipples([...ripples, newRipple]);

    // Remove the ripple element after the animation duration
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 1000);
  };

  return (
    <button
      className="relative overflow-hidden focus:outline-none bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleClick}
    >
      Button
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        ></span>
      ))}
    </button>
  );
};

export default RippleButton;
