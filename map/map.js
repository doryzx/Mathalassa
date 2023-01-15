let previews=[//fish icons from https://www.flaticon.com/free-icon/fish_3075494
    ["Simple Addition","Numbers combined or added together is called addition, giving you the SUM. An addition of numbers is represented through \"+\"",
    "../images/levelOneOne.png","../images/levelOneTwo.png"],
    ["Addition","Numbers in a digit column that add up past ten can have the tens digit carried to the tens column",
    "../images/levelTwoOne.png","../images/levelTwoTwo.png"],
    ["Simple Subtraction","A number taken away from another is called subtraction, giving you the DIFFERENCE. Subtraction of numbers is represented through \"-\"",
    "../images/levelThreeOne.png","../images/levelThreeTwo.png"],
    ["Subtraction","If subtracting a bigger digit from a smaller one, you can borrow 1 from the next column",
    "../images/levelFourOne.png","../images/levelFourTwo.png"],
    ["Multiplication","Numbers added repeatedly is called multiplication, giving you the PRODUCT. Multiplication is represented through \"x\"",
    "../images/levelFiveOne.png","../images/levelFiveTwo.png"],
    ["Division","Splitting numbers in groups is called division, giving you the QUOTIENT. Division can be represented through \"/\"",
    "../images/levelSixOne.png","../images/levelSixTwo.png"],
    ["Multiplication/Division","Division is the opposite of Multiplication, don't mix them up!",
    "../images/levelSevenOne.png","../images/levelSevenTwo.png"],
    ["Exponents","Repeated multiplication can be written as EXPONENTS. Exponents can be represented through \"^\"",
    "../images/levelEightOne.png","../images/levelEightTwo.png"],
    ["All Operations","It is important to be able to do all operations and be able to use the right one at the right time!",
    "../images/levelNineOne.png","../images/levelNineTwo.png"]
];

function levelPreviewOpen(){//what happens when the preview is opened, set's it based on level
    document.getElementById("levelPreviewTitle").innerHTML="LEVEL "+getLevelCurrent();
    document.getElementById("levelGeneral").innerHTML=previews[getLevelCurrent()-1][0];
    document.getElementById("levelDescriptionTitle").innerHTML="How To Do "+previews[getLevelCurrent()-1][0];
    document.getElementById("levelDescription").innerHTML=previews[getLevelCurrent()-1][1];
    document.getElementById("imageOne").src=previews[getLevelCurrent()-1][2];
    document.getElementById("imageTwo").src=previews[getLevelCurrent()-1][3];
    document.getElementById("levelPreview").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
}
function levelPreviewClose(){//what happens when the preview is closed
    document.getElementById("levelPreview").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
}

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