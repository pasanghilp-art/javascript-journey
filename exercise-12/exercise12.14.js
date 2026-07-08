function removeEgg(foods){
    return foods.filter((food)=> food !== 'egg');
}
console.log(removeEgg(['ham','egg','egg','cat','egg']));