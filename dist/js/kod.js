var imgbox = document.getElementsByClassName('imgbox');
var Lbox=document.getElementById('Lbox');
//设定默认长度
var boxLen=0;
Lbox.style.right='0%';
//空字符串
var str="";
//装入图片
function setImg(){
    for(var ix=0;ix<imgbox.length;ix++){
        str=ix+1+"";
        imgbox[ix].style.backgroundImage = "url('./assets/images/夜景 ("+str+").jpg";
    }
}

function goNextPage(){
    boxLen+=100;
    if(boxLen==500){
        boxLen=0;
        Lbox.style.right=boxLen+'%';
    }else{
        Lbox.style.right=boxLen+'%';
    }
    
}

window.onload=function (){
    setImg();
    setInterval('goNextPage()',3000);
}

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
}