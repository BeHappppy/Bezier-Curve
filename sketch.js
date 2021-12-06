function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  //control points
  stroke(255);
  strokeWeight(24);
  point(0,300);
  point(mouseX, mouseY);
  point(400, 400);
  point(600, 300);
  
  //lines
  strokeWeight(2);
  line(0, 300, mouseX, mouseY)
  line(400, 400, 600, 300);
  
  //the bezier curve
  noFill();
  strokeWeight(4);
  bezier(0, 300, mouseX, mouseY, 400, 400, 600, 300);
}
