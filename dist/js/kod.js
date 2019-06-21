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

function goNextPage(){
    Lbox.style.right='100%';
}
function auto(){
    for (let ix = 0; ix < imgbox.length; ix++) {
        
    }
}
window.onload=function (){
    setImg();
    setInterval(goNextPage(),3000);
}

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
}