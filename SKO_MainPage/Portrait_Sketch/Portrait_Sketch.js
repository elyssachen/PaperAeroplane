function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textFont('Arial');
}


function draw() {
background(255,255,255);
strokeWeight(4);
textSize(20);
text('this failed horrifically because i didnt know what i was doing and made all the shape positions absolute while working with my window frame on half the screen',10,100);

ellipse(width/2,height/2,300,350);

//eyes
push();
strokeWeight(5);
line(width/2-90,height/2+17,width/2-30,height/2+14,);
line(width/2+90,height/2+17,width/2+30,height/2+14,);
fill(0);
circle(width/2+70,height/2+24,15);
circle(width/2-45,height/2+24,15);
pop();

//nose
textSize(65);
text('>',width/2-14,height*0.61);

//mouth
push();
strokeWeight(3);
fill(120,0,0,190);
//line(width/2-60,height*0.63, width/2-10,height*0.64);
ellipse(width/2-20,height*0.64,50,20);
pop();

 //hair
push();
noFill();
arc(width*0.37,height*0.16,350,680,QUARTER_PI,HALF_PI,OPEN);
arc(width*0.63,height*0.16,350,680,HALF_PI,HALF_PI+QUARTER_PI,OPEN);
 push();
     translate(width*0.06,height*0.7);
      rotate(-QUARTER_PI);
      triangle(250, 300, 350, 200, 210, 200);
    pop();
    push();
       translate(width*0.6,height*0.3);
      rotate(QUARTER_PI);
      triangle(211, 199, 350, 200, 300, 300);
    pop();
pop();

//glasses
push();
strokeWeight(15);
stroke(0,0,0,80);
noFill();
square(width*0.52,height/2,130);
square(width*0.37,height/2,130);
line(width/2-10,height*0.53,width/2+10,height*0.53);
pop();

//body
push();
translate(0,height*0.29);
fill(0);
triangle(width/2,height/2-100, width*0.45, height*0.6,width*0.55, height*0.6);
line(width*0.52, height*0.6, width*0.52,height*0.65);
line(width*0.48, height*0.6, width*0.48,height*0.65);
line(width*0.483, height*0.46, width*0.45,height*0.5);
line(width*0.517, height*0.46, width*0.55,height*0.5);
pop();
}
