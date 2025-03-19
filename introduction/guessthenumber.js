let gameNumber=prompt("GameNumber");

let userGuess=prompt("enter the number ");
while(gameNumber!=userGuess){
    if(userGuess>gameNumber){
        console.log("you enter the big number");
        
    }else if (userGuess<gameNumber){
        console.log("you enter the small number");
    }
    userGuess=prompt("enter the number again");
}
console.log("you win the game");
