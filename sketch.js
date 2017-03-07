var newWidth = 50;
var newHeight = 50;


//setup function executes once
function setup(){
    createCanvas(600,400);
    background(50);
    
}
//draw function loops
function draw(){
  //background(50);
  if(mouseIsPressed){
    noStroke();
  fill(50,150,300,50);
  rect(mouseX,mouseY,newWidth,newHeight);
  fill(800,60,100,50);
  ellipse(mouseX,mouseY,newWidth,newHeight);
  }
  
  
}