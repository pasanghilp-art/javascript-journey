const ball1={
    name:"basketball",
    cost: 2095
}

const ball2={
    name:"football",
    cost: 67
}

function compare(obj1, obj2){
    if(obj1>obj2){
        return obj1;
    }
    return obj2;
}
console.log(compare(ball1,ball2));