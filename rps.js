let humanScore = 0
let computerScore = 0

playGame();

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

function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors?")
    return choice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == computerChoice){
        console.log("It's a TIE! you both chose : " + computerChoice)
    }
    else if (humanChoice == "rock"){
        if(computerChoice == "paper"){
            console.log("You Lose!\n" + computerChoice + " beats " + humanChoice + "!")
            computerScore += 1                    
        }
        else {
            console.log("You Win!\n" + humanChoice + " beats " + computerChoice + "!")
            humanScore += 1
        }        
    }
    else if (humanChoice == "paper"){
        if(computerChoice == "scissors"){
            console.log("You Lose!\n" + computerChoice + " beats " + humanChoice + "!")
            computerScore += 1
        }
        else {
            console.log("You Win!\n" + humanChoice + " beats " + computerChoice + "!")
            humanScore += 1
        }        
    }
    else if (humanChoice == "scissors"){
        if(computerChoice == "rock"){
            console.log("You Lose!\n" + computerChoice + " beats " + humanChoice + "!")
            computerScore += 1
        }
        else {
            console.log("You Win!\n" + humanChoice + " beats " + computerChoice + "!")
            humanScore += 1
        }        
    }


}

function playGame(){
    humanScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Score : \nHuman : " + humanScore)
    console.log("Computer : " + computerScore)
}