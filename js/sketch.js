var ballNum = 200;
var friction = 0.995;
var g = [];
var pos = [];
var vel = [];
var acc = [];
var sizeBall = [];
var alphaBall = [];
var alphaGo = 0;
var count = 0;
var donea = false;

function setup() {
  var myCanvas = createCanvas(1000,600);
  background(30,30,30);
  myCanvas.parent('title');
  for(var i = 0; i<ballNum; i++){
    pos.push([i*i*sin(0.1*i)/80+width/2,i*i*cos(0.1*i)/80+height/2]);
    var graX = (pos[i][0]-width/2)/100;
    var graY = (pos[i][1]-height/2)/100;
    vel.push([0,0]);
    acc.push([graX,graY]);
    sizeBall.push(5);
    alphaBall.push(255);
    //spdX.push(1-2*Math.random());
    //spdY.push(1-2*Math.random());
  }
}

function draw() {
  if(count<220) count++;
  noStroke();
  fill(30,30,30,150);
  rect(0,0,width,height);
  for(var i = 0; i<ballNum; i++){
    var distance = dist(pos[i][0], pos[i][1], width/2, height/2);
    sizeBall[i] = map(distance,0,width/2,0,50);
    alphaBall[i] = map(distance,0,width/2,0,180);
    fill(255,255,255,alphaBall[i]-alphaGo);
    if(count>i){
      ellipse(pos[i][0],pos[i][1],sizeBall[i],sizeBall[i]);
    }
      pos[i][0]+=vel[i][0];
      pos[i][1]+=vel[i][1];
      vel[i][0]+=acc[i][0];
      vel[i][1]+=acc[i][1];
      vel[i][0]*=friction;
      vel[i][1]*=friction;
      if(alphaGo>255) alphaGo=255;
      alphaGo+=0.0002;
      if(pos[i][0]<0||pos[i][0]>width) vel[i][0] = -vel[i][0];
      if(pos[i][1]<0||pos[i][1]>height) vel[i][1] = -vel[i][1];
      if(pos[i][0]<-20||pos[i][0]>width+20) pos[i][0] = width/2;
      if(pos[i][1]<-20||pos[i][1]>height+20) pos[i][1] = height/2;
  }
  //for(var i = 0; i<ballNum; i++){
  //  for(var j = ballNum; j>i; j--){
  //    if(dist(pos[j][0],pos[j][1],pos[i][0],pos[i][1])<0){
  //      stroke(255);
  //      line(pos[j][0],pos[j][1],pos[i][0],pos[i][1])
  //    }
  //  }
  //}

  if(mouseIsPressed&&mouseX<width&&mouseX>0&&mouseY>0&&mouseY<height){
    //posX.push(mouseX);
    //posY.push(mouseY);
    //spdX.push(1-2*Math.random());
    //spdY.push(1-2*Math.random());
    //ballNum++;
    for(var i = 0; i<ballNum; i++){
      var x = mouseX - pos[i][0];
      var y = mouseY - pos[i][1];
      acc[i][0] += 0.0000001*x*i;
      acc[i][1] += 0.0000001*y*i;
      if(alphaGo>-50) alphaGo-=0.01;
    }
  }else{

    for(var i = 0; i<ballNum; i++){
      acc[i][0] = 0;
      acc[i][1] = 0;
      alphaGo+=0.0002;
    }
  }

  //if(ballNum>80){
  //  posX.splice(0,ballNum-80);
  //  posY.splice(0,ballNum-80);
  //  spdX.splice(0,ballNum-80);
  //  spdY.splice(0,ballNum-80);
  //  ballNum = 80;
  //}
}