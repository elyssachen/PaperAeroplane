var SIZE;
var xPos, yPos;
function preload(){
  pic=loadImage('data/image.jpeg');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textAlign(CENTER, CENTER);
SIZE=100;
xPos=width/2;
yPos=height/2;
// frameRate(1);
angleMode(DEGREES);
}


function draw() {
  background(0,50); //background refreshes each frame
  yPos=random(height);
  xPos=random(width);
// fill(255,0,0);

if (mouseIsPressed === true) {
  fill(255);
} else {
  fill(255,0,0);
}

textSize(SIZE);
push();
  translate(width/2, height/2);
//   rotate(QUARTER_PI);
rotate(mouseX);
  text('Hello World', -width/4, -height/4, width/2, height/2);
pop();
pic.filter(BLUR, 1);
image(pic, width/5, 0, 200, 200);
image(pic, width*0.8, 0, 200, 200);
textSize(50);
text('welcome', 0, 0, mouseX*2, mouseY*2);
}


function mousePressed() {
  SIZE++; //everytime mouse pressed, size goes up by 1
  SIZE+=1; //mouse size goes up by 10 every click
}
