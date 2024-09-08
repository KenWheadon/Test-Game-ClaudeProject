import React from 'react';
import { useGameContext } from './GameContext';
import Monster from './Monster';
import Hero from './Hero';
import HealthBar from './HealthBar';
import Timer from './Timer';
import TargetButton from './TargetButton';
import TutorialModal from './TutorialModal';
import ParticleEffects from './ParticleEffects';
import { BattleBackground } from './Backgrounds';
import './BattleArea.css';

const BattleArea = () => {
  const { 
    wave, exp, monsterHP, monsterMaxHP, monsterDamage,
    heroHP, heroMaxHP, heroDamage, monsterCooldown, heroCooldown,
    isTargetVisible, handleTargetClick, targetPosition, isHeroDefeated,
    showTutorial, setShowTutorial, isPaused, setIsPaused,
    monsterFlash, heroFlash, streak, isCriticalHit, criticalChance,
    isGameEnding
  } = useGameContext();

  return (
    <div className="battle-area">
      <BattleBackground />
      <div className="game-header">
        <h1>Monstrous Ascendancy: Quick Strike</h1>
        <button onClick={() => setShowTutorial(true)}>Help</button>
        <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? 'Resume' : 'Pause'}</button>
      </div>
      <div className="info-bar">
        <span>Wave: {wave}</span>
        <span>Banked EXP: {exp}</span>
        <span>Streak: {streak}</span>
        <span>Crit Chance: {(criticalChance * 100).toFixed(1)}%</span>
      </div>
      <div className="characters">
        <div className={`character monster ${monsterFlash ? 'flash' : ''} ${isGameEnding ? 'defeated' : ''}`}>
          {isGameEnding && <div className="defeat-text">MONSTER DEFEATED</div>}
          <Monster isAttacking={monsterCooldown === 0} respawnTrigger={wave} />
          <HealthBar current={monsterHP} max={monsterMaxHP} />
          <Timer cooldown={monsterCooldown} maxCooldown={5000} />
          <div className="damage">Damage: {Math.round(monsterDamage)}</div>
          {monsterFlash && <ParticleEffects type="hit" position={{x: 32, y: 32}} />}
          {isCriticalHit && monsterFlash && <ParticleEffects type="critical" position={{x: 32, y: 0}} />}
          {isGameEnding && <ParticleEffects type="defeat" position={{x: 32, y: 32}} />}
        </div>
        <div className={`character hero ${isHeroDefeated ? 'defeated' : ''} ${heroFlash ? 'flash' : ''}`}>
          {isHeroDefeated && <div className="defeat-text">HERO DEFEATED</div>}
          <Hero wave={wave} isAttacking={heroCooldown === 0} />
          <HealthBar current={heroHP} max={heroMaxHP} />
          <Timer cooldown={heroCooldown} maxCooldown={3000} />
          <div className="damage">Damage: {Math.round(heroDamage)}</div>
          {heroFlash && <ParticleEffects type="hit" position={{x: 32, y: 32}} />}
          {isCriticalHit && heroFlash && <ParticleEffects type="critical" position={{x: 32, y: 0}} />}
          {isHeroDefeated && <ParticleEffects type="defeat" position={{x: 32, y: 32}} />}
        </div>
      </div>
      <TargetButton 
        isVisible={isTargetVisible} 
        onClick={handleTargetClick} 
        position={targetPosition}
      />
      {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
    </div>
  );
};

export default BattleArea;