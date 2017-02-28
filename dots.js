var svg = document.getElementById("drawing");

var draw_dot = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("fill", "blue");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", "50");
    svg.appendChild(dot);
}

svg.addEventListener("click", draw_dot);
