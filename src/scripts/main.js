
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







//Scrolls down the page to the description id.
function scrollDownDesription(){
    let documentId = document.getElementById("description");
    documentId.scrollIntoView();
}

//Scrolls down to the forge downloads.
function srcollDownForgeVersions(){
    let documentId = document.getElementById("download-forge");
    documentId.scrollIntoView();
}

//Scrolls down to the fabric downloads.
function srcollDownFabricVersions(){
    let documentId = document.getElementById("download-fabric");
    documentId.scrollIntoView();
}








//Download Data list.
/*Forge*/
let forgeVersionItem;
$(function(){
    $('#download-list-forge').on('input',function (){
        let option = $('option[value ="' +$(this).val()+'"]');
        forgeVersionItem  = option.attr('value');

    });
});



function downloadPhilipsRuinsForge(){
    if(forgeVersionItem == "Philip's Ruins 1.19.2"){
               //Download version page.
              window.location.assign("1.19.2_downloads.html");
    }else if(forgeVersionItem == "Philip's Ruins 1.19"){
                //Download version page.
                window.location.assign("1.19_downloads.html");
    }else if(forgeVersionItem == "Philip's Ruins 1.18.2" ){
                //Download version page.
                window.location.assign("1.18.2_downloads.html");
    }
}



/*Fabric*/
let fabricVersionItem;
$(function(){
    $('#download-list-fabric').on('input',function (){
        let option = $('option[value ="' +$(this).val()+'"]');
        fabricVersionItem  = option.attr('value');

    });
});




function downloadPhilipsRuinsFabric(){
    if( fabricVersionItem == "Philip's Ruins 1.19.2"){
               //Download version page.
      window.location.assign("1.19.2_downloads_fabric.html");
    }else if(fabricVersionItem == "Philip's Ruins 1.18.2" ){
                //Download version page.
        window.location.assign("1.18.2_downloads_fabric.html");
    }
}


//Downloads the file, only called in the downloads page.


   



