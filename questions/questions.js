function questionPageCloseFunction(){
    document.getElementById("closeConfirm").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
}

function confirmPageCancelFunction(){
    document.getElementById("closeConfirm").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
}

//set image to the chosen character
document.getElementById("character").src=getCharacter();
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
var questions=5;
var response;
const level=getLevelCurrent();
var answer = generate(level);
//wait for them to call setResponse
function setResponse(){
    event.preventDefault();
    response = document.getElementById("questionInput").value;
    if(response==answer){
        
    }
}


function generate(level){
    var answer;
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
