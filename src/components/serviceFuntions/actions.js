export const dice = () => {
    const diceRoll = Math.floor(Math.random() * 20);
    console.log(diceRoll);
    if(diceRoll <= 5) return {result: 0, diceResult: diceRoll};
    else if(diceRoll <= 15) return {result: 10, diceResult: diceRoll};
    else return {result: 20, diceResult: diceRoll};
}

export const damageSkill = () => {
    const diceRoll = Math.floor(Math.random() * 20);
    console.log(diceRoll);
    if(diceRoll <= 4) return {result: 0, diceResult: diceRoll};
    else if(diceRoll <= 17) return {result: Math.floor(diceRoll * 1.2), diceResult: diceRoll};
    else return {result: 25, diceResult: diceRoll};
}

export const heal = () => {
    const diceRoll = Math.floor(Math.random() * 20);
    console.log(diceRoll);
    return {result: diceRoll * 2, diceResult: diceRoll};
}

export const wait = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
    }, ms);
});