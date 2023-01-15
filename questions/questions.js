function questionPageCloseFunction(){
    document.getElementById("closeConfirm").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
}

function confirmPageCancelFunction(){
    document.getElementById("closeConfirm").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
}

document.getElementById("character").src=getCharacter();//set image to the chosen character
document.getElementById("levelTitle").innerHTML="Level "+getLevelCurrent();
//can next set to false
//enter level
//lives set to three, questions set to 5
// while lives<3 and question<5
// generate question according to level  get answer 
// if asnwer=answer, questions set to 4, html say correct! fish say yay
// else html say try again fish say omg you better not get me killed
//     if answer=answer, questions set to 4, html say correct! fish say yay
//     else lives set to 2, images heart iinvisible, html say incorrect
//     can next set to true;
//     repeat
// if lives=0, failed
// if questions=0, 
//if current>passed, set passed=current and then passed
var lives=3;
var questions=5;//questions they need to answer correctly
var response;
var tries=2;
var finished=false;
let things=//15 things
    ["apples","bananas","oranges","trees","candies",
    "cookies","legos","clarinets","scoopulas","chocolates",
    "chickens","clarinets","phones","bowls","plants"];
let names=//20 names
    ["Bob","Kirsten","Xiyue","Jina","Joe","Dory","Leanne","Chris","Alex","Alexis",
    "Ellie","Calvin","Josh","Emily","Curtis","Ahmed","Camille","Siobhan","Kevin","Maria"];
const level=getLevelCurrent();
var answer;
generate(level);
//wait for them to call setResponse
function setResponse(){//checks if the response is correct and shows hints/text based on try count, or lets them move on to the next q
    event.preventDefault();
    response = document.getElementById("questionInput").value;
    if(finished==false){
    if(response==answer){
        questions--;
        finished=true;
        document.getElementById("message").style.color="green";
        document.getElementById("message").innerHTML="Correct! Let's move on to the next question";
        document.getElementById("message").style.visibility="visible";
        document.getElementById("fishTextAct").innerHTML="HOORAY! One step closer to freedom";
        document.getElementById("nextQuestion").style.visibility="visible";
    }
    else if(response!=answer){
        tries--;
        if(tries==1){
            document.getElementById("hint").style.visibility="visible";
            document.getElementById("message").style.color="red";
            document.getElementById("message").innerHTML="Incorrect. Try Again";
            document.getElementById("message").style.visibility="visible";
            document.getElementById("fishTextAct").innerHTML="Oh no! Be Careful!"
        }
        else if(tries==0){
            lives--;
            finished=true;
            document.getElementById("message").innerHTML="Incorrect. You lost a life";
            document.getElementById("message").style.color="red";
            document.getElementById("message").style.visibility="visible";
            document.getElementById("fishTextAct").innerHTML="AHHH! We lost a life, I'm scared!";
            document.getElementById("nextQuestion").style.visibility="visible";
            if(lives==2){
                document.getElementById("life3").style.visibility="hidden";
            }
            if(lives==1){
                document.getElementById("life2").style.visibility="hidden";
            }
            if(lives==0){
                document.getElementById("life1").style.visibility="hidden";
            }
        }
    }
       
    }
}
function checkEnd(){//checks if they've failed or passed
    if(lives==0){
        document.getElementById("levelFailed").style.visibility="visible";
    }
    else if(questions==0){
        document.getElementById("levelPassed").style.visibility="visible";
        if(getLevelCurrent()>getLevelCompleted()){
            setLevelCompleted(getLevelCurrent);
        }
    }
}
function nextQuestion(){
    checkEnd();
    finished=false;
    document.getElementById("nextQuestion").style.visibility="hidden";
    document.getElementById("message").style.visibility="hidden";
    document.getElementById("hint").style.visibility="hidden";
    document.getElementById("fishTextAct").innerHTML="You've got this! This is easy-peasy";
    tries=2;
    generate(level);
}
    
function generate(level){//this sets the question text, hint text, and returns the answer
    var question;
    var hint;
    var a;
    var b;
    var thing=things[generateNum(0,14)];
    var name=names[generateNum(0,19)];
    switch(level){
        case 1: 
            a=generateNum(2,5);
            console.log(a);
            b=generateNum(2,5);
            answer=a+b;
            question=("You have "+a+" "+thing+", and your friend "+name
            +" gives you "+b+" "+thing+". How many do you have in total?");
            hint="Hint: Try "+a+" + "+b;
            break;
        case 2: 
            a=generateNum(5,20);
            console.log(a);
            b=generateNum(6,20);
            answer=a+b;
            question=("You have "+a+" "+thing+", and your friend "+name
            +" gives you "+b+" "+thing+". How many do you have in total?");
            hint="Hint: Try "+a+" + "+b+", don't forget to carry when needed";
            break;
        case 3: 
            a=generateNum(3,9);
            console.log(a);
            b=generateNum(2,a);
            answer=a-b;
            question=("You had "+a+" "+thing+", and your friend "+name
            +" takes away "+b+" "+thing+". How many do you have in total now?");
            hint="Hint: Try "+a+" - "+b;
           break; 
        case 4:
            a=generateNum(3,19);
            console.log(a);
            b=generateNum(2,a);
            answer=a-b;
            question=("You had "+a+" "+thing+", and your friend "+name
            +" takes away "+b+" "+thing+". How many do you have in total now?");
            hint="Hint: Try "+a+" - "+b+", don't forget to borrow when needed"; 
           break; 
        case 5: 
            a=generateNum(3,19);
            console.log(a);
            b=generateNum(2,a);
            answer=a-b;
            question=("You had "+a+" "+thing+", and your friend "+name
            +" takes away "+b+" "+thing+". How many do you have in total now?");
            hint="Hint: Try "+a+" - "+b+", don't forget to borrow when needed"; 
            break;
        case 6: 
            break;
        case 7: 
            break;
        case 8: 
            break;
        case 9: 
            break;
    }
    document.getElementById("question").innerHTML=question;
    document.getElementById("hint").innerHTML=hint;
}

function generateNum(min, max){
   return(Math.floor(Math.random() * (max - min + 1) + min));
}