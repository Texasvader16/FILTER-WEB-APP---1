function preLoad()
{

}

function setup()
{
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.position(110, 250); 
    video = createCapture(VIDEO); 
    video.hide();

    tint_color="";
}

function draw()
{
image(video , 0 , 0 , windowWidth, windowHeight)

tint(tint_color)
}

function applyFilter()
{
tint_color = document.getElementById("color").value;
}

function take_snapshot()
{
save("Me.png") 
}

function touchStarted () 
{ var fs = fullscreen(); if (!fs) { fullscreen(true); } }
function windowResized() 
{ resizeCanvas(windowWidth, windowHeight); }
document.ontouchmove = function(event) { event.preventDefault(); };