import React from 'react';
import './TutorialModal.css';

const TutorialModal = ({ onClose }) => {
  return (
    <div className="tutorial-modal">
      <div className="tutorial-content">
        <h2>How to Play</h2>
        <ul>
          <li>Your monster fights waves of heroes</li>
          <li>Click the target to speed up your monster's attacks</li>
          <li>Defeat heroes to earn EXP</li>
          <li>Use EXP to upgrade your monster's health and damage</li>
          <li>See how many waves you can survive!</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TutorialModal;