// //code for local node server, from https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09 
// const express = require('express'); //Import the express dependency
// const app = express();              //Instantiate an express app, the main work horse of this server
// const port = 5000;                  //Save the port number where your server will be listening

// //Idiomatic expression in express to route and respond to a client request
// app.get('/', (req, res) => {        //get requests to the root ("/") will route here
//     res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
//                                                         //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });
// var path = require('path')
// app.use(express.static(path.join(__dirname, '/')));
// app.use(express.static(path.join(__dirname, '/newuser')));
// app.use(express.static(path.join(__dirname, '/images')));
// app.use(express.static(path.join(__dirname, '/map')));
// app.use(express.static(path.join(__dirname, '/questions')));
// app.use(express.static(path.join(__dirname, '/lore')));
// app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
//     console.log(`Now listening on port ${port}`); 
// });

// res.sendFile(__dirname + '/index.html');});
//code for actual html file
var audio = new Audio('music/indexMusic.mp3');//music from https://youtu.be/RcYU8zxxmaY
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
function about() {
    document.getElementById("thePopupAbout").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
    
  }

  function aboutClose(){
    document.getElementById("thePopupAbout").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  function oldUser() {
    document.getElementById("thePopupOld").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");

  }

  function oldUserClose(){
    document.getElementById("thePopupOld").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  function checkOldPlayer(){//checks if the user exists
    event.preventDefault();
    var username = document.getElementById("username").value;
    if (checkPlayer(username)==true){
  
      oldPlayer(username);//call a function to move the player to top of txt file and make an object
      window.open("map/map.html","_self");
    } 
    else if(checkPlayer(username)==false){
      document.getElementById("failed").style.visibility="visible";
    }
  }

 

