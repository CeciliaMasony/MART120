var characterX = 100;
var characterY = 100;

var x=100

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeColors = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX = -100;
var mouseShapeY = -100;

function setup()
{
    createCanvas(500, 600);


 for (var i = 0; i < 5; i++){
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
 }

  shapeColors [0] = "pink"
  shapeColors [1] = "lightblue"
  shapeColors [2] = "green"
  shapeColors [3] = "orange"
  shapeColors [4] = "red"

  createCharacter (100,100);
}

function draw()
{
    background(70,140,50);
    stroke(0);
    fill(0);
    
    createBorders(5);

    textSize(16);
    text("EXIT", width - 50, height - 50)
  
    drawCharacter();
    characterMovement();
  

  for (var i = 0; i < shapeXs.length; i++) {
         fill(shapeColors[i]);
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
            shapeXs[i] = 20;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

 if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(200,55,160);
    circle(mouseShapeX, mouseShapeY, 35);
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

function createCharacter(x,y){
    characterX = x;
    characterY = y;
    console.log(characterX)  
    
}

function createBorders(thickness){
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

   function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
   }