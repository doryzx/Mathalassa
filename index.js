const element = document.getElementById("open");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("aboutText").innerHTML = "This game is about....";
}