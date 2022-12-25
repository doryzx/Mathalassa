function levelPreviewClose(){
    document.getElementById("levelPreview").style.visibility="hidden";
}
document.addEventListener("keyup", function(event) {
    if (event.code === "ArrowRight") {
        move("right");
    }
    if (event.code === "ArrowLeft"){
        move("left");
    }
    if (event.code === "ArrowUp"){
        move("up");
    }
    if (event.code === "ArrowDown"){
        move("down");
    }
});
// const node = 0;
// while(node<14){
//     switch(node){
//         case 0:
//             document.addEventListener("keyup", function(event) {
//                 if (event.code === "ArrowDown"){
//                     move("down");
//                     node=1;
//                 }}); 
//             break;
//     }
// }
function move(direction){
    const xLength = Math.round((window.innerHeight*0.23/0.999425 +Number.EPSILON)*1000)/1000;
    const yLength = Math.round((window.innerHeight*0.235/0.999425 + Number.EPSILON)*1000)/1000;
    const character = document.querySelector('.character');
    const xPosition = getComputedStyle(character).right.replace("px"," ");
    const yPosition = getComputedStyle(character).bottom.replace("px"," ");

    switch(direction){
        case "right":
            document.getElementById("character").style.right= (xPosition-xLength)+"px";
            break;
        case "left":
            document.getElementById("character").style.right= (xPosition-(-1*xLength))+"px";
            break;
        case "up":
            document.getElementById("character").style.bottom= (yPosition-(-1*yLength))+"px";
            break;
        case "down":
            document.getElementById("character").style.bottom= (yPosition-yLength)+"px";
            break;
    } 
}