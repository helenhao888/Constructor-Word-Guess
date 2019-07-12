var Letter=require("./Letter.js");
const randomConst = 82;
// predefined word list
var wordLibrary = [ "respect","frighten","wicked","reward","wooden","swanky","powerful","righteous",
"overrated","abstracted","embarrassed","view","juice","beds","gather","rude",
"hate","liquid","metal","gate","learn","water","irate","hallowed","goofy","separate",
"work","attend","scale","miss","zip","sticks","careless","stain","glib","hurry",
"furtive","kettle","brainy","delay","unwieldy","station","sort","glistening",
"mere","material","purple","clammy","warm","obey","boring","pan","honorable","twist",
"null","canvas","ludicrous","part","questionable","board","ladybug","recess","jealous",
"phone","face","gun","teeth","business","hammer","guess","burst","rely","scent","sneeze",
"sticky","vivacious","noisy","unaccountable","perfect","oafish","Victoria Lake","National Park"];
var displayWord=[];
var matchFlg=0;
var matchCount=0;
//0 represents not match; 1 represents letter matched, 2 represents word matched. 

var Word=function(){
    this.letterArr=[]; //store current word for guess
    this.matchCount=0;
    this.getRandWord = function() {
        var  rand = Math.floor(Math.random()* randomConst);
        console.log("rand",rand);
        console.log("word",wordLibrary[rand]);
        for (var i=0; i< wordLibrary[rand].length;i++){
            this.letterArr.push(new Letter(wordLibrary[rand][i]));
        }
        
        // console.log("letterArr",this.letterArr);
    };

    this.displayWordFunc=function(){
        displayWord=[];
        for(var i=0;i<this.letterArr.length;i++){

            displayWord.push(this.letterArr[i].guessCharFunc());
        }
        console.log("Word",displayWord.join(" "));
    };

    this.checkWord=function(char){

        matchFlg=0;

        for (var j=0;j<this.letterArr.length;j++){
            // console.log("name",this.letterArr[j].underlyChar);
            // console.log("char",char);
            // console.log("flag",this.letterArr[j].guessFlg);
            if(this.letterArr[j].underlyChar === char && this.letterArr[j].guessFlg === false){
                // console.log("found letter");
                this.letterArr[j].checkFunc(char);
                this.matchCount++;
                if(this.matchCount === this.letterArr.length){
                    matchFlg = 2;     
                    return matchFlg;              
                } else {
                    matchFlg = 1;
                    return matchFlg;
                }          
            }  
        }

        matchFlg = 0;
         
         return matchFlg;
        
    }
    
}
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

module.exports=Word;