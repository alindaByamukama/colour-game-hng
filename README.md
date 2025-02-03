# Color Guessing Game

A simple and engaging color guessing game built with HTML, CSS, and JavaScript. In this game, players must guess the target color (displayed as a colored box) by selecting one of the six available color options. The game updates the score for each correct guess, and players can start a new game at any time.

## Features

- **Target Color Display:** A box showing a randomly selected color.
- **Color Options:** Six color buttons that players can click to guess the target color.
- **Game Instructions:** Clear instructions to guide the player.
- **Game Status:** Feedback on whether a guess is correct or incorrect.
- **Score Counter:** Increments for every correct guess.
- **New Game Button:** Resets the game to start a new round.
- **Responsive Design:** The layout adapts to desktop, tablet, and mobile screens.
- **Animations:** Visual feedback for correct (celebration effect) and incorrect (fade-out effect) guesses.

## Getting Started

### Prerequisites

To run this project, you only need a web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/color-guessing-game.git
   ```
2. **Navigate to the project directory:**
    ```bash
    cd color-guessing-game
    ```
3. **Open index.html in your browser:**
- You can double-click the index.html file, or
- Run a local development server (e.g., using VS Code Live Server extension).

### Deployment
This project is hosted on ... Netlify <a target='_blank' src='https://color-game-hng.netlify.app/'>HERE</a>.

**Deploying on Vercel:**
- Create a new project on Vercel.
- Import your Git repository.
- Follow the on-screen instructions to deploy.

**Deploying on Netlify:**
- Drag and drop your project folder into the Netlify dashboard.
- Alternatively, connect your Git repository to Netlify for continuous deployment.

### Usage

**Objective:**  
Guess the target color displayed in the box.

#### During the Game:

- The board is set up with a random target color and six color option buttons.
- If you select a wrong color, you will see a “Wrong, try again!” message and you can continue guessing.
- When you select the correct color, you will see a “Correct!” message, your score increments, and all color buttons become disabled so that no further guesses can be made for that round.

#### New Game Button & Score Reset:

- Clicking the **New Game** button resets the board for a new round.
- Next to the **New Game** button is a **Reset Score** checkbox. If you check this box before starting a new game, your score will be reset to 0 when you click **New Game**. If the checkbox is not selected, your score carries over into the new round.
- After clicking **New Game**, the board is reinitialized with a new target color and active color options, allowing you to continue playing.

### Code Overview
- **HTML:** Defines the structure of the game.
- **CSS:** Provides styling and responsive design.
- **JavaScript:** Implements game logic, event handling, and animations.

### Contributing
- Alinda B.

### License
This project is licensed under the MIT License.

### Acknowledgments
- **HNG Internship 2025**




