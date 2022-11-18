function theFunction() {
    var popup = document.getElementById("thePopup");
    popup.classList.toggle("show");
  }

//The popup does not necessarily needs a "close button", an easier solution is just simply use the entities around the popup to close pop up
//Or simply use the popup itself, with message below as "click again to close" or "skip", if that is a tutorial-type popup. 