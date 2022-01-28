
function computerPlay(){
    let choice = Math.floor(Math.random() * 3)  +1 
    if (choice == 1){
        return "Rock"
    }
    else if(choice == 2){
        return "Paper"
    }
    else if (choice == 3){
        return "Scissors"
    }
    else{
        console.error("Not a choice")
    }
}
   
function playRound(playerInput, computerInput){
    if (playerInput.toUpperCase() === computerInput.toUpperCase()){
        return "Tied!"
    }
    else if (playerInput.toUpperCase() == "ROCK"){
        if (computerInput == "Paper"){
            return "Computer Wins!"
        }
        else{
            return "Player Wins!"
        }

    }
    else if (playerInput.toUpperCase() == "PAPER"){
        if (computerInput == "Scissors"){
            return "Computer Wins!"
        }
        else{
            return "Player Wins!"
        }

        
    }
    else if (playerInput.toUpperCase() == "SCISSORS"){
        if (computerInput == "Rock"){
            return "Computer Wins!"
        }
        else{
            return "Player Wins!"
        }        
    }

}   
    let playerSelection
    let computerSelection
    for (let i = 0; i < 5; i++){
    do{
   playerSelection = window.prompt("Enter Rock, Paper or Scissors");
    }while(playerSelection.toUpperCase() != "ROCK" && playerSelection.toUpperCase() != "PAPER" && playerSelection.toUpperCase() != "SCISSORS")
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

}
 

