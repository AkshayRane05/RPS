let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

function playRound(humanChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = getComputerChoice(choices);
    let result = determineWinner(humanChoice, computerChoice);

    if (result === 1) {
        humanScore++;
    } else if (result === -1) {
        computerScore++;
    }

    updateResult(humanChoice, computerChoice, result);
    checkWinner();
}

function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 1;
    } else {
        return -1;
    }
}

function updateResult(humanChoice, computerChoice, result) {
    // Make the result div visible when the game starts
    resultDiv.style.display = "block";

    let resultText = `You chose ${humanChoice}, computer chose ${computerChoice}. `;
    if (result === 1) {
        resultText += "You win this round!";
    } else if (result === -1) {
        resultText += "You lose this round!";
    } else {
        resultText += "It's a tie!";
    }
    resultText += ` Score - You: ${humanScore}, Computer: ${computerScore}`;
    resultDiv.textContent = resultText;
}

function checkWinner() {
    if (humanScore === 5) {
        resultDiv.textContent += " Congratulations, You win the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent += " You lose, Better luck next time!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent += " Starting a new game...";
    setTimeout(() => {
        resultDiv.style.display = "none"; // Hide the result box for the new game
        resultDiv.textContent = ""; // Clear the result text
    }, 3000);
}
