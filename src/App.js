import React from 'react';
import { GameProvider } from './GameContext';
import Game from './Game';

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;