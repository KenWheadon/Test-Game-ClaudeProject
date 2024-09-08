import React from 'react';
import { useGameContext } from './GameContext';
import './GameOverScreen.css';

const GameOverScreen = () => {
  const { 
    wave, exp, handleUpgrade, damageLevel, healthLevel, 
    startNewFight, monsterDamage, monsterMaxHP 
  } = useGameContext();

  return (
    <div className="game-over-screen">
      <h1>Game Over</h1>
      <div className="stats">
        <p>You survived to wave {wave}</p>
        <p>Total EXP: {exp}</p>
      </div>
      <div className="monster-stats">
        <h2>Your Monster</h2>
        <p>Damage: {monsterDamage}</p>
        <p>Max HP: {monsterMaxHP}</p>
      </div>
      <div className="upgrade-section">
        <h2>Upgrades</h2>
        <div className="upgrade-buttons">
          <button 
            className="upgrade-button"
            onClick={() => handleUpgrade('damage')} 
            disabled={exp < damageLevel}
          >
            <div className="upgrade-info">
              <span>Upgrade Damage</span>
              <span>Current Level: {damageLevel}</span>
            </div>
            <div className="upgrade-cost">
              Cost: {damageLevel} EXP
            </div>
          </button>
          <button 
            className="upgrade-button"
            onClick={() => handleUpgrade('health')} 
            disabled={exp < healthLevel}
          >
            <div className="upgrade-info">
              <span>Upgrade Health</span>
              <span>Current Level: {healthLevel}</span>
            </div>
            <div className="upgrade-cost">
              Cost: {healthLevel} EXP
            </div>
          </button>
        </div>
      </div>
      <button className="fight-again-button" onClick={startNewFight}>Fight Again</button>
    </div>
  );
};

export default GameOverScreen;