import React from 'react';

const HeroSprites = [
  // Knight
  <svg key="knight" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="8" width="16" height="16" fill="#C0C0C0" />
    <rect x="16" y="24" width="32" height="24" fill="#808080" />
    <rect x="16" y="48" width="8" height="8" fill="#808080" />
    <rect x="40" y="48" width="8" height="8" fill="#808080" />
    <circle cx="28" cy="16" r="2" fill="#000" />
    <circle cx="36" cy="16" r="2" fill="#000" />
    <rect x="28" y="32" width="8" height="4" fill="#FFD700" />
  </svg>,

  // Archer
  <svg key="archer" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="8" width="16" height="16" fill="#8B4513" />
    <rect x="16" y="24" width="32" height="24" fill="#006400" />
    <rect x="16" y="48" width="8" height="8" fill="#006400" />
    <rect x="40" y="48" width="8" height="8" fill="#006400" />
    <circle cx="28" cy="16" r="2" fill="#000" />
    <circle cx="36" cy="16" r="2" fill="#000" />
    <path d="M8 32 L56 32" stroke="#8B4513" strokeWidth="2" />
    <path d="M56 28 L56 36" stroke="#8B4513" strokeWidth="2" />
  </svg>,

  // Mage
  <svg key="mage" width="64" height="64" viewBox="0 0 64 64">
    <polygon points="32,8 24,24 40,24" fill="#4B0082" />
    <rect x="24" y="24" width="16" height="24" fill="#8A2BE2" />
    <rect x="16" y="48" width="32" height="8" fill="#8A2BE2" />
    <circle cx="28" cy="16" r="2" fill="#FFD700" />
    <circle cx="36" cy="16" r="2" fill="#FFD700" />
    <path d="M24 36 Q32 44 40 36" fill="none" stroke="#FFD700" strokeWidth="2" />
  </svg>,

  // Rogue
  <svg key="rogue" width="64" height="64" viewBox="0 0 64 64">
    <rect x="24" y="8" width="16" height="16" fill="#696969" />
    <rect x="16" y="24" width="32" height="24" fill="#2F4F4F" />
    <rect x="16" y="48" width="8" height="8" fill="#2F4F4F" />
    <rect x="40" y="48" width="8" height="8" fill="#2F4F4F" />
    <circle cx="28" cy="16" r="2" fill="#FF0000" />
    <circle cx="36" cy="16" r="2" fill="#FF0000" />
    <path d="M28 32 L36 32" stroke="#FF0000" strokeWidth="2" />
  </svg>
];

export const getRandomHero = () => {
  return HeroSprites[Math.floor(Math.random() * HeroSprites.length)];
};

export default HeroSprites;