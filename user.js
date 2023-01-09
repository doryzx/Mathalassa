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
var player;
 

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

// function hear(){
//     var xhr = new XMLHttpRequest();
  
//         // Making our connection  
//         var url = 'data.txt';
//         xhr.open("GET", url, true);
  
//         // function execute after request is successful 
//         xhr.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 console.log(this.responseText);
//             }
//         }
//         // Sending our request 
//         xhr.send();
// }
// function tell(){
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "main.js");
//     xhr.setRequestHeader("Accept", "text/plain");
//     xhr.setRequestHeader("Content-Type", "text/plain");
    
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         console.log(xhr.status);
//         console.log(xhr.responseText);
//       }};
    
//     let data = "hello";
    
//     xhr.send(data);
// }
// tell();


 
