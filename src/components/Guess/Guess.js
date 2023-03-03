import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const splitGuess = guess.split("");

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}>
          {splitGuess[index] ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
