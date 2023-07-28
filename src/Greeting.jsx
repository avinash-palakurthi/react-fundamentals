import React, { useState, useEffect } from "react";

const Greeting = ({ randomMax }) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 5) + 1
  );

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    console.log("greeting.js: useEffect()");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("random", randomNumber);
    if (randomMax === randomNumber) {
      window.localStorage.setItem("jackpot", true);
    } else {
      window.localStorage.setItem("jackpot", false);
    }

    switch (randomNumber) {
      case 1:
        setGreeting("Hello ");
        break;

      case 2:
        setGreeting("Hallo");
        break;

      case 3:
        setGreeting("Guten Tag (german)");
        break;

      case 4:
        setGreeting("Goedendag (dutch)");
        break;

      case 5:
        setGreeting("bonjour (french)");
        break;

      case 6:
        setGreeting("salute");
        break;
      case 7:
        setGreeting("czesc");
        break;
      case 8:
        setGreeting("ciao");
        break;
      default:
        setGreeting("Helloooo (default)");
    }

    return function cleanup() {
      console.log("cleanup");

      window.localStorage.removeItem("random");
      window.localStorage.remove("jackpot");
    };
  }, [randomNumber, randomMax]);
  return (
    <div className="greeting">
      <h1>Random Greetings</h1>
      <h2>{greeting}</h2>
    </div>
  );
};

export default Greeting;
