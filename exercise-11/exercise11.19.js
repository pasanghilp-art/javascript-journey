function removeEgg(foods){
    const result =[];
    let eggremoved = 0;
    for(i=0; i<foods.length; i++){
        foods.reverse();
        if(foods[i] === 'egg' && eggremoved<=2){
            eggRemoved++;
            continue;
        }
        result.push(foods[i]);
    }
    return foods;
}

console.log(findIndex(['hey','egg','egg','djalok','egg']));