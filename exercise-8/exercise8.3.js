const ball1={
    name:"basketball",
    cost: 2095
}

const ball2={
    name:"football",
    cost: 67
}

function same(obj1,obj2){
    if(obj1 === obj2){
        return true;
    }
    return false;
}
console.log(same(ball1,ball2));