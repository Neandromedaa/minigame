import React from 'react';
import './battleField.scss'

function PlayerField({ player, maxHealth, currentHealth, img, name }) {
  return (
    <div className='playerField' style={{background: player}}>
      <img className='playerField__img' src={img}></img>
      <div>{name}</div>
      <div className='playerField__healthBar'>
        <div className='healthBar__label'>HP</div>
        <div className='healthBar__bar' style={{width: `${currentHealth / maxHealth * 100}%`}}>{currentHealth}/{maxHealth}</div>
      </div>
    </div>
  );
}

export default PlayerField;