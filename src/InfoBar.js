import React from 'react';
import { useGameContext } from './GameContext';

const InfoBar = () => {
  const { wave, exp } = useGameContext();

  return (
    <div className="info-bar">
      <span>Wave: {wave}</span>
      <span>EXP: {exp}</span>
    </div>
  );
};

export default InfoBar;