import React from 'react';

function Dice({ dice }) {
  return (
    <div>{dice || 'Dice'}</div>
  );
}

export default Dice;