function removeEgg(foods){
    eggRemove = 0;
    return foods.filter((food)=>{
        if(food === 'egg' && eggRemoved<2){
            eggRemoved++;
            return false;
        }
        return true;
    });
}
console.log(remove(['ham','dog','egg','egg','egg']));