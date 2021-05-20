'use strict';
const x = function(){
    console.log(23);
}

let randomNum = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomNum;

let score = 10;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;

    console.log(guess, typeof guess);
    console.log(randomNum, typeof randomNum);

    if(!guess){
        displayMessage ( '⛔ No Number');
    }


    else if(Number(guess) === randomNum){
        displayMessage ( '🎉 Correct Number..!');
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }


    else if(guess !== randomNum){
        if(score > 1){
            // Assignment operator
            displayMessage( guess > randomNum ? '📈 Too High' : '📉 Too Low');
            score-- ;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage = '🤯 You lose the game';   
            document.querySelector('.score').textContent = '0';

        }
    }
});

// Again
document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage ( 'Start Guessing...');
    document.querySelector('.highscore').textContent = highScore;
});

