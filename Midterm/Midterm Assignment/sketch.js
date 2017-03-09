    
function setup() {
createCanvas (500,500);
    fillColor = "white"
img = loadImage ("images/1.png");
img = loadImage ("images/2.png");
}

function draw() {
  
    
image(img, 0, height/2, img.width/2, img.height/2);    
}

function myKeypress () {
    
}