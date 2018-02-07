var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var r = 2;

var draw = function(e){
    if(r<240){
	r++;
    }
    else{
	r--;
    }
    ctx.beginPath();
    ctx.arc(250,250,r,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill()
}

start.addEventListener("click",draw);
