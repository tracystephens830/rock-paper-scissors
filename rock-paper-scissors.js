//randomize computers choice

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

//assign random number to a value
  if (num === 0) {
    return "rock"
  } else if (num === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

//prompt player for a choice
function getPlayerChoice() {
  let choice = prompt("Choose your weapon! Rock, paper, or scissors?", "Your Weapon");
  let weapon = choice.toLowerCase();
  if (choice === null || choice === "" || choice === undefined) {
    return getPlayerChoice();
  } else {
    return weapon;
  }
}

//store player and computers choices and which round currently on
let pScore = 0;
let cScore = 0;
let rnd = 1;

//compare players choice and computers choice and add one to the winners score
function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
 if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
  alert("You lose this round!");
  ++cScore;
 } else if (playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "rock" && computerChoice == "scissors") {
  alert("You won this round!");
  ++pScore;
 } else if (playerChoice == computerChoice) {
  alert("You tied!")
 } else {
  alert("That wasn't a weapon you could choose!")
 }
 console.log("Player score: " + pScore)
 console.log("Computer score: " + cScore)
 console.log("Round " + rnd + "/5")
}

//play the game for 5 rounds and log who won
for (let round = 1; round <= 5; round++) {playRound(); rnd++;
  if (pScore >= cScore && round == 5)  {
    console.log("You won the game!")
  } else if (pScore <= cScore && round == 5) {
    console.log("You lost the game :(")
  } else if (pScore == cScore && round == 5) {
    console.log("You tied")
  } else {
    console.log("")
  }
}
