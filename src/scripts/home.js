//The function for a drop menu.
let isVisible = false;
let timesClicked = 0;

function makeListVisible(){
    let documentID = document.getElementById("list-menu");
    documentID.style.visibility = 'visible';
    isVisible = true;
    timesClicked++;
}

function makeListInVisible(){
    let documentID = document.getElementById("list-menu");
    documentID.style.visibility = 'hidden';  
}



window.onclick = function(){
 if(isVisible && timesClicked > 1){
    makeListInVisible();
    isVisible = false;
    timesClicked = 0;
    } else if(isVisible){
        timesClicked++;
   }
}  