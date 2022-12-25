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

  function getValue(){
    event.preventDefault();
    const listUsername = document.getElementById("user").value;
    console.log(listUsername);
  }

  /*function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
  }*/
  