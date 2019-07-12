var placeHolder = "_";
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder depending on whether or not the user has guessed the letter. 

var Letter=function(underlyChar,guessFlg){
    //   * A string value to store the underlying character for the letter
    this.underlyChar=underlyChar;
    //   * A boolean value that stores whether that letter has been guessed yet
    this.guessFlg=guessFlg;
    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.guessCharFunc = function (){
        
        if (this.guessFlg){
            return this.underlyChar;
        }else{
            return placeHolder;
        }   
    };
    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkFunc = function (guessChar){
        // checks it against the underlying character
        if(guessChar.toLowerCase() === underlyChar.toLowerCase()){
          this.guessFlg=true;
        }
       
    }
}

module.exports = Letter;