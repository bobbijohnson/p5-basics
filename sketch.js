var s = 30;
var b = 20;
var newHeight = s + b;
var newWidth = s + b;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(50);
    
}
//draw function loops
function draw(){
  //background(50);
  if(mouseIsPressed){
    noStrSoke();
  fill(10,10,20,20);
  ellispe(mouseX,mouseY,newWidth,newHeight);
  }
  
  
}