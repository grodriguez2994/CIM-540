var mouthX = 50; 
var mouthY = 300; 
var mouthW = 400; 
var mouthH = 40; 

var eye1X = 70;
var eye1Y = 70; 

var eye2offset = 300; 

var pupilOffset = 20; 

var backgroundColor = 'yellow'

var randNum = 0; 

var mapX = 0; 

function setup() {
    createCanvas(500,400); 
    background(240,230,240); 

    console.log(width + " " + height)

    noStroke (); 
    randNum = random(256); //0-255
    console.log (randNum);
}


function draw() {
    
    //frameRate(10); 
    
    background(backgroundColor); 
    
    mapX = map(mouseX, 0, width, -10,10);
    
    ellipse (mouseX,mouseY,10,10);
    
    ellipse (random(width), random(height),50,50); 
    
    fill(255);
    
    //eye1
    //x,y,width,height 
    ellipse(eye1X,eye1Y,100,100); 
    fill (0,0,255); 
    ellipse(eye1X + mapX,eye1Y+pupilOffset,25,50); 
    
    //eye2
    fill(255);
    ellipse(eye1X + eye2offset, eye1Y,100,100); 
    fill (0,0,255);
    ellipse(eye1X+eye2offset + mapX,eye1Y+pupilOffset,25,50);
    
    fill(255);
    //nose     
    triangle(width/2,height/2,(width/2)+20,(height/2) + 20,(width/2 )- 20, (height/2)+20); 
    
    fill(255); 
    //mouth     
    rect(mouthX, mouthY, mouthW, mouthH);  
    stroke(125);
    strokeWeight(3); 
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2); 
    noStroke();   
    
    //tongue
    //fill('red'); 
    randNum = random (256); //0-255
    fill(randNum,0,0);
    arc(width/2,322,100,100,0,PI);
        
}


function mousePressed(){
//background('yellow');   
backgroundColor = "pink";        
}


function mouseReleased (){
    backgroundColor = "blue"; 
}



