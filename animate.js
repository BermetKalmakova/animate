var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var clear = function(e){
    ctx.clearRect(0,0,500,500);
}


var r = 2;
var setting = 0;
var draw = function(e){
    clear();
    if (setting == 0){
	if (r > 230){
	    setting = 1;
	}
	r++;
    }
    else{
	if (r < 2){
	    setting = 0;
	}
	r --;
    }
    ctx.beginPath();
    ctx.arc(250,250,r,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    requestID = window.requestAnimationFrame(draw);
}

var end = function(e){
    window.cancelAnimationFrame(requestID);
}

var reset = function(e){
    window.cancelAnimationFrame(requestID);
    r = 2;
    setting = 0;
    draw();
}

stop.addEventListener("click",end);

start.addEventListener("click",draw);

canvas.addEventListener("click",reset);
