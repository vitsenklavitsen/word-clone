import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        addGuess({ id: crypto.randomUUID(), value: guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern={"[a-zA-Z]{5}"}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
