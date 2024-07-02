import React from 'react';

function ButtonField({ onDice, onDamageSkill, onHeal }) {
  return (
    <div>
      <button onClick={onDice}>Dice</button>
      <button onClick={onDamageSkill}>Damage skill</button>
      <button onClick={onHeal}>Heal</button>
    </div>
  );
}

export default ButtonField;