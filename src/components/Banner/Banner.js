import React from "react";

function HappyBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ numOfGuesses, gameWon, answer }) {
  return gameWon ? (
    <HappyBanner numOfGuesses={numOfGuesses} />
  ) : (
    <SadBanner answer={answer} />
  );
}

export default Banner;
