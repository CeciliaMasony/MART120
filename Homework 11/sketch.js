
var characterX = 100;
var characterY = 100;

var x=100
var xDirection = "right";
var xSpeed;

var y=180;
var yDirection = "up";
var ySpeed;

var pinkX = 100;
var pinkY = 70;

var pinkXSpeed = 3;
var pinkYSpeed = 3;

var greenX = 50;
var greenY = 50;
var diameter = 5;

var size = 45;
var count = 0;
var sizeDirection = 1;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX = -100;
var mouseShapeY = -100;

function setup()
{
    createCanvas(500, 600);
    xSpeed = random (1,5);
    ySpeed = random (1,5);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(70,140,50);
    stroke(0);
    fill(0);
    
    createBorders(5);

    textSize(16);
    text("EXIT", width-50,height-50)

    fill("lightblue");
    rect(x,400,80,90);
  
    fill("pink");
    rect(pinkX,pinkY,100,50);

  pinkX += pinkXSpeed;
  pinkY += pinkYSpeed;

  if(pinkX >= width-100 || pinkX <=0)
  {
    pinkXSpeed *= -1;
  }

  if(pinkY >= height-50 || pinkY <= 0)
  {
    pinkYSpeed *= -1;
  }
  
 if (xDirection=="right"){
   x= x + xSpeed;
 }

if (xDirection=="left") {
 x=x - xSpeed;
 }

 if (x>=450) {
xDirection = "left";
xSpeed = random(1,5);
 }
  
if (x<=150) {
xDirection = "right";
xSpeed = random(1,5);
 }
  

if (yDirection=="down"){
 y=y + ySpeed;
 }

 if (yDirection=="up") {
 y=y - ySpeed;
}
    
if (y>=450) {
yDirection = "down";
ySpeed = random(1,10);
 }
    
if (y<=150) {
 yDirection = "up";
 ySpeed = random(1,10);
 }
  
    fill(100,245,200);
    circle(shapeX, shapeY, 40);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX = 0;
    }

    if(shapeX < 0)
    {
        shapeX = width;
    }

      
    if(shapeY > height)
    {
        shapeY = 0;
    }

    if(shapeY < 0)
    {
        shapeY = height;
    }

    fill(24,200,29);
    circle(greenX,greenY,10);

    if(greenX <= 500)
    {
        greenX+=10;
    }
    else
    {
        greenX = 10;
    }

    if(greenY <= 500)
        {
            greenY+=3;
        }
        else
        {
            greenY = 10;
        }
    
    if(diameter <= 500)
        {
            diameter+=8;
        }
        else
        {
            diameter = 25;
        }

    fill("orange");
    if (x < 400){
        text("bounce",300,380);
    }
    else if (x > 320){
        text("bounce",width-80 ,height-80);
    }

    drawCharacter();
    characterMovement();

    if(characterX > width-20 && characterY > height-20)
    {
        fill(250);
        stroke(3);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    fill(200,55,160);
    circle(mouseShapeX, mouseShapeY, 25);

}

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}

function characterMovement(){

    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX)  
    
}

function createBorders(thickness)
{
    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0, height-thickness,width, thickness);

    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}