let angle = 0
let rotX = 0
let rotY = 0
let rotZ = 0

function setup() {
createCanvas(windowWidth,windowHeight,WEBGL);
background("white");
//angleMode(DEGREES);
strokeWeight(2);
}


function draw() {
background("white");
rotateX(angle);
rotateY(angle);
rotateZ(angle);
normalMaterial();
translate(100,100,-300);
box(100);
angle+=0.01;
box(100,100,100);
//rotX+=0.01;
//rotY+=0.012;
//rotZ+=0.015;
//rotateX(rotX);
//rotateY(rotY);
//rotateZ(rotZ);
//point(-10,-10,-10);
//point(-20,-30,-150);
}
