var inquirer = require("inquirer");
var chalk = require("chalk");
var word = require("./Word.js");

const maxRound = 5;
var gameRound = {   
    round:0,
    winTimes: 0,
    remainingTimes:0 ,
}; 
var guessWord; 
           
 var words = [
     {
         type:"input",
         name:"letter",
         message:"Guess a letter!",
         validate: function(value){
             var pass = value.match(
                 /^[a-zA-Z]{1,1}$/
             );
             if(pass){
                 return true;
             }
             return "Please input one valid letter";
         }
     }
 ];

 initRound();

 function initRound(){
    
    gameRound.round=1;
    gameRound.winTimes=0;
    gameRound.remainingTimes=20;
    newGame();
 }
 
 function newGame(){

    gameRound.round++;
    gameRound.remainingTimes=20;
    guessWord = new word();
    guessWord.getRandWord();
    guessWord.displayWordFunc();
    
    inquirerProcess();
}


function inquirerProcess(){
    inquirer.prompt(words).then(answers=>{
       
        console.log("answers",answers);
        console.log("answers",answers.letter);
        checkLetter(answers.letter);
              
        }
    )
}
 
function checkLetter(letter){
    console.log("check");
   
    var checkFlg=guessWord.checkWord(letter);

    switch (checkFlg){
        case 0: 
                console.log("INCORRECT!!!");
                gameRound.remainingTimes--;
                if(gameRound.remainingTimes>=1){
                   console.log(gameRound.remainingTimes+" guesses remaining")
                   inquirerProcess();
                }else{
                   console.log("You fail for guessing this word! Guess another word!");
                   gameRound.round++;
                   if(gameRound.round<=maxRound){
                      newGame();
                   }else{
                      console.log("You lose!!!!");
                   }
                }
                
                break;
        case 1:
                guessWord.displayWordFunc();
                console.log("CORRECT!!!");
                inquirerProcess();
                break;
        case 2:
                guessWord.displayWordFunc();                
                console.log("You got the word !")
                gameRound.winTimes++;
                console.log("You guessed "+ gameRound.winTimes+" times correctly");
                if(gameRound.winTimes<=gameRound.round){
                    console.log("Guess another word")
                    newGame();
                }else{
                    console.log("You win!!!")
                }
                break;
    }
}