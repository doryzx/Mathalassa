// const fs = require('fs')//import read/write module
// import fs from 'fs'
function write(){
 var logger = fs.createWriteStream('data.txt')
 var writeLine = (line) => logger.write(`\n${line}`);
   writeLine('Data written to a bew me');
   writeLine("fishdoesart was here");
   logger.end() // close string
}
 function read(){
   fs.readFile('data.txt', function (err, data) {
     console.log("Asynchronous read: " + data.toString());
  });
}
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
        this.levelCurrent=0;
        this.node=0;
    }
    //methods
    toString(){
        return (this.name+","+this.character+","+this.levelCompleted+","+this.levelCurrent+","+this.node);
    }
}//end class
write();
function newPlayer(name,character,completed){
 player = new user(name, character, completed);
}
newPlayer("bob", "../images/guppy.png", 8);

function checkPlayer(username){//\will changee
    return true;
}
//get and set functions for external use
function getNode(){
    //call reader of first line
    return player.node;
}
function setNode(newNode){
    player.node=newNode;
    //call writer (of first line?)
}
function getLevelCurrent(){
    //call reader
    return player.levelCurrent;
}
function setLevelCurrent(level){
    player.levelCurrent=level;
    //call writer
}
function getLevelCompleted(){
    //call reader
    return player.levelCompleted;
}
function setLevelCompleted(level){
    player.levelCompleted=level;
    //call writer
}
function getName(){
    //call reader
    return player.name;
}
function getCharacter(){
    //call wreader
    return player.character;
}




 
