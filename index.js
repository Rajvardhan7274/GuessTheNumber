const secretEl = document.getElementById('secret');
const guessInput = document.getElementById('guess');
const messageEl = document.getElementById('message');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');

let secretNumber = Math.floor(Math.random() * 20 + 1);
let currentScore = 20;
let highScore = 0;

function resetGame() {
    currentScore = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    scoreEl.textContent = currentScore;
    secretEl.textContent = '?';
    guessInput.value = '';
    messageEl.textContent = 'Start guessing...';
}

function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 20) {
        messageEl.textContent = "❌ Enter a number between 1 and 20!";
        return;
    }

    if (userGuess === secretNumber) {
        messageEl.textContent = "🎉 Correct Number!";
        secretEl.textContent = secretNumber;
        if (currentScore > highScore) {
            highScore = currentScore;
            highscoreEl.textContent = highScore;
        }
    } else {
        if (currentScore > 1) {
            currentScore--;
            messageEl.textContent = userGuess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
            scoreEl.textContent = currentScore;
        } else {
            messageEl.textContent = "💥 Game Over!";
            scoreEl.textContent = 0;
        }
    }
}
