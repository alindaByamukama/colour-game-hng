
// Predefined set of colors
const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

let targetColor = '';
let score = 0;

// DOM elements
const colorBox = document.getElementById('targetColor');
const colorOptionsContainer = document.getElementById('colorOptions');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreDisplay = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

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
    btn.addEventListener('click', () => handleGuess(color, btn));
    colorOptionsContainer.appendChild(btn);
    });
}

// Handle user guesses
function handleGuess(selectedColor, button) {
    // Clear any previous animations
    button.classList.remove('fade-out', 'celebrate');
    
    if (selectedColor === targetColor) {
    gameStatus.textContent = 'Correct!';
    gameStatus.style.color = 'green';
    score++;
    scoreDisplay.textContent = score;
    // Add celebration animation to the target box
    colorBox.classList.add('celebrate');
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

// Reset the game state, including score and current round
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    initGame();
}

// Reset the game for a new round
newGameButton.addEventListener('click', () => {
    initGame();
});

// Event listener for Reset Game button (resets everything)
resetButton.addEventListener('click', () => {
    resetGame();
});

// Start the game on initial load
initGame();