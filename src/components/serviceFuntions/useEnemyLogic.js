import { useState, useEffect, useMemo } from "react";
import { dice, damageSkill, heal } from './actions';

export const useEnemyLogic = turn => {
    const [enemyAction, setEnemyAction] = useState('');

    // useEffect(() => {
    //     if (turn === 1){
    //         const options = ['dice', 'damageSkill', 'heal'];
    //         // setEnemyAction(options[Math.floor((Math.random()) * (options.length))]);
    //         let rnd = Math.floor((Math.random()) * (options.length));
    //         if(rnd === 0) setEnemyAction(options[0]);
    //         else if(rnd === 1) setEnemyAction(options[1]);
    //         else if(rnd === 2) setEnemyAction(options[2]);
    //     }

    // }, [turn])
    useMemo(() => {
        if (turn === 1){
            const options = ['dice', 'damageSkill', 'heal'];
            setEnemyAction(options[Math.floor((Math.random()) * (options.length))]);
        }
    }, [turn])
    
    return enemyAction;
}