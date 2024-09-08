import React, { useState, useEffect } from 'react';
import { getRandomHero } from './HeroSprites';
import './Hero.css';

const Hero = ({ wave, isAttacking }) => {
  const [currentHero, setCurrentHero] = useState(null);

  useEffect(() => {
    setCurrentHero(getRandomHero());
  }, [wave]);

  return (
    <div className={`hero ${isAttacking ? 'attacking' : ''}`}>
      {currentHero}
    </div>
  );
};

export default Hero;