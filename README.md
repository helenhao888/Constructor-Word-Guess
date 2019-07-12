# Constructor-Word-Guess

### Overview

A Word Guess command-line game using constructor functions.

### App Link
https://github.com/helenhao888/Constructor-Word-Guess.git

### Developer
    Developed by Helen Hao (helenhao888)
    
### Technologies
    Node.js 
    javascript
    inquirer package    
    chalk package
    Constructor

### Program Structure
  * index.js  : the main javascript program
  * Word.js   : Contains a constructor, Word that depends on the Letter constructor. This               is used to create an object representing the current word the user is                   attempting to guess. 
  * Letter.js : Contains a constructor, Letter. This constructor  should be able to either display an underlying character or a blank placeholder depending on  whether or not the user has guessed the letter. 


 ### Instructions
  * Each game, user has 20 times chance to guess letters, each time the user guesses the wrong the letter, the remaining time deducts by one. When the remaining times equals to 0, the user loses. 
  * If user can guess five words correctly without reaching the max guess times (20), the user wins the game. 
  * After the user wins or loses the game, he can select to play again or exit the game.