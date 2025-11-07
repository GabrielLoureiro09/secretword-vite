import "./StartScreen.css";

const StartScreen = ({ startGame, setDifficulty, difficulty }) => {
  return (
    <div className="start">
      <h1>Secret Word 🤫</h1>
      <p>Escolha o nível de dificuldade para começar 👇</p>
      
      {/* NOVO: Botões Maiores de Dificuldade */}
      <div className="difficulty-selector">
        {/* Botão Fácil */}
        <button
          className={difficulty === "easy" ? "active" : ""}
          onClick={() => setDifficulty("easy")}
        >
          FÁCIL (5 Vidas)
        </button>

        {/* Botão Difícil */}
        <button
          className={difficulty === "hard" ? "active" : ""}
          onClick={() => setDifficulty("hard")}
        >
          DIFÍCIL (2 Vidas)
        </button>
      </div>
      {/* FIM dos Botões Maiores */}

      {/* O botão principal agora apenas inicia o jogo com a dificuldade escolhida */}
      <button onClick={startGame} className="start-game-button">
        Começar a Jogar!
      </button>
    </div>
  );
};

export default StartScreen;