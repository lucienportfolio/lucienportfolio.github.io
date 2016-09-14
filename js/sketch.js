var ballNum = 80;
var posX = [];
var posY = [];
var spdX = [];
var spdY = [];

function setup() {
  var myCanvas = createCanvas(1000,650);
  background(255,40,40);
  myCanvas.parent('title');
  for(var i = 0; i<ballNum; i++){
    posX.push(Math.random()*width);
    posY.push(Math.random()*height);
    spdX.push(1-2*Math.random());
    spdY.push(1-2*Math.random());
  }
}

function draw() {
  noStroke();
  fill(255,40,40,70);
  rect(0,0,width,height);
  fill(255,255,255,100);
  for(var i = 0; i<ballNum; i++){
    ellipse(posX[i],posY[i],3,3);
    posX[i]+=spdX[i];
    posY[i]+=spdY[i];
    if(posX[i]<0||posX[i]>width) spdX[i] = -spdX[i];
    if(posY[i]<0||posY[i]>height) spdY[i] = -spdY[i];
  }
  for(var i = 0; i<ballNum; i++){
    for(var j = ballNum; j>i; j--){
      if(dist(posX[j],posY[j],posX[i],posY[i])<80){
        stroke(255);
        line(posX[j],posY[j],posX[i],posY[i])
      }
    }
  }

  if(mouseIsPressed&&mouseX<width&&mouseX>0&&mouseY>0&&mouseY<height){
    posX.push(mouseX);
    posY.push(mouseY);
    spdX.push(1-2*Math.random());
    spdY.push(1-2*Math.random());
    ballNum++;
  }
  if(ballNum>80){
    posX.splice(0,ballNum-80);
    posY.splice(0,ballNum-80);
    spdX.splice(0,ballNum-80);
    spdY.splice(0,ballNum-80);
    ballNum = 80;
  }
}