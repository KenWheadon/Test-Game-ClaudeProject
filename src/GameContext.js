import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState('start');
  const [wave, setWave] = useState(1);
  const [exp, setExp] = useState(() => {
    const savedExp = localStorage.getItem('playerExp');
    return savedExp ? parseInt(savedExp, 10) : 0;
  });
  const [monsterHP, setMonsterHP] = useState(1);
  const [monsterMaxHP, setMonsterMaxHP] = useState(1);
  const [monsterDamage, setMonsterDamage] = useState(1);
  const [heroHP, setHeroHP] = useState(1);
  const [heroMaxHP, setHeroMaxHP] = useState(1);
  const [heroDamage, setHeroDamage] = useState(1);
  const [monsterCooldown, setMonsterCooldown] = useState(5000);
  const [heroCooldown, setHeroCooldown] = useState(3000);
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0 });
  const [damageLevel, setDamageLevel] = useState(() => {
    const savedDamageLevel = localStorage.getItem('damageLevel');
    return savedDamageLevel ? parseInt(savedDamageLevel, 10) : 1;
  });
  const [healthLevel, setHealthLevel] = useState(() => {
    const savedHealthLevel = localStorage.getItem('healthLevel');
    return savedHealthLevel ? parseInt(savedHealthLevel, 10) : 1;
  });
  const [isHeroDefeated, setIsHeroDefeated] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [monsterFlash, setMonsterFlash] = useState(false);
  const [heroFlash, setHeroFlash] = useState(false);
  const [streak, setStreak] = useState(0);
  const [isCriticalHit, setIsCriticalHit] = useState(false);
  const [criticalChance, setCriticalChance] = useState(0.1);
  const [isGameEnding, setIsGameEnding] = useState(false);

  useEffect(() => {
    localStorage.setItem('playerExp', exp.toString());
    localStorage.setItem('damageLevel', damageLevel.toString());
    localStorage.setItem('healthLevel', healthLevel.toString());
  }, [exp, damageLevel, healthLevel]);

  const resetHero = useCallback(() => {
    setHeroHP(wave);
    setHeroMaxHP(wave);
    setHeroDamage(1 + Math.floor(wave / 2));
  }, [wave]);

  const startNewFight = useCallback(() => {
    setGameState('playing');
    setWave(1);
    setMonsterHP(healthLevel);
    setMonsterMaxHP(healthLevel);
    setMonsterDamage(damageLevel);
    setMonsterCooldown(5000);
    setHeroCooldown(3000);
    setIsHeroDefeated(false);
    setIsGameEnding(false);
    resetHero();
  }, [healthLevel, damageLevel, resetHero]);

  const handleTargetClick = useCallback(() => {
    setMonsterCooldown(prev => Math.max(0, prev - 1000));
    setIsTargetVisible(false);
    setStreak(prev => prev + 1);
  }, []);

  const moveTarget = useCallback(() => {
    setTargetPosition({
      top: Math.random() * 30,
      left: Math.random() * 80 + 10,
    });
  }, []);

  const endGame = useCallback(() => {
    setIsGameEnding(true);
    setTimeout(() => {
      setGameState('gameOver');
      setExp(prevExp => prevExp + wave);
      setIsGameEnding(false);
    }, 3000);
  }, [wave]);

  const handleUpgrade = useCallback((type) => {
    if (type === 'damage' && exp >= damageLevel) {
      setExp(prev => prev - damageLevel);
      setDamageLevel(prev => prev + 1);
    } else if (type === 'health' && exp >= healthLevel) {
      setExp(prev => prev - healthLevel);
      setHealthLevel(prev => prev + 1);
    }
  }, [exp, damageLevel, healthLevel]);

  const defeatHero = useCallback(() => {
    setIsHeroDefeated(true);
    setTimeout(() => {
      setWave(prev => prev + 1);
      resetHero();
      setIsHeroDefeated(false);
      setHeroCooldown(3000);
    }, 2000);
  }, [resetHero]);

  const resetGame = useCallback(() => {
    setExp(0);
    setDamageLevel(1);
    setHealthLevel(1);
    localStorage.setItem('playerExp', '0');
    localStorage.setItem('damageLevel', '1');
    localStorage.setItem('healthLevel', '1');
  }, []);

  const calculateDamage = useCallback((baseDamage) => {
    const streakBonus = Math.min(streak * 0.1, 1);
    const criticalMultiplier = Math.random() < criticalChance ? 2 : 1;
    setIsCriticalHit(criticalMultiplier === 2);
    return baseDamage * (1 + streakBonus) * criticalMultiplier;
  }, [streak, criticalChance]);

  useEffect(() => {
    if (gameState !== 'playing' || isPaused || showTutorial) return;

    const gameLoop = setInterval(() => {
      if (isHeroDefeated || isGameEnding) return;

      setMonsterCooldown(prev => Math.max(0, prev - 100));
      setHeroCooldown(prev => Math.max(0, prev - 100));

      if (heroHP <= 0 && !isHeroDefeated) {
        defeatHero();
        return;
      }

      if (monsterHP <= 0 && !isGameEnding) {
        endGame();
        return;
      }

      if (monsterCooldown <= 0) {
        const damage = calculateDamage(monsterDamage);
        setHeroHP(prev => {
          const newHP = Math.max(0, prev - damage);
          setHeroFlash(true);
          setTimeout(() => setHeroFlash(false), 100);
          return newHP;
        });
        setMonsterCooldown(5000);
      }

      if (heroCooldown <= 0) {
        const damage = calculateDamage(heroDamage);
        setMonsterHP(prev => {
          const newHP = Math.max(0, prev - damage);
          setMonsterFlash(true);
          setTimeout(() => setMonsterFlash(false), 100);
          return newHP;
        });
        setHeroCooldown(3000);
      }

      if (Math.random() < 0.1 && !isTargetVisible) {
        setIsTargetVisible(true);
        moveTarget();
      } else if (isTargetVisible) {
        setStreak(0);
      }
    }, 100);

    return () => clearInterval(gameLoop);
  }, [gameState, isPaused, showTutorial, monsterCooldown, heroCooldown, monsterDamage, heroDamage, monsterHP, heroHP, isTargetVisible, isHeroDefeated, isGameEnding, moveTarget, endGame, defeatHero, calculateDamage]);

  const value = {
    gameState,
    setGameState,
    wave,
    setWave,
    exp,
    setExp,
    monsterHP,
    setMonsterHP,
    monsterMaxHP,
    setMonsterMaxHP,
    monsterDamage,
    setMonsterDamage,
    heroHP,
    setHeroHP,
    heroMaxHP,
    setHeroMaxHP,
    heroDamage,
    setHeroDamage,
    monsterCooldown,
    heroCooldown,
    isTargetVisible,
    targetPosition,
    damageLevel,
    healthLevel,
    isHeroDefeated,
    showTutorial,
    setShowTutorial,
    isPaused,
    setIsPaused,
    monsterFlash,
    heroFlash,
    streak,
    isCriticalHit,
    criticalChance,
    isGameEnding,
    startNewFight,
    handleTargetClick,
    handleUpgrade,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;