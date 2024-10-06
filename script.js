/*getComputerChoice() function created  - it will return one of the following string values: "rock", "paper", "scissors"*/


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        console.log("Computer Choice: Rock")
        return "rock"
    } else if (computerChoice == 1) {
        console.log("Computer: Paper")
        return "paper"
    } else {
        console.log("Computer: Scissors")
        return "scissors"
    }
}

/* Logic for the Human choice - getHumanChoice() function will take input from user through prompt and returns it*/
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice").toLowerCase()
    console.log("Your Choice: " + humanChoice)
    return humanChoice
}


// Logic to play the entire game

function playGame() {
    // Declaring the player score variables and initializing it to zero
    let humanScore = 0
    let computerScore = 0

    let round
    for (round = 1; round <= 5; round++) {

        console.log("Round " + round)
        // Logic to play a single round
        function playRound(humanChoice, computerChoice) {
            if (humanChoice == "rock" && computerChoice == "paper") {
                console.log("Computer wins this round")
                return computerScore++
            } else if (humanChoice == "rock" && computerChoice == "scissors") {
                console.log("Human wins this round")
                return humanScore++
            } else if (humanChoice == "paper" && computerChoice == "rock") {
                console.log("Human wins this round")
                return humanScore++
            } else if (humanChoice == "paper" && computerChoice == "scissors") {
                console.log("Computer wins this round")
                return computerScore++
            } else if (humanChoice == "scissors" && computerChoice == "paper") {
                console.log("Human wins this round")
                return humanScore++
            } else if (humanChoice == "scissors" && computerChoice == "rock") {
                console.log("Computer wins this round")
                return computerScore++
            } else {
                console.log("It's a tie")
            }
        }
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        console.log("Your Score = " + humanScore)
        console.log("Computer Score = " + computerScore)
    }

    if(humanScore > computerScore){
        console.log("You win the Game!")
    }else if(humanScore == computerScore){
        console.log("The Game has Tied!")
    }else{
        console.log("Computer wins the Game!")
    }
}

playGame()