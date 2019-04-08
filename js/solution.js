var infm_01 = document.getElementById("infm_01");
var img = infm_01.querySelectorAll("div div img");
// console.log(img);
for(var i =0;i<img.length;i++){
    img[i].onmousemove = function(){
        this.style.boxShadow="0px 0px 0px #f9560d";
        this.style.transition="1s";
    }
}
for(var i=0;i<img.length;i++){
    img[i].onmouseout = function(){
    this.style.boxShadow="none";
    this.style.transition="1s";
    }
}

var h3 = infm_01.querySelectorAll("div div h3");
for(var j=0;j<h3.length;j++){
    h3[j].onmousemove = function(){
        this.style.color="#f9560d";
        this.style.fontSize="20px";
        this.style.transition="1s";
    }
}
for(var j=0;j<h3.length;j++){
    h3[j].onmouseout = function(){
        this.style.color="#000";
        this.style.fontSize="14px";
        this.style.transition="1s";
    }
}