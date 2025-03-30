let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
})

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return("rock")
    }
    if (choice === 1){
        return("paper")
    }
    return("scissors")
}



function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == computerChoice){
        displayResult("It's a TIE! you both chose : " + computerChoice)
    }
    else if (humanChoice == "rock"){
        if(computerChoice == "paper"){
            displayResult("You Lose!\n" + computerChoice + " beats " + humanChoice + "!")
            computerScore += 1                    
        }
        else {
            displayResult("You Win!\n" + humanChoice + " beats " + computerChoice + "!")
            humanScore += 1
        }        
    }
    else if (humanChoice == "paper"){
        if(computerChoice == "scissors"){
            displayResult("You Lose!\n" + computerChoice + " beats " + humanChoice + "!")
            computerScore += 1
        }
        else {
            displayResult("You Win!\n" + humanChoice + " beats " + computerChoice + "!")
            humanScore += 1
        }        
    }
    else if (humanChoice == "scissors"){
        if(computerChoice == "rock"){
            displayResult("You Lose!\n" + computerChoice + " beats " + humanChoice + "!")
            computerScore += 1
        }
        else {
            displayResult("You Win!\n" + humanChoice + " beats " + computerChoice + "!")
            humanScore += 1
        }        
    }
    refreshScore()


}

const result = document.querySelector("#result")
const playerScore = document.querySelector("#playerScore")
const computerDisplayScore = document.querySelector("#computerScore")

function displayResult(newResult){
    result.textContent = newResult;
}

function refreshScore(){
    playerScore.textContent = "player score: " + humanScore;
    computerDisplayScore.textContent = "computer score: " + computerScore;

    if (humanScore>4){
        alert("YOU WIN!!!!!!!!")
    }
    if (computerScore>4){
        alert("YOU LOSE!!!!")
    }
}
