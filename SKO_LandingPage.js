function setup() {
createCanvas(windowWidth,windowHeight);
background(255);
}


function draw() {
  stroke("black");
  strokeWeight(5);
  line(pmouseX, pmouseY, mouseX, mouseY);

}
