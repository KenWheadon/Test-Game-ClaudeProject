import React, { useState } from 'react';
import { useGameContext } from './GameContext';
import './StartScreen.css';

const StartScreen = () => {
  const { startNewFight, resetGame } = useGameContext();
  const [showMessage, setShowMessage] = useState(false);

  const handleReset = () => {
    resetGame();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="start-screen">
      <h1>Monstrous Ascendancy: Quick Strike</h1>
      <p>Survive waves of heroes, upgrade your monster, and see how long you can last!</p>
      <div className="button-container">
        <button onClick={startNewFight}>Start Game</button>
        <button onClick={handleReset}>Reset Game</button>
      </div>
      {showMessage && <div className="message">Data Erased</div>}
    </div>
  );
};

export default StartScreen;