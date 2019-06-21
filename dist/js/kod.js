var imgbox = document.getElementsByClassName('imgbox');
var Lbox=document.getElementById('Lbox');

function setImg(){
    for(var ix=0;ix<imgbox.length;ix++){
        imgbox[ix].style.backgroundImage = setBgimgStr(ix);
    }
}

function setBgimgStr(ix){
    var str=ix+1+"";
    return "url('./assets/images/夜景 ("+str+").jpg"
}

function goNextPage(ix){
    if(ix>=imgbox+1){
        ix=000;
    }
    let then=ix+"%";
    Lbox.style.right=then;
}
function auto(){
    for (let ix = 0; ix < imgbox.length; ix++) {
        
    }
}
window.onload=function (){
    setImg();
    setInterval(goNextPage(200),1000);
}

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
}