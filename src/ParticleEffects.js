import React, { useState, useEffect } from 'react';
import './ParticleEffects.css';

const ParticleEffects = ({ type, position }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (type === 'hit' || type === 'defeat') {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        size: Math.random() * 4 + 2,
        color: type === 'hit' ? '#ff0000' : '#ffff00',
      }));
      setParticles(newParticles);
    } else if (type === 'critical') {
      setParticles([{ id: 'critical', x: 0, y: -20 }]);
    }

    const timer = setTimeout(() => setParticles([]), 500);
    return () => clearTimeout(timer);
  }, [type, position]);

  return (
    <div className="particle-container" style={{ left: position.x, top: position.y }}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle ${type}`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
        >
          {type === 'critical' && 'CRITICAL'}
        </div>
      ))}
    </div>
  );
};

export default ParticleEffects;