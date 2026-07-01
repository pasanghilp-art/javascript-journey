let score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    loses: 0
}

function playGame(guess) {
        const randomNumber = Math.random();
        const result = randomNumber < 0.5 ? 'heads' : 'tails';

        console.log(guess === result ? 'You win!' : 'You lose!');

        if(guess === result){
            score.wins++;
        } else {
            score.loses++;
        }
        console.log(score);
        localStorage.setItem('Score',JSON.stringify(score));
        }