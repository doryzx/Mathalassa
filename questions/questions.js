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
const level=getLevelCurrent();
var answer = generate(level);
//wait for them to call setResponse
function setResponse(){//checks if the response is correct and shows hints/text based on try count, or lets them move on to the next q
    event.preventDefault();
    response = document.getElementById("questionInput").value;
    if(response==answer){
        questions--;
        document.getElementById("message").innerHTML="Correct! Let's move on to the next question";
        document.getElementById("message").style.visibility="visible";
        document.getElementById("fishTextAct").innerHTML="HOORAY! One step closer to freedom";
        document.getElementById("nextQuestion").style.visibility="visible";
    }
    if(response!=answer){
        tries--;
        if(tries==1){
            document.getElementById("hint").style.visibility="visible";
            document.getElementById("message").innerHTML="Incorrect. Try Again";
            document.getElementById("fishTextAct").innerHTML="Oh no! Be Careful!"
        }
        else if(tries==0){
            lives--;
            document.getElementById("message").innerHTML="Incorrect. You lost a life";
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
function checkEnd(){//checks if they've failed or passed
    if(lives==0){
        document.getElementById("levelFailed").style.visibility="visible";
    }
    else if(questions==0){
        document.getElementById("levelPassed").style.visibility="visible";
    }
}
function nextQuestion(){
    checkEnd();
    document.getElementById("nextQuestion").style.visibility="hidden";
    document.getElementById("message").style.visibility="hidden";
    document.getElementById("fishTextAct").innerHTML="You've got this! This is easy-peasy";
    tries=2;
    answer= generate(level);
}


function generate(level){//this sets the question text, hint text, and returns the answer
    var answer =7;
    tries=2;
    switch(level){
        case 1: 
            return answer;
        case 2: 
            return answer;
        case 3: 
            return answer;
        case 4: 
            return answer;
        case 5: 
            return answer;
        case 6: 
            return answer;
        case 7: 
            return answer;
        case 8: 
            return answer;
        case 9: 
            return answer;
    }
}
