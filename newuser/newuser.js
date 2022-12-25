function selectFishFunctionOpen() {
    document.getElementById("newUsername").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");

  }

  function selectFishFunctionClose(){
    document.getElementById("newUsername").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  function getValueOfSelect(){
    event.preventDefault();
    const listNewUsername = document.getElementById("username").value;
    console.log(listNewUsername);
  }