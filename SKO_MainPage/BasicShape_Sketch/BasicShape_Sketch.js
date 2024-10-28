function setup() {
createCanvas(windowWidth, windowHeight);
background(50,100,200);
 //frameRate(5);
}


function draw() {
   stroke(mouseX);
  //background(0,255,0); // refreshes backgroudn with colour
 noStroke();
 
  fill(mouseX/4,mouseY-255,mouseX-510);
// circle(mouseX,mouseY,50);
circle(width/2,height/2,300);
circle(0.3*width,0.8*height,100);

strokeWeight(0);
  stroke(255,0,0);
  textSize(20);
  //push();
    //transform(mouseX,mouseY);
    //rotate(QUARTER_PI);
    text('welcome to the land of two circles', mouseX,mouseY);
    //pop();// push/pop is like a little container for the code. pop undo push
  fill(255);
line(pmouseX,pmouseY,mouseX, mouseY); // makes line follow mouse
}
