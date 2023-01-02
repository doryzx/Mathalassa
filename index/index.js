function theFunctionAbout() {
    document.getElementById("thePopupAbout").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
    
  }

  function theFunctionAboutClose(){
    document.getElementById("thePopupAbout").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  function theFunctionOld() {
    document.getElementById("thePopupOld").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");

  }

  function theFunctionOldClose(){
    document.getElementById("thePopupOld").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  var fs = require('fs');
  var array = fs.readFileSync('data.txt').toString().split("\n");
  for(i in array) {
      console.log(array[i]);
  }

  // function checkPlayer(){

  //   let username = document.getElementById("username");
  //   if ()

  // }

