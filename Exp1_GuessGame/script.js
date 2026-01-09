let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
let guesses = [];

const inp = document.querySelector('#guessInput');
const Btn = document.querySelector('#submitBtn');
const feedback = document.querySelector('#feedback');
const attemptsDisplay = document.querySelector('#attemptsLeft');
const historyDisplay = document.querySelector('#guessHistory');
const resetBtn = document.querySelector('#resetBtn');

Btn.addEventListener('click', checkGuess);
function checkGuess() {
    const userGuess = parseInt(inp.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }
    attemptsLeft--;
    guesses.push(userGuess);
    historyDisplay.textContent = guesses.join(', ');
    if (userGuess === randomNumber) {
        endGame(`Correct! The number was ${randomNumber}. You win!`, "green");
    } else if (attemptsLeft === 0) {
        endGame(`Game Over! The number was ${randomNumber}.`, "red");
    } else {
        feedback.textContent = userGuess > randomNumber ? "Too High!" : "Too Low!";
        feedback.style.color = "orange";
        attemptsDisplay.textContent = `Attempts remaining: ${attemptsLeft}`;
    }
    inp.value = '';
    inp.focus();
}
function endGame(message, color) {
    feedback.textContent = message;
    feedback.style.color = color;
    attemptsDisplay.textContent = `Attempts remaining: 0`;
    inp.disabled = true;
    Btn.disabled = true;
    resetBtn.style.display = "inline-block";
}

resetBtn.addEventListener('click', () => {
    location.reload();
});