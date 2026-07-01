let score ={
    wins: 0,
    loses: 0
}

if(guess === result){
    score.wins++;
} else {
    score.loses++;
}
console.log(score);