var pic;

function preload() {
  pic = loadImage("data/STAMP.png"); //folder/filename
}

function setup() {
createCanvas(windowWidth,windowHeight);
background("white");
imageMode(CENTER,CENTER);
// Create a button and place it beneath the canvas.
  let button = createButton('click me');
  button.position(width/2,height/2);

  // Call repaint() when the button is pressed.
  button.mousePressed(repaint);
}
function repaint() {
  let g = random(255);
  background(g);
}

function draw() {
image(pic,mouseX, mouseY,50,50); //paint the page with the image!
}
