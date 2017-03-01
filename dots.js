var svg = document.getElementById("drawing");

var prev = false;
var prevX, prevY;

var draw_dot = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("fill", "blue");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", "25");
    svg.appendChild(dot);
    if(prev){
	var connect = document.createElementNS("http://www.w3.org/2000/svg", "line");
	connect.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2" );
	connect.setAttribute("x1", x);
	connect.setAttribute("x2", prevX);
	connect.setAttribute("y1", y);
	connect.setAttribute("y2", prevY);
	svg.append(connect);
    }
    prevX = x;
    prevY = y;
    prev = true;
}

svg.addEventListener("click", draw_dot);

var clear_button = document.getElementById("clear");

var clear = function(e){
    prev = false;
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    }
}

clear_button.addEventListener("click", clear);
