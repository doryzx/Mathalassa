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
    [-1,0,0,1,0],
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
        if(check("right")){
            move("right");
        }
    }
    if (event.code === "ArrowLeft"){
        if(check("left")){
            move("left");
        }
    }
    if (event.code === "ArrowUp"){
        if(check("up")){
            move("up");
        }
    }
    if (event.code === "ArrowDown"){
        if(check("down")){
            move("down");
        }
    }
    if (event.code ==="Enter"){
        if(check("enter")){
            levelPreviewOpen();
            // window.open('../../questions/questions.html','_self');
         }
    }
});

function check(command){
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
// function check(command){
//     switch(node){ //will have to add passed level checks to see if they can move further
//         case 0:
//             if(command=="down"){
//                 node++;
//                 return true;  
//             }
//             break;
//         case 1:
//             if(command=="up"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 2:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="up"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level as level 1
//                 return true;
//             }
//             break;
//         case 3:
//             if(command=="down"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 4:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="down"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level as level 2
//                 return true;
//             }
//             break;
//         case 5:
//             if(command=="up"){
//                 node--;
//                 return true;
//             }
//             if(command=="down"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 6:
//             if(command=="up"){
//                 node--;
//                 return true;
//             }
//             if(command=="left"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level to 3
//                 return true;
//             }
//             break;
//         case 7:
//             if(command=="right"){
//                 node--;
//                 return true;
//             }
//             if(command=="down"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 8:
//             if(command=="up"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level to 4
//                 return true;
//             }
//             break;
//         case 9:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 10:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 11:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="up"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level to 5
//                 return true;
//             }
//             break;
//         case 12:
//             if(command=="down"){
//                 node--;
//                 return true;
//             }
//             if(command=="up"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 13:
//             if(command=="down"){
//                 node--;
//                 return true;
//             }
//             if(command=="left"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level to 6
//                 return true;
//             }
//             break;
//         case 14:
//             if(command=="right"){
//                 node--;
//                 return true;
//             }
//             if(command=="up"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 15:
//             if(command=="down"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level to 7
//                 return true;
//             }
//             break;
//         case 16:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 17:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="right"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 18:
//             if(command=="left"){
//                 node--;
//                 return true;
//             }
//             if(command=="down"){
//                 node++;
//                 return true;
//             }
//             if(command=="enter"){
//                 //set level
//                 return true;
//             }
//             break;
//         case 19:
//             if(command=="up"){
//                 node--;
//                 return true;
//             }
//             if(command=="down"){
//                 node++;
//                 return true;
//             }
//             break;
//         case 20:
//             if(command=="up"){
//                 node--;
//                 return true;
//             }
//             if(command=="enter"){
//                 //enter last leve? show preview?
//                 return true;
//             }   
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