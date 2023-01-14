
function levelPreviewOpen(){//what happens when the preview is opened
    document.getElementById("levelPreviewTitle").innerHTML="Level "+getLevelCurrent();
    document.getElementById("levelPreview").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
}
function levelPreviewClose(){//what happens when the preview is closed
    document.getElementById("levelPreview").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
}
// switch(getNode()){
//     case 0
// }

//set image to the chosen character
document.getElementById("character").src=getCharacter();

//set possible movements at each node
let pathways=[
    [0,1,0,0,0],
    [-1,0,0,1,0],
    [1,0,-1,0,1],
    [0,-1,0,1,0],
    [0,1,-1,0,2],
    [-1,1,0,0,0],
    [-1,0,1,0,3],
    [0,1,0,-1,0],
    [-1,0,0,1,4],
    [0,0,-1,1,0],
    [0,0,-1,1,0],
    [1,0,-1,0,5],
    [1,-1,0,0,0],
    [0,-1,1,0,7],
    [1,0,0,-1,0],
    [0,-1,0,1,0],
    [0,0,-1,1,0],
    [0,0,-1,1,0],
    [0,1,-1,0,8],
    [-1,1,0,0,0],
    [-1,0,0,0,9]
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
    var a;
    if(command=="up"){
        a = pathways[getNode()][0];
    }
    if(command=="down"){
        a = pathways[getNode()][1];
    }
    if(command=="left"){
        a = pathways[getNode()][2];
    }
    if(command=="right"){
        a = pathways[getNode()][3];
    }
    if(a!= 0){
        if(a>0&&checkLevel(getNode()+1)){
            setNode(getNode()+1);
            return true;
        }
        else if(a<0){
            setNode(getNode()-1);
            return true;
        }
    }
    if(command=="enter"){
        const a = pathways[getNode()][4];
        if(a!=0){
            setLevelCurrent(pathways[getNode()][4]);
            return true;
        }
    }
}

function checkLevel(node){//to check if they can advance to a further node
    // return true;
    const level= getLevelCompleted();
    switch(level){
        case 0:
            if(node<3){
                return true;
            }
            break;
        case 1:
            if(node<5){
                return true;
            }
            break;
        case 2:
            if(node<7){
                return true;
            }
            break;
        case 3:
            if(node<9){
                return true;
            }
            break;
        case 4:
            if(node<12){
                return true;
            }
            break;
        case 5:
            if(node<14){
                return true;
            }
            break;
        case 6:
            if(node<16){
                return true;
            }
            break;
        case 7:
            if(node<19){
                return true;
            }
            break;    
        case 8://if they pass all 8 levels, they can go anywehre
            return true;
    }
    return false;
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

function help(){
    document.getElementById("help").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");


}