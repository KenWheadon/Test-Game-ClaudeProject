import React, { useState, useEffect } from 'react';
import './Monster.css';

const colorSchemes = [
  { body: '#8B4513', eye: '#FFD700', mouth: '#FF0000' },
  { body: '#4B0082', eye: '#00FFFF', mouth: '#FF1493' },
  { body: '#006400', eye: '#FFFFFF', mouth: '#FF4500' },
  { body: '#800000', eye: '#7FFF00', mouth: '#1E90FF' },
];

const Monster = ({ respawnTrigger, isAttacking }) => {
  const [colorScheme, setColorScheme] = useState(colorSchemes[0]);

  useEffect(() => {
    setColorScheme(colorSchemes[Math.floor(Math.random() * colorSchemes.length)]);
  }, [respawnTrigger]);

  return (
    <div className={`monster ${isAttacking ? 'attacking' : ''}`}>
      <svg width="64" height="64" viewBox="0 0 8 8">
        <g className="monster-body">
          <rect x="2" y="1" width="4" height="5" fill={colorScheme.body} />
          <rect x="1" y="2" width="1" height="3" fill={colorScheme.body} />
          <rect x="6" y="2" width="1" height="3" fill={colorScheme.body} />
          <rect x="3" y="6" width="1" height="1" fill={colorScheme.body} />
          <rect x="5" y="6" width="1" height="1" fill={colorScheme.body} />
          <rect x="3" y="2" width="1" height="1" fill={colorScheme.eye} className="eye" />
          <rect x="5" y="2" width="1" height="1" fill={colorScheme.eye} className="eye" />
          <rect x="3" y="4" width="3" height="1" fill={colorScheme.mouth} className="mouth" />
        </g>
      </svg>
    </div>
  );
};

export default Monster;