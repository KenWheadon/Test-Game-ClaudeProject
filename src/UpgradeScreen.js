import React from 'react';
import { useGameContext } from './GameContext';

const UpgradeScreen = () => {
  const { exp, damageLevel, healthLevel, handleUpgrade } = useGameContext();

  return (
    <div className="upgrade-screen">
      <h2>Upgrade Your Monster</h2>
      <p>Available EXP: {exp}</p>
      <button onClick={() => handleUpgrade('damage')} disabled={exp < damageLevel}>
        Upgrade Damage (Cost: {damageLevel} EXP)
      </button>
      <button onClick={() => handleUpgrade('health')} disabled={exp < healthLevel}>
        Upgrade Health (Cost: {healthLevel} EXP)
      </button>
    </div>
  );
};

export default UpgradeScreen;