var mouthX = 100; 
var mouthY = 140; 
var mouthW = 400; 
var mouthH = 500;
var backgroundColor = 'yellow'; 
var mapX = 0; 

function setup() {    
createCanvas(500,400); 
}

function draw() {
    
background(backgroundColor); 
    
mapX = map(mouseX, 0, width, -10,17);
    
fill(255,255,255); 
strokeWeight(2.5);

ellipse(mouthX, mouthY, 100, 100); 
ellipse(mouthX + 300, mouthY,100,100); 
    
//ellipse (100,140,100,100);
//ellipse (400,140,100,100); 
    
    
arc(250, 400, 280, 280, PI, TWO_PI); 

fill(0,0,0); 
//ellipse (80,150,40,40); 
//ellipse (380,150,40,40); 
ellipse(mouthX-20 + mapX,mouthY+10,40,40);
ellipse(mouthX+280 + mapX,mouthY+10,40,40);  
    
}

function mousePressed(){
//background('yellow');   
backgroundColor = "pink";        
}


function mouseReleased (){
backgroundColor = "orange"; 
}






 