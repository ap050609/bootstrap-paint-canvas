// This is the Variables Section.
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width = "1";
var canvas_width = screen.width
new_width = screen.width - 70;
new_height = screen.height - 300;

// Computer Function starts here.
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown );

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    
    console.log("The last positions of x and y coordinates are:");
    console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
    ctx.moveTo(lastpositionofx,lastpositionofy)

    console.log("The current positions of x and y coordinates are:");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
lastpositionofx = current_position_of_mouse_x;
lastpositionofy = current_position_of_mouse_y;
}
//This is the Touch Screen Function Section.
if(canvas_width < 992)
{
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
console.log("my_touchmove");
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    
    console.log("The last positions of x and y coordinates are:");
    console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
    ctx.moveTo(lastpositionofx,lastpositionofy)

    console.log("The current positions of x and y coordinates are:");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    lastpositionofx = current_position_of_touch_x;
    lastpositionofy = current_position_of_touch_y;
}

//This is the Clear Area Function.
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}