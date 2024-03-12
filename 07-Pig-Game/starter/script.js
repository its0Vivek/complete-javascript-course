'use strict';
const player0E1 = document.querySelector('.player--0')
const player0E2 = document.querySelector('.player--1')
const score0E1 = document.querySelector('#score--0');
const score0E2 = document.querySelector('#score--1')
const current0E1 = document.getElementById('current--0')
const current0E2 = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHOld = document.querySelector('.btn--hold')


let scores, currentScore, activePlayer, playing;




const init = function () {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true

    score0E1.textContent = 0;
    score0E2.textContent = 0;
    current0E1.textContent = 0;
    current0E2.textContent = 0;

    diceEl.classList.add('hidden');
    player0E1.classList.remove('player--winner')
    player0E2.classList.remove('player--winner')
    player0E1.classList.add('player--active')
    player0E2.classList.remove('player--active')
};
init()

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`)
        .textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0E1.classList.toggle('player--active')
    player0E2.classList.toggle('player--active')
}


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // Generating a random dice roll
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice)

        // displaying dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check for rolled 1: if true , switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`)
                .textContent = currentScore;
        } else {
            // Switch the player
            switchPlayer()
        }
    }

})

btnHOld.addEventListener('click', function () {
    if (playing) {

        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            switchPlayer()
        }

    }
})


btnNew.addEventListener('click', init)




