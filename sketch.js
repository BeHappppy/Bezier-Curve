var p2x = 100; //control point 2 x pos
var p2y = 100; //control point 2 y pos
var p3x = 400; //control point 3 x pos
var p3y = 400; //control point 3 y pos
var speed = 5; //how fast the points move


var p2x = 100; //control point 2 x pos
var p2y = 100; //control point 2 y pos
var p3x = 400; //control point 3 x pos
var p3y = 400; //control point 3 y pos
var speed = 5; //how fast the points move


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  //Drawing the basic bezier curve
  basicCurve();
}

function basicCurve () {
  //changing the 2nd control point
  if(keyIsDown(65)) {
     p2x -= speed;
  } // 65 = "a"
  else if (keyIsDown(68)) {
    p2x += speed;
  } // 68 = "d"
  else if (keyIsDown(87)) {
    p2y -= speed;
  } // 87 = "w"
  else if (keyIsDown(83)) {
    p2y += speed;
  } // 83 = "s"
  
  //changing the 3rd control point
  if(keyIsDown(LEFT_ARROW)) {
    p3x -= speed;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    p3x += speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    p3y -= speed;
  }
  else if(keyIsDown(DOWN_ARROW)) {
    p3y += speed;
  }
  
  //control points
  stroke(255);
  strokeWeight(20);
  point(0,300);
  point(p2x, p2y);
  point(p3x, p3y);
  point(600, 300);
  
  //lines
  strokeWeight(2);
  line(0, 300, p2x, p2y)
  line(p3x, p3y, 600, 300);
  
  //the bezier curve
  noFill();
  strokeWeight(4);
  bezier(0, 300, p2x, p2y, p3x, p3y, 600, 300);
}



