import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function EmptyGuess() {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}></span>
      ))}
    </p>
  );
}

function Guess({ guess, answer }) {
  if (!guess) {
    return <EmptyGuess />;
  }

  //   checkGuess('WHALE', 'LEARN');
  //
  //   Returns:
  //   [
  //     { letter: 'W', status: 'incorrect' },
  //     { letter: 'H', status: 'incorrect' },
  //     { letter: 'A', status: 'correct' },
  //     { letter: 'L', status: 'misplaced' },
  //     { letter: 'E', status: 'misplaced' },
  //   ]
  //
  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {checkedGuess.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
