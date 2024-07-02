import PlayerField from './PlayerField';
import LogField from './LogField';
import ButtonField from './ButtonField';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useBattleSequence } from '../serviceFuntions/useBattleSequence';
import { useEnemyLogic } from '../serviceFuntions/useEnemyLogic';
import {heroStats, enemyStats} from '../players/player';
import { wait } from '../serviceFuntions/actions';
import './battleField.scss';

function BattleField({ onBattleEnd }) {
    const [sequence, setSequence] = useState({});
    const [heroAction, setHeroAction] = useState();

    const {
        turn,
        inSequence,
        heroHealth,
        enemyHealth,
        infoDamage,
        diceRoll,
    } = useBattleSequence(sequence);

    const enemyAction = useEnemyLogic(turn, setSequence, inSequence);

    

    useEffect(() => {
        if(enemyAction && turn === 1 && !inSequence){
            setSequence({ turn, mode: enemyAction});
        }
    }, [turn, enemyAction])
    

    useEffect(() => {
        if(heroHealth === 0 || enemyHealth === 0){
            (async() => {
                await wait(1000);
                onBattleEnd(heroHealth === 0 ? enemyStats : heroStats)
            })()
        }
    }, [enemyHealth, heroHealth, onBattleEnd])

    return (
        <div className='battleField'>
            <div className='battleField__players'>
                <PlayerField 
                    player={heroStats.color}
                    maxHealth={heroStats.health}
                    currentHealth={heroHealth}
                    img={heroStats.img}
                    name={heroStats.name}
                />
                <PlayerField
                    player={enemyStats.color}
                    maxHealth={enemyStats.health}
                    currentHealth={enemyHealth}
                    img={enemyStats.img}
                    name={enemyStats.name}
                />
            </div>
            <LogField turn={turn} dice={diceRoll} enemyAction={enemyAction} heroAction={heroAction} infoDamage={infoDamage}/>
            {!inSequence && turn === 0 && 
            <ButtonField 
                onDice={() => {
                    setHeroAction('dice');
                    setSequence({ turn, mode: 'dice'})
                }}    
                onDamageSkill={() => {
                    setHeroAction('damageSkill');
                    setSequence({ turn, mode: 'damageSkill'})
                }}    
                onHeal={() => {
                    setHeroAction('heal');
                    setSequence({ turn, mode: 'heal'})
                }}    
            />
            }
            
        </div>
    );
}

export default BattleField;