animate()
//source code of animation from https://tobiasahlin.com/moving-letters/#11
// Wrap every letter in a span
var count=0;
function animate(){
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/[-A-Za-z0-9!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 2000 /*delay of text animation starting*/
  })
  .add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000, /*duration of how long the text stays for*/
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  count++;
}

function next(){
  if(count==1){
    document.getElementById("letters").innerHTML="What could this mean? SPLASH! OH NO! They throw a net in the water and begin catching fish ";

  }
  
  }






