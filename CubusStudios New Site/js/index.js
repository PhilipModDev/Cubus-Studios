'use strict'


const headerList = [];

function resizeComponents(){
    let innerWidth = window.innerWidth;
    let headerBlock = document.getElementById('header-block');
    let elementList = document.getElementsByClassName('header-element');
    let menu = document.getElementById('menu');
    if (menu == null) return;
    if (elementList == null) return;
    if (headerBlock == null) return;

    //Resize content.
    if (innerWidth <= 900) {
        for(let i = 0 ; i < elementList.length; i++){
           let elementType = elementList.item(i);
           headerList.unshift(elementType);
           headerBlock.removeChild(elementType);
        }
        headerBlock.style.justifyContent = "center";
    }  
    addComponets();
}

function addComponets(){
    if (innerWidth <= 900) return;
    let headerBlock = document.getElementById('header-block');
    let elementList = document.getElementsByClassName('header-element');
    let menu = document.getElementById('menu');
    if (menu == null) return;
    if (elementList == null) return;
    if (headerBlock == null) return;
    headerBlock.removeChild(menu);
    for (let i = 0; i < headerList.length; i++){
         let element = headerList.shift();
         headerBlock.appendChild(element);
    }    
   
   headerBlock.appendChild(menu);
   headerBlock.style.display = "flex";     
   headerBlock.style.justifyContent = "space-around";
}


//handle menu
function toggleMenu(){
    let menu = document.getElementById('menu');
    if (menu == null) return;
    let dropList = document.getElementById('drop-list');
    if (dropList == null) return;
    if (dropList.style.visibility == 'visible'){
        dropList.style.visibility = "hidden";
        return;
    }
    dropList.style.visibility = "visible";
    isOpen = true;
}

let isVoxel = false;
//Updates the background image.
function updateBackgroundImages(){
   let backgroundContent = document.getElementById('content-background');
   if (backgroundContent == null) return;

   if (isVoxel) {
    backgroundContent.style.backgroundImage = "url('css/assets/voxel-engine-image.png')";
    isVoxel = false;
    return;
   }
   backgroundContent.style.backgroundImage = "url('css/assets/voxel_render_L.png')";
   isVoxel = true;
}



function init(){

    let menu = document.getElementById('menu');
    if (menu == null) return;

    menu.addEventListener('click',toggleMenu);
    window.addEventListener('resize',resizeComponents);
    setInterval(updateBackgroundImages,5000);
    
    //Dirty code here but gets the job done.
    resizeComponents();
    resizeComponents();
    resizeComponents();
}

document.addEventListener('DOMContentLoaded',init);
