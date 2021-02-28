var font;
var x, y;
var ySize;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup(){
  font = 'DotGothic16';
  ySize = 250;
  createCanvas(windowWidth, ySize);
  textFont(font);
  noStroke();
  textAlign(LEFT);
  textSize(28);
  fill('rgba(173, 33, 33, 0.39)');
  x = 10;
  y = 3*ySize/4;

}

function draw(){
  background(255);
  ellipse(20, 200, 600, 400);
  push();
    fill(0);
    text("< / theWordsProject softwareArt theWordsProject softwareArt theWordsProject softwareArt theWordsProject >", x, y);
  pop();
  x += 1;
  if (x > windowWidth+100) x = 0;
}
