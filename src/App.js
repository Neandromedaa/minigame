import BattleField from './components/Battle/BattleField';
import Start from './components/Start/Start';
import End from './components/End/End';
import SkillInfo from './components/skillInfo/SkillInfo';
import './App.scss';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('start');
  const [winner, setWinner] = useState();
  return (
    <>
      <SkillInfo/>
      <div className='mainField'>
        {mode === 'start' && <Start onStartClick={() => setMode('battle')}/>}
        {mode === 'battle' && <BattleField onBattleEnd={winner => {
          setWinner(winner);
          setMode('end')
        }}/>}
        {mode === 'end' && <End winner={winner}/>}
      </div>
    </>
    
  );
}

export default App;
