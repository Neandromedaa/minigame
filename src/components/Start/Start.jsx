import React from 'react';
import './start.scss';

function Start({ onStartClick }) {
  return (
    <div className='startField'>
        <div>Start</div>
        <button onClick={onStartClick}>Start</button>
    </div>
  );
}

export default Start;