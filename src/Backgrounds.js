import React from 'react';

export const StartBackground = () => (
  <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0, zIndex: -1}}>
    <defs>
      <linearGradient id="startGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4a0e4e" />
        <stop offset="100%" stopColor="#81185b" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#startGradient)" />
    <circle cx="10%" cy="20%" r="5%" fill="#ffffff" fillOpacity="0.1" />
    <circle cx="85%" cy="75%" r="7%" fill="#ffffff" fillOpacity="0.1" />
    <circle cx="50%" cy="50%" r="3%" fill="#ffffff" fillOpacity="0.1" />
  </svg>
);

export const BattleBackground = () => (
  <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0, zIndex: -1}}>
    <defs>
      <pattern id="battlePattern" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="50" height="50" fill="#2c3e50" />
        <circle cx="25" cy="25" r="10" fill="#34495e" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#battlePattern)" />
    <rect x="5%" y="5%" width="90%" height="90%" fill="none" stroke="#ecf0f1" strokeWidth="2" strokeDasharray="10,5" />
  </svg>
);

export const GameOverBackground = () => (
  <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0, zIndex: -1}}>
    <defs>
      <radialGradient id="gameOverGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#2c3e50" />
        <stop offset="100%" stopColor="#1a252f" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#gameOverGradient)" />
    <path d="M0 0 L100 100 M100 0 L0 100" stroke="#34495e" strokeWidth="2" />
  </svg>
);