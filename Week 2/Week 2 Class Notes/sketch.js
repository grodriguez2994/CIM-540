//var num = 100; 
//var num2 = 50; 
//var message = "hello"; 
//var trex = 1000; 
//var anotherMessage = "goodbye";
//var gabriela = 7; 
//var booleanVar = true;
//var booleanVar2 = false; 

var mouthX = 50; 
var mouthY = 300; 
var mouthW = 400; 
var mouthH = 40; 


function setup() {
//console.log(num); 
//console.log("num + num2 = " + (num + num2)); 
//console.log (num * num2); 
//console.log(num/num2); 
//console.log(message + anotherMessage); 
//console.log(message + " " + anotherMessage); 
//console.log(gabriela); 
//console.log(booleanVar); 
//console.log (message + trex);
//    
////This is not going to work 
//console.log(message * trex); 
//    
///* If you want
//to write more stuff
//use a multi-line comment */ 
//    
//var message2 = "This only works in the setup"; 
//console.log(message2); 
//console.log(message3); 
//    

createCanvas(500,400); 
background(240,230,240); 

console.log(width + " " + height)
}


function draw() {
//    console.log(num);  
//    console.log (message2); 
//    var message3 = "This only works in the draw"; 
    
    //z,y,width,height 
ellipse(70,70,100,100); 
    
ellipse(width/2,height/2,50,50); 
    
rect(mouthX, mouthY, mouthW, mouthH);  
line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2); 
    
}












