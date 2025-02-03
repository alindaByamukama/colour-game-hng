
// Predefined set of colors
const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

let targetColor = '';
let score = 0;
let gameOver = false;

// DOM elements
const colorBox = document.getElementById('targetColor');
const colorOptionsContainer = document.getElementById('colorOptions');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreDisplay = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');
const resetScoreToggle = document.getElementById('resetScoreToggle');

// Initialize the game
function initGame() {
    gameStatus.textContent = '';
    // Randomly select a target color from COLORS
    targetColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    colorBox.style.backgroundColor = targetColor;
    
    // Clear previous options
    colorOptionsContainer.innerHTML = '';
    
    // Create 6 color option buttons (using the same set for simplicity)
    COLORS.forEach(color => {
    const btn = document.createElement('button');
    btn.setAttribute('data-testid', 'colorOption');
    btn.style.backgroundColor = color;
    btn.disabled = false; 
    btn.addEventListener('click', () => handleGuess(color, btn));
    colorOptionsContainer.appendChild(btn);
    });

    // Set flag to allow new guesses
    gameOver = false;
}

// Handle user guesses
function handleGuess(selectedColor, button) {
    // If the game round is already over, ignore further guesses
    if (gameOver) return;

    // Clear any previous animations
    button.classList.remove('fade-out', 'celebrate');
    
    if (selectedColor === targetColor) {
    gameStatus.textContent = 'Correct!';
    gameStatus.style.color = 'green';
    score++;
    scoreDisplay.textContent = score;
    gameOver = true;

    // Add celebration animation to the target box
    colorBox.classList.add('celebrate');

    // Disable all color option buttons so no further guesses can be made
    disableColorOptions();
    } else {
    gameStatus.textContent = 'Wrong, try again!';
    gameStatus.style.color = 'red';
    // Add fade out effect on wrong guess button
    button.classList.add('fade-out');
    }
    
    // Remove animation classes after animation completes (0.5s)
    setTimeout(() => {
    button.classList.remove('fade-out', 'celebrate');
    }, 500);
}

// Disable all color option buttons
function disableColorOptions() {
    const buttons = colorOptionsContainer.querySelectorAll('[data-testid="colorOption"]');
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

// New Game button event listener
newGameButton.addEventListener('click', () => {
  // If the reset score checkbox is checked, reset the score
  if (resetScoreToggle.checked) {
    score = 0;
    scoreDisplay.textContent = score;
    // Optionally, uncheck the box automatically
    resetScoreToggle.checked = false;
  }
  initGame();
});

// Start the game on initial load
initGame();