function questionPageCloseFunction(){
    document.getElementById("closeConfirm").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
}

function confirmPageCancelFunction(){
    document.getElementById("closeConfirm").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
}
