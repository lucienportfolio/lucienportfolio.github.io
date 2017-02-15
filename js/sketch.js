var row = 500;
var pos = [];
var ballSize = [];
var ballAlpha = [];
var maxSize = [];
var inc = [];

var ired = [];
var igreen = [];
var iblue = [];

var color;

var vel =[];

var count = 0;

function setup(){

  background(30,30,30);
  var myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('title');

  for(var i = 0; i<row; i++){
    pos.push([random(0,width),random(0,height)]);
    vel.push([random(-1,1),random(-1,1)]);
    ballSize.push(0);
    maxSize.push(random(50,350));
    inc.push(true);
    ballAlpha.push(0);
    color = random(3);
    if(color>=0&&color<1){
      ired.push(255);
      igreen.push(35);
      iblue.push(35);
    }else if(color>=1&&color<2){
      ired.push(255);
      igreen.push(235);
      iblue.push(20);
    }else{
      ired.push(40);
      igreen.push(205);
      iblue.push(255);
    }
  }

}

function draw(){

    background(30,30,30);

    for(var i = 0; i<row; i++){
      if(mouseX>0&&mouseX<width&&mouseY>0&&mouseY<height){
        ballSize[i] = map(dist(mouseX,mouseY,pos[i][0],pos[i][1]),0,width/4,maxSize[i],0);
        ballAlpha[i] = map(dist(mouseX,mouseY,pos[i][0],pos[i][1]),0,width/4,150,0);
      }else{
        ballSize[i] = 0;
      }
        pos[i][0]+=vel[i][0];
      pos[i][1]+=vel[i][1];
      if(pos[i][0]<=0||pos[i][0]>=width) vel[i][0]*=-1;
      if(pos[i][1]<=0||pos[i][1]>=height) vel[i][1]*=-1;
      noStroke();
      if(mouseIsPressed){
          fill(ired[i],igreen[i],iblue[i]);
      }else{
          fill(255,ballAlpha[i]);
      }
      if(ballSize[i]>0){
          ellipse(pos[i][0],pos[i][1],ballSize[i],ballSize[i]);
      }
    }

}

// var ballNum = 200;
// var friction = 0.995;
// var g = [];
// var pos = [];
// var vel = [];
// var acc = [];
// var sizeBall = [];
// var alphaBall = [];
// var alphaGo = 0;
// var count = 0;
// var donea = false;
//
// function setup() {
//   background(30,30,30);
//     var myCanvas = createCanvas(windowWidth,windowHeight);
//     myCanvas.parent('title');
//   for(var i = 0; i<ballNum; i++){
//     pos.push([i*i*sin(0.1*i)/80+width/2,i*i*cos(0.1*i)/80+height/2]);
//     var graX = (pos[i][0]-width/2)/100;
//     var graY = (pos[i][1]-height/2)/100;
//     vel.push([0,0]);
//     acc.push([graX,graY]);
//     sizeBall.push(5);
//     alphaBall.push(355);
//     //spdX.push(1-2*Math.random());
//     //spdY.push(1-2*Math.random());
//   }
// }
//
// function draw() {
//   var myCanvas = createCanvas(windowWidth,windowHeight);
//   myCanvas.parent('title');
//   if(count<220) count++;
//   noStroke();
//   fill(30,30,30,150);
//   rect(0,0,width,height);
//   for(var i = 0; i<ballNum; i++){
//     var distance = dist(pos[i][0], pos[i][1], width/2, height/2);
//     sizeBall[i] = map(distance,0,width/2,80,0);
//     alphaBall[i] = map(distance,0,width/2,255,0);
//     fill(255,alphaBall[i]-alphaGo-Math.random()*100);
//     if(count>i){
//       ellipse(pos[i][0],pos[i][1],sizeBall[i],sizeBall[i]);
//     }
//       pos[i][0]+=vel[i][0];
//       pos[i][1]+=vel[i][1];
//       vel[i][0]+=acc[i][0];
//       vel[i][1]+=acc[i][1];
//       vel[i][0]*=friction;
//       vel[i][1]*=friction;
//       if(alphaGo>255) alphaGo=255;
//       alphaGo+=0.0002;
//       if(pos[i][0]<0||pos[i][0]>width) vel[i][0] = -vel[i][0];
//       if(pos[i][1]<0||pos[i][1]>height) vel[i][1] = -vel[i][1];
//       if(pos[i][0]<-20||pos[i][0]>width+20) pos[i][0] = width/2;
//       if(pos[i][1]<-20||pos[i][1]>height+20) pos[i][1] = height/2;
//   }
//   //for(var i = 0; i<ballNum; i++){
//   //  for(var j = ballNum; j>i; j--){
//   //    if(dist(pos[j][0],pos[j][1],pos[i][0],pos[i][1])<0){
//   //      stroke(255);
//   //      line(pos[j][0],pos[j][1],pos[i][0],pos[i][1])
//   //    }
//   //  }
//   //}
//
//   if(mouseIsPressed&&mouseX<width&&mouseX>0&&mouseY>0&&mouseY<height){
//     //posX.push(mouseX);
//     //posY.push(mouseY);
//     //spdX.push(1-2*Math.random());
//     //spdY.push(1-2*Math.random());
//     //ballNum++;
//     for(var i = 0; i<ballNum; i++){
//       var x = mouseX - pos[i][0];
//       var y = mouseY - pos[i][1];
//       acc[i][0] += 0.0000001*x*i;
//       acc[i][1] += 0.0000001*y*i;
//       if(alphaGo>-50) alphaGo-=0.01;
//     }
//   }else{
//
//     for(var i = 0; i<ballNum; i++){
//       acc[i][0] = 0;
//       acc[i][1] = 0;
//       alphaGo+=0.0002;
//     }
//   }
//
//   //if(ballNum>80){
//   //  posX.splice(0,ballNum-80);
//   //  posY.splice(0,ballNum-80);
//   //  spdX.splice(0,ballNum-80);
//   //  spdY.splice(0,ballNum-80);
//   //  ballNum = 80;
//   //}
// }