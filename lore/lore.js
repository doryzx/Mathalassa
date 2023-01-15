animate()
var count=0; //number to correspond to each part of text and its image

function animate(){
  //source code of animation from https://tobiasahlin.com/moving-letters/#11
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/[-A-Za-z0-9!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>"); //animation of all characters 

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 1000 /*delay of text animation starting*/
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
    opacity: 1, /*fade away feature*/
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}
count++; //go to next part

function next(){//change text and image for eachs tory part
  if(count==1){
    document.getElementById("letters").innerHTML="What could this mean? SPLASH! OH NO! They throw a net in the water and begin catching fish! "; //specific text per part
    document.getElementById("loreBoat").style.visibility="hidden"; //changing image
    document.getElementById("loreNet").style.visibility="visible"; 
    animate(); 
}
else if(count==2){
  document.getElementById("letters").innerHTML="You must swim away quickly to avoid being caught, but after a while, you realized you are lost! How on earth are you going to get back home safely? ";
  document.getElementById("loreNet").style.visibility="hidden";
  document.getElementById("loreLost").style.visibility="visible";
  animate(); 
}
else if(count==3){
  document.getElementById("letters").innerHTML="As you try to find your way back, you catch sight of a great white shark lurking in the shadows. How scary!";
  document.getElementById("loreLost").style.visibility="hidden";
  document.getElementById("loreShark").style.visibility="visible";
  animate();  
}
else if(count==4){
  document.getElementById("letters").innerHTML="You find a mysterious path that seems to lead to a safe haven. QUICK! You must reach the end of the path before the shark eats you!";
  document.getElementById("loreShark").style.visibility="hidden";
  document.getElementById("loreEnd").style.visibility="visible";
  animate();
}
 else if(count==5){
  window.open("../map/map.html","_self"); // end of lore, go to map 
} 
count++;     
}








