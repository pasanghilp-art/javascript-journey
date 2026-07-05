function removeEgg(foods){
    const result =[];
    let eggremoved = 0;
    const CopyEggReverse = foods.slice().reverse();
    for(i=0; i<CopyEggReverse.length; i++){
        if(CopyEggReverse[i] === 'egg' && eggremoved<=2){
            eggRemoved++;
            continue;
        }
        result.push(CopyEggReverse[i]);
    }
    return result.reverse();
}

console.log(findIndex(['hey','egg','egg','djalok','egg']));