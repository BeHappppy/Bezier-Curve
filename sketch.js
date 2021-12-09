var px = [0, 100, 400, 600]; //control points x pos
var py = [300, 100, 400, 300]; //control points y pos
var reset = 0;
var speed = 5; //how fast the points move
var pointSwitch = 1; //wich points will move? (control points 1 & 4 or 2 & 3)
var c1c4;
var c2c3;

function setup() {
  createCanvas(screen.width, screen.height - 1/8);
}

function draw() {
  background(122, 240, 173);
  
  //reset button
  fill(214, 56, 61);
  strokeWeight(4);
  stroke(148, 25, 29);
  rect(10, 10, 50, 50);
  if(mouseX >= 10 && mouseX <= 60 && mouseY >= 10 && mouseY <=60) {
    reset = 1;
  }
  else {
    reset = 0;
  }
  
  theCurve();
}

//function to draw the bezier curve
function theCurve () {
  
  //change what pressing WASD or the arrow keys do (change control points 1 & 4 or 2 & 3)
  switch(pointSwitch) {
    case 0:
      //colour the points being moved
      c1c4 = 255;
      c2c3 = 180;
      
      //changing the 2nd control point
      if(keyIsDown(65)) {
         px[0] -= speed;
      } // 65 = "a"
      else if (keyIsDown(68)) {
        px[0] += speed;
      } // 68 = "d"
      else if (keyIsDown(87)) {
        py[0] -= speed;
      } // 87 = "w"
      else if (keyIsDown(83)) {
        py[0] += speed;
      } // 83 = "s"

      //changing the 3rd control point
      if(keyIsDown(LEFT_ARROW)) {
        px[3] -= speed;
      }
      else if(keyIsDown(RIGHT_ARROW)) {
        px[3] += speed;
      }
      else if(keyIsDown(UP_ARROW)) {
        py[3] -= speed;
      }
      else if(keyIsDown(DOWN_ARROW)) {
        py[3] += speed;
      }
      break;
      
    case 1:
      //colour the points being moved
      c1c4 = 180;
      c2c3 = 255;
      
      //changing the 2nd control point
      if(keyIsDown(65)) {
         px[1] -= speed;
      } // 65 = "a"
      else if (keyIsDown(68)) {
        px[1] += speed;
      } // 68 = "d"
      else if (keyIsDown(87)) {
        py[1] -= speed;
      } // 87 = "w"
      else if (keyIsDown(83)) {
        py[1] += speed;
      } // 83 = "s"

      //changing the 3rd control point
      if(keyIsDown(LEFT_ARROW)) {
        px[2] -= speed;
      }
      else if(keyIsDown(RIGHT_ARROW)) {
        px[2] += speed;
      }
      else if(keyIsDown(UP_ARROW)) {
        py[2] -= speed;
      }
      else if(keyIsDown(DOWN_ARROW)) {
        py[2] += speed;
      }
      break;
  }
  
  //lines
  strokeWeight(2);
  stroke(220);
  line(px[0], py[0], px[1], py[1]);
  line(px[2], py[2], px[3], py[3]);
  
  //the bezier curve
  noFill();
  strokeWeight(6);
  stroke(162, 71, 222);
  bezier(px[0], py[0], px[1], py[1], px[2], py[2], px[3], py[3]);
  
  //control points
  strokeWeight(20);
  stroke(c1c4);
  point(px[0], py[0]);
  point(px[3], py[3]);
  
  stroke(c2c3);
  point(px[1], py[1]);
  point(px[2], py[2]);

}

//control the varaible 'pointSwitch' so the control points that switch are changed
function keyPressed () {
  if (keyCode === 32) {
    if (pointSwitch === 1) {
        pointSwitch = 0;
      }
    else {
        pointSwitch = 1;
    }
  }
}

//reset the points
function mousePressed () {
  if (reset === 1) {
    px = [0, 100, 400, 600]; 
    py = [300, 100, 400, 300]; 
  }
}
