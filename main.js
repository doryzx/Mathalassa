// const fs = require('fs')//import read/write module
//  var logger = fs.createWriteStream('data.txt')
//  var writeLine = (line) => logger.write(`\n${line}`);
//    writeLine('Data written to a new me');
//    writeLine("fishdoesart was here");
//    logger.end() // close string
 
//    fs.readFile('data.txt', function (err, data) {
//      console.log("Asynchronous read: " + data.toString());
//   });
var player;
 class user{
    //variables
    name;
    character;
    levelCompleted; 
    levelCurrent;
    node;
    //constructor
    constructor(name, character, levelCompleted) {
        this.name= name;
        this.character= character;
        this.levelCompleted= levelCompleted;
        this.node= 0;
        this.levelCurrent=0;
    }
    //methods
    // toString(){

    // }


}
function newPlayer(){
 player = new user("bob", "../images/blueTang.png", 0);
}
function checkPlayer(username){//\will changee
    return true;
}



 
