
let pic = [];


function preload(){
  pic[0] = loadImage("data/tree1.png");
  pic[1] = loadImage("data/tree2.png");
  pic[2] = loadImage("data/tree3.png");
  pic[3]= loadImage("data/tree4.png");
  pic[4] = loadImage("data/tree5.png");
}

 function setup() {
createCanvas(windowWidth,windowHeight);
background("darkseagreen");
imageMode(CENTER);
let button = createButton('plant trees in my garden');
button.position(width*0.45,height/2);
button.mousePressed(repaint);
}


function draw() {

}

function repaint() {
  let c = random(["olivedrab","yellowgreen","darkseagreen","honeydew"]);
background(c);
}

function mousePressed() {
  image(random(pic),mouseX,mouseY,200,200);
}
