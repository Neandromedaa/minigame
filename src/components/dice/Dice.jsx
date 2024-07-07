import React from 'react';

function Dice({ dice }) {
  console.log(dice);
  return (
    <div>{dice === undefined ? 'Dice' : dice}</div>
  );
}

export default Dice;