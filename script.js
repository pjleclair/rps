function computerPlay () {
    const options = ["rock", "paper", "scissors"];
    let outcome = options[Math.floor(Math.random() * 3)]
    return outcome;
}
function playRound (player, cpu) {
    player = player.toLowerCase();
    if (player==cpu) {
        console.log("Unbelievable - It's a tie!");
        ties++;
    } else {
        switch(player) {
            case "rock":
                if (cpu=="scissors") {
                    console.log(`Great choice old boy! The computer chose ${cpu}, you win.`);/*placeholder*/
                    playerScore++;
                    break;
                } else {
                    console.log(`Sorry chum, the computer chose ${cpu}, you've lost.`);
                    computerScore++;
                    break;
                }
            case "paper":
                if (cpu=="rock") {
                    console.log(`Great choice old boy! The computer chose ${cpu}, you win.`);/*placeholder*/
                    playerScore++;
                    break;
                } else {
                    console.log(`Sorry chum, the computer chose ${cpu}, you've lost.`);
                    computerScore++;
                    break;
                }
            case "scissors":
                if (cpu=="paper") {
                    console.log(`Great choice old boy! The computer chose ${cpu}, you win.`);/*placeholder*/
                    playerScore++;
                    break;
                } else {
                    console.log(`Sorry chum, the computer chose ${cpu}, you've lost.`);
                    computerScore++;
                    break;
                }
            default:
                console.log("hmm.")
        }
    }
}

function game (num) {
    let i = 0;
    while (i < num) {
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        i++;
    }
    console.log(`The final scores are as follows:
    Player: ${playerScore}
    Computer: ${computerScore}
    Ties: ${ties}`);
    if (playerScore > computerScore)
        winner = "player";
    else if (playerScore == computerScore)
        winner = "random() function"
    else
        winner = "computer";
    console.log(`The ${winner} is today's victor.`)
}

let playerScore = 0, computerScore = 0, ties = 0;
let winner;

let playerSelection = prompt("Choose wisely: Rock, Paper, or Scissors?");
let rounds = prompt("How many rounds, friend?");
game(rounds);