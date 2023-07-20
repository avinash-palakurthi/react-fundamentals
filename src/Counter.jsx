import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  const increment = () => {
    // setCounter(counter + 3);
    setCounter((prev) => prev + 3);
    console.log("past value", counter);
  };
  return (
    <div className="count">
      <div className="counter-box">
        <span>{counter}</span>
        <button onClick={increment}>+3</button>
      </div>
    </div>
  );
};

export default Counter;
