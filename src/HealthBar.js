import React from 'react';

const HealthBar = ({ current, max }) => {
  const percentage = (current / max) * 100;
  
  return (
    <div className="health-bar-container" style={{ width: '100px', height: '10px', border: '1px solid #000', backgroundColor: '#ddd' }}>
      <div 
        className="health-bar-fill" 
        style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          backgroundColor: percentage > 50 ? 'green' : percentage > 25 ? 'yellow' : 'red',
          transition: 'width 0.3s ease-in-out'
        }}
      />
      <div className="health-text" style={{ position: 'absolute', fontSize: '10px' }}>
        {current}/{max}
      </div>
    </div>
  );
};

export default HealthBar;