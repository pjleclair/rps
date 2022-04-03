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

function game () {
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    roundsComplete++;
    results.textContent=`The scores are as follows:
    Player: ${playerScore}
    Computer: ${computerScore}
    Ties: ${ties}`;
    if (roundsComplete==rounds) {
        if (playerScore > computerScore)
            winner = "The player";
        else if (playerScore == computerScore)
            winner = "Nobody"
        else
            winner = "The computer";
        victor.textContent=`${winner} is today's victor.`;
    }
}

let playerScore = 0, computerScore = 0, ties = 0;
let winner;


/*let playerSelection = prompt("Choose wisely: Rock, Paper, or Scissors?");*/
let rounds = prompt("How many rounds, friend?");

//hardcoded for now
//let rounds = 5;
let roundsComplete = 0;
const results = document.querySelector('.results');
const victor = document.querySelector('.victor');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
});


//game(5);