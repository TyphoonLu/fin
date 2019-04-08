var userlogin = document.querySelector("#userlogin");
var usercenter = document.querySelector(".usercenter");
var body = document.querySelector("body");
var shade = document.querySelector("#shade");
userlogin.onclick = function(){
    shade.style.display = "block";
    usercenter.style.display = "block";
    usercenter.style.display = "flex";
    usercenter.style.justify-content ; "space-between";
    usercenter.style.flex-direction;"row";
    usercenter.style.transition = "2s";
}
var turnoff = document.querySelector("#turnoff img");
turnoff.onclick = function(){
    usercenter.style.display = "none";
    shade.style.display = "none";
}
// var left = document.querySelector("#left img");
// var right = document.querySelector("#right img");
// var objbgimg = document.querySelectorAll(".headerbg img");
// left.onclick = function(){
//     objbgimg[0].style.display = "block";
//     objbgimg[1].style.display = "none";
// }
// right.onclick = function(){
//     objbgimg[0].style.display = "none";
//     objbgimg[1].style.display = "block";
// }
var objuser = document.querySelector('input[type="text"]');
var objpwd = document.querySelector('input[type="password"]');
var small = document.querySelectorAll("small");
var form = document.querySelector("form");
form.onsubmit = function(){
    // var str = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/g;
    // if(!objuser.matches(str)){
    //     small[2].style.display = "inline";
    //     objuser.onblur = function(){
    //         small[0].style.display = "none";
    //     }
    //     return false;
    // }
    if(objuser.value == ""){
        small[0].style.display = "inline";
        objuser.onblur = function(){
            small[0].style.display = "none";
        }
        return false;
    }
   
    if(objuser.value.length<6||objuser.value.length>20){
        small[1].style.display = "inline";
        objuser.onblur = function(){
            small[0].style.display = "none";
            if(objuser.value.length>5&&objuser.value.length<21){
                objuser.onmouseout = function(){
                small[1].style.display = "none";
                }
            }
        }
        return false;
    }
    if(objpwd.value == ""){
        small[3].style.display = "inline";
        objpwd.onblur = function(){
            small[0].style.display = "none";
        }
        return false;
    }
        return true;
}
