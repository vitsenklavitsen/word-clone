import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
