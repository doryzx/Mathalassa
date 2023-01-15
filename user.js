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
        this.levelCurrent=8;//setting it without database
        this.node=0;
    }
    //methods
    toString(){
        return (this.name+","+this.character+","+this.levelCompleted+","+this.levelCurrent+","+this.node);
    }
}//end class
var player;
 
function newPlayer(name,character,completed){
 player = new user(name, character, completed);
 //add to array, move to top
}
function oldPlayer(name){
    //find original
    // player= new user(original.get name, character, completed);
    //move original to top
}
newPlayer("bob", "../images/guppy.png", 8);

function checkPlayer(username){//\will changee
    return false;
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
