var kitten0; 
var kitten1; 
var kitten2; 
var kitten3; 

var kittenArray = []; 
var kittenIndex = 0; 

function setup() {
createCanvas (1640,1480); 
    kittenArray.push (loadImage ("images/kitten.jpg"));
    kittenArray.push (loadImage ("images/kitten1.jpg"));
    kittenArray.push (loadImage ("images/kitten2.jpg"));
    kittenArray.push (loadImage ("images/kitten3.jpg"));    
    
}

function draw() {
    image (kittenArray [kittenIndex],0,0);
    kittenChooser (); 


}


function mousePressed (){
    kittenIndex = kittenChooser (); 
}

function kittenChooser (){
    
    var randomNum = int(random(0,4)); 
    
    return randomNum; 

}


