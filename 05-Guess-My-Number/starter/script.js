'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage("⛔️ no Number");

        // when player wins
    } else if (guess == secretNumber) {
        displayMessage("🎉 Correct Number");
        document.querySelector('body').style.backgroundColor = "#60B347";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is too high 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("💥 You Loss the game!");
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
})