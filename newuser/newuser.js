var audio = new Audio('../music/indexMusic.mp3');//music from https://youtu.be/RcYU8zxxmaY
audio.play();
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
//audio controls
function audioOff(){
    audio.pause();
    document.getElementById("audioOff").style.visibility="hidden";
    document.getElementById("audioOn").style.visibility="visible";
}
function audioOn(){
    audio.play();
    document.getElementById("audioOn").style.visibility="hidden";
    document.getElementById("audioOff").style.visibility="visible";
}
var fish;
function setFish1(){ //setting fish characters from select buttons
  fish="../images/guppy.png";
  selectOpen();
}
function setFish2(){
  fish="../images/discus.png";
  selectOpen();
}
function setFish3(){
  fish="../images/blueTang.png";
  selectOpen();
}
//open close popup
function selectOpen() {
    document.getElementById("newUsername").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
  }

  function selectClose(){
    document.getElementById("newUsername").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  function getValueOfSelect(){//checks if user is taken
    event.preventDefault();
    var username = document.getElementById("username").value;
    if(checkPlayer(username)==false){
      newPlayer(username, fish, 0);//calls function that handles new user
      window.open("../lore/lore.html","_self");
    } 
    else if (checkPlayer(username)==true){
      document.getElementById("failed").style.visibility="visible";
    }
  }

