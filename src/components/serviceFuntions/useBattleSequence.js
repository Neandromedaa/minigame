import { useEffect, useMemo, useState } from "react";
import { dice, damageSkill, heal, wait } from './actions';
import {heroStats, enemyStats} from '../players/player';

export const useBattleSequence = sequence => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);
    const [heroHealth, setHeroHealth] = useState(heroStats.health);
    const [enemyHealth, setEnemyHealth] = useState(enemyStats.health);
    // const [heroAction, setHeroAction] = useState();
    const [infoDamage, setInfoDamage] = useState();
    const [diceRoll, setDiceRoll] = useState();

    useEffect(() => {
        const {turn, mode} = sequence;

        if(mode){
            switch (mode) {
                case 'dice': {
                    const diceDamage = dice();
                    // console.log(diceDamage.diceResult, 'diceRoll.result')
                    setDiceRoll(diceDamage.diceResult);
                   
                    (async () => {
                        setInSequence(true);
                        // setHeroAction('dice');
                        setInfoDamage(diceDamage.result);
                        // await wait(1000);
                        
                        turn === 0 
                        ? setEnemyHealth(health => (health - diceDamage.result > 0 ? health - diceDamage.result : 0))
                        : setHeroHealth(health => (health - diceDamage.result > 0 ? health - diceDamage.result : 0))
                        console.log('dice', diceDamage.result, turn);
                        await wait(2000);

                        
                        
                        // await wait(100);
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();

                    break;
                }
                case 'damageSkill':{
                    const damageSkillDamage = damageSkill();
                    setDiceRoll(damageSkillDamage.diceResult);
                    (async () => {
                        setInSequence(true);
                        // setDiceRoll(damageSkillDamage.diceResult);
                        setInfoDamage(damageSkillDamage.result);
                        // await wait(1000);
                        
                        turn === 0 
                        ? setEnemyHealth(health => (health - damageSkillDamage.result > 0 ? health - damageSkillDamage.result : 0))
                        : setHeroHealth(health => (health - damageSkillDamage.result > 0 ? health - damageSkillDamage.result : 0))
                        console.log('damageSkill', damageSkillDamage.result, turn);
                        await wait(2000);
    
                        
                        
                        // await wait(100);
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();

                    break;
                }
                case 'heal':{
                    const healSkill = heal();
                    setDiceRoll(healSkill.diceResult);
                    // console.log(healSkill, healSkill.result, healSkill.diceResult);
                    (async () => {
                        setInSequence(true);
                        setInfoDamage(healSkill.result);
                        // await wait(1000);
                        // setHeroAction('heal');
                        console.log('heal', healSkill.result, turn);
                        turn === 0 
                        ? setHeroHealth(health => (health + healSkill.result <= heroStats.health ? health + healSkill.result : heroStats.health))
                        : setEnemyHealth(health => (health + healSkill.result <= enemyStats.health ? health + healSkill.result : enemyStats.health))
        
                        await wait(2000);
        
                        
                        
                        
                        // await wait(100);
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();

                    break;
                }
                default: {
                    break;
                }
            }
        }
    }, [sequence])
    
    
    return {
        turn,
        inSequence,
        heroHealth,
        enemyHealth,
        // heroAction,
        infoDamage,
        diceRoll,
    }
};