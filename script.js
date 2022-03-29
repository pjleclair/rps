function computerPlay () {
    const options = ["rock", "paper", "scissors"];
    let outcome = options[Math.floor(Math.random() * 3)]
    return outcome;
}
function playRound (player, cpu) {
    player = player.toLowerCase();
    if (player==cpu) {
        ties++;
        return("Unbelievable - It's a tie!");
    } else {
        switch(player) {
            case "rock":
                if (cpu=="scissors") {
                    playerScore++;
                    return(`Great choice old boy! The computer chose ${cpu}, you win.`);/*placeholder*/
                } else {                    
                    computerScore++;
                    return(`Sorry chum, the computer chose ${cpu}, you've lost.`);
                }
            case "paper":
                if (cpu=="rock") {
                    playerScore++;
                    return(`Great choice old boy! The computer chose ${cpu}, you win.`);/*placeholder*/
                } else {
                    computerScore++;
                    return(`Sorry chum, the computer chose ${cpu}, you've lost.`);
                }
            case "scissors":
                if (cpu=="paper") {
                    playerScore++;
                    return(`Great choice old boy! The computer chose ${cpu}, you win.`);/*placeholder*/
                } else {
                    computerScore++;
                    return(`Sorry chum, the computer chose ${cpu}, you've lost.`);
                }
            default:
                return("Please re-read the available choices (not caps sensitive).")
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
        winner = "The player";
    else if (playerScore == computerScore)
        winner = "Nobody"
    else
        winner = "The computer";
    console.log(`${winner} is today's victor.`)
}

let playerScore = 0, computerScore = 0, ties = 0;
let winner;

let playerSelection = prompt("Choose wisely: Rock, Paper, or Scissors?");
/*let rounds = prompt("How many rounds, friend?");

hardcoded for now*/
let rounds = 5;

game(rounds);