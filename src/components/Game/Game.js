import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);

  const addGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer || nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameEnded(true);
    }
    if (guess === answer) {
      setGameWon(true);
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameEnded={gameEnded} />
      {gameEnded && <Banner numOfGuesses={guesses.length} gameWon={gameWon} />}
    </>
  );
}

export default Game;
