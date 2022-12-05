function selectFishFunctionOpen() {
    document.getElementById("newUsername").style.visibility="visible";
  }

  function selectFishFunctionClose(){
    document.getElementById("newUsername").style.visibility="hidden";
  }

  function getValueOfSelect(){
    event.preventDefault();
    const listNewUsername = document.getElementById("username").value;
    console.log(listNewUsername);
  }