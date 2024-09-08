import React from 'react';

const TargetButton = ({ isVisible, onClick, position }) => {
  if (!isVisible) return null;

  const style = {
    position: 'absolute',
    top: `${position.top}%`,
    left: `${position.left}%`,
    width: '40px',
    height: '40px',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button className="target-button" onClick={onClick} style={style}>
      X
    </button>
  );
};

export default TargetButton;