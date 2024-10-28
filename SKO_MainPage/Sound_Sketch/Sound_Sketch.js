let song, mic, speed, volume;

function preload() {
  song = loadSound("data/doorbell.mp3");
}

function setup() {
createCanvas(windowWidth,windowHeight);
background(255,255,255);
getAudioContext().suspend(); //browser permission thing
mic = new p5.AudioIn();
mic.start();
}


function draw() {
  background("white");
 
  //song stuff
  
  let circleDiameter = map(mouseY,  0, 200, 1, 100);
 circle(mouseX,mouseY,circleDiameter);
 volume = map(mouseX, 0, width, 0.0, 1.0);
speed = map(mouseY, 0, height, 0.01, 10);
song.amp(volume); //volume
song.rate(6); //speed

//mic stuff
volume = mic.getLevel();
//let circleDiameter = map(volume, 0.0, 1.0, 50, 500);
circle(mouseX,mouseY,circleDiameter);
}

function mousePressed () {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    song.play();
    song.loop();
  }
}

function keyTyped() {
  if (key === " "){
  song.stop();
  }
  else{
    song.play();
  }
}
