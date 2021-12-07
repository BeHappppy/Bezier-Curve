var px = [0, 100, 400, 600]; //control points x pos
var py = [300, 100, 400, 300]; //control points y pos
var speed = 5; //how fast the points move
var pointSwitch = 1; //wich points will move? (control points 1 & 4 or 2 & 3)

function setup() {
  createCanvas(screen.availWidth, screen.availHeight);
}

function draw() {
  background(0);
  
  //change which points are changing with the space bar
  if(keyIsDown(32)) {
    if (pointSwitch === 1) {
      pointSwitch = 0;
    }
    else {
      pointSwitch = 1;
    }
  }
  
  //change what pressing WASD or the arrow keys do (change control points 1 & 4 or 2 & 3)
  switch(pointSwitch) {
    case 0:
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
  
  //control points
  stroke(255);
  strokeWeight(20);
  point(px[0], py[0]);
  point(px[1], py[1]);
  point(px[2], py[2]);
  point(px[3], py[3]);
  
  //lines
  strokeWeight(2);
  line(px[0], py[0], px[1], py[1])
  line(px[2], py[2], px[3], py[3]);
  
  //the bezier curve
  noFill();
  strokeWeight(4);
  bezier(px[0], py[0], px[1], py[1], px[2], py[2], px[3], py[3]);
}

