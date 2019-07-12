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
             //only letter a-z, A-Z and space are allowed to input. Only input one character
             var pass = value.match(
                /^[a-zA-Z\s]{1,1}$/
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

    
    guessWord = new word();
    guessWord.getRandWord();
    guessWord.displayWordFunc();
    
    inquirerProcess();
}


function inquirerProcess(){
    inquirer.prompt(words).then(answers=>{
       
        checkLetter(answers.letter);
              
        }
    )
}
 
function checkLetter(letter){
   
   
    var checkFlg=guessWord.checkWord(letter);

    switch (checkFlg){
        case 0: 
                console.log(chalk.red("INCORRECT!!!"));
                gameRound.remainingTimes--;
                if(gameRound.remainingTimes>=1){
                   console.log(gameRound.remainingTimes+" guesses remaining")
                   inquirerProcess();
                }else{
                   console.log("You fail for guessing this word! ");
                   console.log(chalk.red("You lose!!!!"));     
                   inquirerNextRound();             
                }
                
                break;
        case 1:
                guessWord.displayWordFunc();
                console.log(chalk.green("CORRECT!!!"));
                inquirerProcess();
                break;
        case 2:
                guessWord.displayWordFunc();                
                console.log(chalk.white.bgMagenta("You got the word !"));
                gameRound.winTimes++;
                console.log(chalk.white.bgMagenta("You guessed "+ gameRound.winTimes+" times correctly"));
                gameRound.round++;
                if(gameRound.round<=maxRound){
                    console.log(chalk.blue("Guess another word"));
                    newGame();
                }else{
                    console.log(chalk.bold.green("You win!!!"));
                    inquirerNextRound();
                }
                break;
    }
}

function inquirerNextRound(){
    
    inquirer.prompt([
        {
            type:"prompt",
            message:"Do you want to play another round?",
            name:"playagain"
        }
    ]).then(function(answers){
        
        console.log("answers",answers.playagain);
        if(answers.playagain.toLowerCase().charAt(0) === "y"){
            initRound();
        }else{
            console.log(chalk.bgMagenta.white("Thanks for playing! See you next time!"));
            process.exit();
        }
    })
}