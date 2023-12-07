
//Opens to youtube.
function pressYoutube(){
    let yes = confirm("Are you sure you want to leave?");
    if(yes) window.open("https://www.youtube.com/channel/UCUQHh_FiVs8u5VE9NJS11Cw");
}

//Opens to patreon.

function openPatreon(){
    let yes = confirm("Are you sure you want to leave?");
    if(yes) window.open("https://www.patreon.com/PhilipModDev");
}


//Opens to discord.
function pressDiscord(){
    let yes = confirm("Are you sure you want to leave?");
    if(yes) window.open("https://discord.gg/ZYqFbpCZDV");
}

//Opens to github.
function pressGitHub(){
    let yes = confirm("Are you sure you want to leave?");
    if(yes) window.open("https://github.com/PhilipModDev");
}


//The function for a drop menu.
let isVisible = false;
let timesClicked = 0;

function makeListVisible(){
    let documentID = document.getElementById("link-box");
    documentID.style.visibility = 'visible';
    documentID.style.visibility = 'visible';
    isVisible = true;
    timesClicked++;
}

function makeListInVisible(){
    let documentID = document.getElementById("link-box");
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

  

//https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained#all-rights-reserved
//open to licence page.
function openLicence(){
    let yes = confirm("You are about to leave.");
    if(yes){
        window.open("https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained#all-rights-reserved");
    }
}
