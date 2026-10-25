 function setup() {
  createCanvas(500,600);
}

function draw() {
  background(250);
  strokeWeight(5);

  point(113,260);
  point(40,160);
  line(40,160,113,260);
  
  point(247,260);
  point(300,160);
  line(247,260,300,160);

  fill("white")
  circle(180,110,148);
  circle(145, 95, 55);
  circle(217,95,55);

  fill("green");
  rect(155,180,50);
  rect(115,230,130,150);
  point(145,95)
  point(220,95)

  fill("pink");
  triangle(190, 150, 150, 145, 160, 165);

  fill("purple")
 textSize(45);
 text("CECILIA",320,130);
  
}