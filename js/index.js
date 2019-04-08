var objPos = document.querySelector(".poster-main");
var objPrev = objPos.querySelector("#prev");
var objNext = objPos.querySelector("#next");
var objUl = objPos.querySelector("ul");
objUl.innerHTML += objUl.innerHTML;
var objLi = objUl.querySelectorAll("li");
var objLiWidth = objLi[0].offsetWidth;
var objliLenght = objLi.length;
objUl.style.width = objLiWidth*objliLenght + "px";
var speed = -1349;
var time = setInterval(moves,1500);
function moves(){
    if(objUl.offsetLeft<"-"+(objUl.offsetWidth/2)){
        objUl.style.left = 0;
    }
    if(objUl.offsetLeft>0){
        objUl.style.left = "-" + (objUl.offsetWidth*0.9) + "px";
    }
    objUl.style.left = objUl.offsetLeft+ speed + "px";
}
objUl.onmousemove = function(){
    clearInterval(time);
}
objUl.onmouseout = function(){
    time = setInterval(moves,1500);
}
objPrev.onclick = function(){
    speed = -1349;
}
objNext.onclick = function(){
    speed = 1349;
}