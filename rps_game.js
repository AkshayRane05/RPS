const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
    const rI = Math.floor(Math.random() * 3);

    return choices[rI];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice:");
    if (choice === null) return "Invalid Input!";

    choice = choice.toLowerCase();

    if (choice === 'rock' || choice === 'r') {
        return choices[0];
    } else if (choice === 'paper' || choice === 'p') {
        return choices[1];
    } else if (choice === 'scissors' || choice === 's') {
        return choices[2];
    } else {
        return "Invalid Input!";
    }
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        return 1;  // Human wins
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        return -1;  // Computer wins
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        if (humanChoice === "Invalid Input!") {
            console.log("Invalid input, please enter valid input.");
            i--;  // Decrement i to retry the round
            continue;  // Skip the rest of the loop and ask for input again
        }

        const computerChoice = getComputerChoice(choices);
        let result = playRound(humanChoice, computerChoice);

        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations, You win the game...");
    } else if (computerScore > humanScore) {
        console.log("You lose, Better luck next time...");
    } else {
        console.log("Unfortunately, it's a tie game...");
    }
}
