//let wigglyLetters=[];
//let size=32;
//let speed=1;
//let letter, rand, xpos, ypos;

//function setup() {
//createCanvas(windowWidth,windowHeight);
//background(0);
//textSize(32);
//textFont("Times");
//}


//function draw() {
// background(0);
//  fill(255);
//  noStroke();

//  // where am i starting from (0), where do i end, Go up by one
//  for(var i=0; i<wigglyLetters.Length; i++){
//    wigglyLetters[i].giggle();
//    wigglyLetters[i].display();
//  }
//}

//function mousePressed() {
//  rand = int(random(65,160));
// letter = char(rand); 
//// text(letter,mouseX,mouseY);
//// new wiggle class: xpos, ypos, size, letter, speed
//wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
//}

//class Wiggle {
//  constructor(x,y,size,letter,speed){
//    //index
//    this.x=x;
//    this.y=y;
//    this.textSize=size;
//    this.speed=speed;
//    this.letter=letter;
//  }
//  giggle() {
//    this.x+=random(-4, 4); //gives a range of where to go
//    this.y+=random(-4, 4);
//    this.textSize+=random(-2,2);
//  }
//  display(){
//    textSize(this.textSize);
//    text(this.letter, this.x, this.y);
//  }
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

var wigglyLetters=[];
var size=32;
var speed=1;
var letter, rand, xposition, yposition;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(32);
  textFont("Times"); 
}
function draw() {
  background(0);
  fill(255);
  noStroke();
  for(var i=0; i<wigglyLetters.length; i++){
     wigglyLetters[i].giggle();
     wigglyLetters[i].display();
  }
}
function mousePressed() {
 rand = int(random(65, 160));
 letter= char(rand);
 //text(letter, mouseX, mouseY);
 //new wiggle class : position x, positiony, size, letter, speed
 wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
class Wiggle {
  // this sets up your elements in your class
  constructor(x, y, size, letter, speed){
    this.x=x;
    this.y=y;
  //  this.textSize=size;
    this.textSize=random(-20,20); //each click the letter is a diff size
    this.speed=speed;
    this.letter=letter;
  }
  // this updates the position &/or size &/oer... of each element
  giggle(){
this.x+=random(movedX)+random(-3,3);
this.y+=random(movedY)+random(-4,4);
  //  this.x+=random(-4, 4);
 //   this.y+=random(-4, 4);
   // this.textSize+=random(-20, 20); //letter constantly changes size

  }
  // draws the elements to the screen 
  display(){
    textSize(this.textSize);
    text(this.letter, this.x, this.y);
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
