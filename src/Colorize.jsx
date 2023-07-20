import React, { useState } from "react";

const Colorize = () => {
  const [color, setColor] = useState("#072188");

  function getRandomColor() {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  }

  function changeColor() {
    const randomColor = getRandomColor();
    setColor(randomColor);
  }

  return (
    <div className="colorizer">
      <div className="box" style={{ backgroundColor: color }}>
        {color}
      </div>
      <button onClick={changeColor}>change color</button>
    </div>
  );
};

export default Colorize;
