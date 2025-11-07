import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação</span>: {score}
      </p>

      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>

      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>

      <div className="virtualKeyboardContainer">
        <p>Clique em uma letra para jogar:</p>
        <div className="virtualKeyboard">
          {alphabet.map((letter, i) => {
            const isGuessed = guessedLetters.includes(letter);
            const isWrong = wrongLetters.includes(letter);
            const isDisabled = isGuessed || isWrong;

            return (
              <button
                key={i}
                onClick={() => verifyLetter(letter)}
                disabled={isDisabled}
                className={`key-button 
                            ${isGuessed ? 'guessed-key' : ''} 
                            ${isWrong ? 'wrong-key' : ''}`}
              >
                {letter.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;