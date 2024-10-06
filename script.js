document.addEventListener("DOMContentLoaded", function() {
    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            console.log("Computer Choice: Rock");
            return "rock";
        } else if (computerChoice === 1) {
            console.log("Computer: Paper");
            return "paper";
        } else {
            console.log("Computer: Scissors");
            return "scissors";
        }
    }

    function getHumanChoice() {
        let humanChoice = prompt("Enter your choice").toLowerCase();
        console.log("Your Choice: " + humanChoice);
        return humanChoice;
    }

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;
        let round = 1;

        function playRound() {
            if (round <= 5) {
                console.log("Round " + round);

                let humanSelection = getHumanChoice();
                let computerSelection = getComputerChoice();

                if (humanSelection === "rock" && computerSelection === "paper") {
                    console.log("Computer wins this round");
                    computerScore++;
                } else if (humanSelection === "rock" && computerSelection === "scissors") {
                    console.log("Human wins this round");
                    humanScore++;
                } else if (humanSelection === "paper" && computerSelection === "rock") {
                    console.log("Human wins this round");
                    humanScore++;
                } else if (humanSelection === "paper" && computerSelection === "scissors") {
                    console.log("Computer wins this round");
                    computerScore++;
                } else if (humanSelection === "scissors" && computerSelection === "paper") {
                    console.log("Human wins this round");
                    humanScore++;
                } else if (humanSelection === "scissors" && computerSelection === "rock") {
                    console.log("Computer wins this round");
                    computerScore++;
                } else {
                    console.log("It's a tie");
                }

                console.log("Your Score = " + humanScore);
                console.log("Computer Score = " + computerScore);

                round++;
                setTimeout(playRound, 1000); // delay before the next round
            } else {
                if (humanScore > computerScore) {
                    console.log("You win the Game!");
                } else if (humanScore === computerScore) {
                    console.log("The Game has Tied!");
                } else {
                    console.log("Computer wins the Game!");
                }
            }
        }

        playRound();
    }

    playGame();
});
