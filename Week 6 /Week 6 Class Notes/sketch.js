//Polling Example

//var choices = {
//    "Cake": 0, 
//    "Candy": 0,
//    "Pie" : 0,
//    "Savory": 0
//}; 
//
//var cakeMessage = "Cake:"; 
//var candyMessage = "Candy:"; 
//var pieMessage = "Pie:"; 
//var savoryMessage = "Savory:"; 
//    
//function setup () {
//    createCanvas (400,100); 
//    noStroke (); 
//}
//
//function draw () {
//    background (255); 
//    
//    fill (255,0,0,100); 
//    ellipse (50, height/2, choices ["Cake"], choices ["Cake"]); 
//    fill (0,255,0,100); 
//    ellipse (100, height/2, choices ["Candy"], choices ["Candy"]); 
//    fill (0,0,255,100); 
//    ellipse (180, height/2, choices ["Pie"], choices ["Pie"]); 
//    fill (0,0,0,100); 
//    ellipse (260, height/2, choices ["Savory"], choices ["Savory"]); 
//    
//    
//    text (cakeMessage, 10, height/2); 
//    text (candyMessage, 80, height/2); 
//    text (pieMessage, 160, height/2); 
//    text (savoryMessage, 240, height/2); 
//    
//}
//
//
//
//function keyPressed() {
//
//    //49 == 1, 50 == 2, 51 == 3, 52 == 4
//    if (keyCode == 49) {
//        choices["Cake"]++;
//        cakeMessage = "Cake: " + choices["Cake"];
//    } else if (keyCode == 50) {
//        choices["Candy"]++;
//        candyMessage = "Candy: " + choices["Candy"];
//    } else if (keyCode == 51) {
//        choices["Pie"]++;
//        pieMessage = "Pie: " + choices["Pie"];
//    } else if (keyCode == 52) {
//        choices["Savory"]++;
//        savoryMessage = "Savory: " + choices["Savory"];
//    }
//
//}




//Images

var img;  // Declare variable 'img'.

function setup() {
  createCanvas(400, 500);
  img = loadImage("assets/pic.jpg");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
}












