function removeEgg(foods){
    const result =[];
    for(i=0; i<foods.length; i++){
        if(foods[i] === 'egg'){
            continue;
        }
        result.push(foods[i]);
    }
    return foods;
}

console.log(findIndex(['hey','egg','hi']));