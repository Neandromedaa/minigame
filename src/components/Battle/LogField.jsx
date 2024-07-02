import React, { useEffect, useState } from 'react';
import Dice from '../dice/Dice';
import { damageSkill } from '../serviceFuntions/actions';

function LogField({ turn, enemyAction, heroAction, infoDamage, dice }) {
  const [log, setLog] = useState('no moves');

  useEffect(() => {
    turn === 0 ? setLog(`Hero ${heroAction} ${infoDamage}`) : setLog(`Enemy ${enemyAction} ${infoDamage}`)
  }, [heroAction, enemyAction, infoDamage])
  
  useEffect(() => {
    setLog('no moves');
  }, [])

  return (
    <>
      <Dice dice={dice}/>
      <div>{log}</div>
    </>
    
  );
}

export default LogField;