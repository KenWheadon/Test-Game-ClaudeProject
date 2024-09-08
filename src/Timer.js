import React from 'react';

const Timer = ({ cooldown, maxCooldown }) => {
  const percentage = (cooldown / maxCooldown) * 100;
  
  return (
    <div className="timer">
      <div className="timer-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default Timer;