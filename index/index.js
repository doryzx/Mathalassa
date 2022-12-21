function theFunctionAbout() {
    document.getElementById("thePopupAbout").style.visibility="visible";
    
  }

  function theFunctionAboutClose(){
    document.getElementById("thePopupAbout").style.visibility="hidden";
  }

  function theFunctionOld() {
    document.getElementById("thePopupOld").style.visibility="visible";
  }

  function theFunctionOldClose(){
    document.getElementById("thePopupOld").style.visibility="hidden";
  }

  function getValue(){
    event.preventDefault();
    const listUsername = document.getElementById("user").value;
    console.log(listUsername);
  }

  function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
  }
  