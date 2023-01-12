animate()
//source code of animation from https://tobiasahlin.com/moving-letters/#11
// Wrap every letter in a span

function animate(){
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/[-A-Za-z0-9!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  // .add({
  //   targets: '.ml11 .line',
  //   scaleY: [0,1],
  //   opacity: [0.5,1],
  //   easing: "easeOutExpo",
  //   duration: 0 /*time to start animation of swipe*/
  // })
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
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
;
}

function next(){
  var textWrapper = document.querySelector('.ml12 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/[-A-Za-z0-9!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml12 .line',
      translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 2000 /*delay of text animation starting*/
    })
    .add({
      targets: '.ml12 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2000, /*duration of how long the text stays for*/
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    })
    .add({
      targets: '.ml12',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    })
  ;
  }

