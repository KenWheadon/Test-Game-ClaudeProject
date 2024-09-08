import React from 'react';
import { useGameContext } from './GameContext';
import StartScreen from './StartScreen';
import BattleArea from './BattleArea';
import GameOverScreen from './GameOverScreen';

const Game = () => {
  const { gameState } = useGameContext();

  return (
    <div className="game-container">
      {gameState === 'start' && <StartScreen />}
      {gameState === 'playing' && <BattleArea />}
      {gameState === 'gameOver' && <GameOverScreen />}
    </div>
  );
};

export default Game;