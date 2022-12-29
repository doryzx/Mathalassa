function levelPreviewOpen(){
    document.getElementById("levelPreview").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
}
function levelPreviewClose(){
    document.getElementById("levelPreview").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
}
var node = 0; //set their node to 0, will change this once i can access a recent node var
let pathways=[
    [0,1,0,0,0],
    [-1,0,0,1,0],
    [1,0,-1,0,1],
    [0,-1,0,1,1],
    [0,1,-1,0,1],
    [-1,1,0,0,0],
    [-1,0,1,0,1],
    [0,1,0,-1,0],
    [-1,0,0,1,1],
    [0,0,-1,1,0],
    [0,0,-1,1,0],
    [1,0,-1,0,1],
    [1,-1,0,0,0],
    [0,-1,1,0,1],
    [1,0,0,-1,0],
    [0,-1,0,1,0],
    [0,0,-1,1,0],
    [0,0,-1,1,0],
    [0,1,-1,0,1],
    [-1,1,0,0,0],
    [-1,0,0,0,1]
];

document.addEventListener("keyup", function(event) {
    if (event.code === "ArrowRight") {
        if(checkNode("right")){
            move("right");
        }
    }
    if (event.code === "ArrowLeft"){
        if(checkNode("left")){
            move("left");
        }
    }
    if (event.code === "ArrowUp"){
        if(checkNode("up")){
            move("up");
        }
    }
    if (event.code === "ArrowDown"){
        if(checkNode("down")){
            move("down");
        }
    }
    if (event.code ==="Enter"){
        if(checkNode("enter")){
            levelPreviewOpen();
            // window.open('../../questions/questions.html','_self'); 
         }
    }
});

function checkNode(command){
    if(command=="up"){
        const a = pathways[node][0];
        if(a!= 0){
            if(a>0){
                node++;
                return true;
            }
            else{
                node--;
                return true;
            }
        }
    }
    if(command=="down"){
        const a = pathways[node][1];
        if(a!= 0){
            if(a>0){
                node++;
                return true;
            }
            else{
                node--;
                return true;
            }
        }
    }
    if(command=="left"){
        const a = pathways[node][2];
        if(a!= 0){
            if(a>0){
                node++;
                return true;
            }
            else{
                node--;
                return true;
            }
        }
    }
    if(command=="right"){
        const a = pathways[node][3];
        if(a!= 0){
            if(a>0){
                node++;
                return true;
            }
            else{
                node--;
                return true;
            }
        }
    }
    if(command=="enter"){
        const a = pathways[node][4];
        if(a!=0){
            //set level
            return true;
        }
    }
}

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