//Changes from hello to goodbye; something is wrong with mouseReleased function
//var message = "hello"; 
//
//function setup() {
//
//}
//
//function draw() {
//  background (255); 
//    textSize (32); 
//    text (message, s10, 10, 100,100); 
//}
//
//function mousePressed (){
//    message = "goodbye";
//}
//
//function mouseReleased (){
//    message = " ";
//}





//Prints out in cosole when you click A 
//function keyPressed () {
//    console.log(key);
//    console.log(keyCode);
//    
//    if (key =='A'){
//        console.log ("A is for Apple")
//    }
//    
//    if (keyCode == 65){
//        console.log ("A is for 65")
//    }
//}






//Ball going accross the screen
//var i = 0; 
//
//function setup (){
//    createCanvas (200,200);
//    frameRate (60);
//    background (0); 
//}
//
//function draw (){
    //ellipse (i, height/2,10,10); 
    
    
//    i = i + 1; 
//    
//    if (i > width){
//      i = 0  
//    }
    
//    while ( i < width){
//       i++;  
//        fill(random(255), random(255), random(255)); 
//        ellipse (random(width), random(height),10,10);
//    }
    
    //confetti party 
//    for (var i = 0; i < width; i++){
//        console.log (i); 
//        fill(random(255), random(255), random(255)); 
//        ellipse (random(width), random(height),10,10); 
//    }
     
//}






//Playing with arrays

//var randomHello = []; 
//
//function setup (){
//    createCanvas (500,500);
//    
//    console.log (randomHello.length); 
//    console.log (typeof (randomHello)); 
//    
//    randomHello.push ("Hello"); 
//    console.log (randomHello);
//    console.log (randomHello[0]);
//    console.log (randomHello.length);
//    
//    randomHello.push ("Parev"); 
//    console.log (randomHello);
//    console.log (randomHello[1]);
//    console.log (randomHello.length);
//    
//    randomHello.push ("Goddag"); 
//    console.log (randomHello);
//    console.log (randomHello[randomHello.length-1]);
//    console.log (randomHello.length);
//    
//    randomHello.push ("Bonjour"); 
//    randomHello.push ("Halo"); 
//    randomHello.push ("Aloha"); 
//    randomHello.push ("Shalom");
//    randomHello.push ("Sawubona"); 
    
//    randomHello.push ("Bonjour"); 
//    randomHello.push ("Halo"); 
//    randomHello.push ("Aloha"); 
//    randomHello.push ("Shalom");
//    randomHello.push ("Sawubona"); 
//    
//    randomHello.push ("Bonjour"); 
//    randomHello.push ("Halo"); 
//    randomHello.push ("Aloha"); 
//    randomHello.push ("Shalom");
//    randomHello.push ("Sawubona"); 
    
//    console.log (randomHello);
//    console.log (randomHello[randomHello.length-1]);
//    console.log (randomHello.length);
//    
//    
//    //removes first item in the array
//    console.log (randomHello.shift());
//    console.log (randomHello);
//    
//     //removes last item in the array
//    console.log (randomHello.pop());
//    console.log (randomHello);
//    
//     //sort array A-Z
//    console.log (randomHello.sort());
//    console.log (randomHello);
//    
//     //reverse array Z-A
//    console.log (randomHello.reverse());
//    console.log (randomHello);
    
//    text(randomHello[0], random(width), random(height)); 
//    text(randomHello[1], random(width), random(height)); 
//    text(randomHello[2], random(width), random(height)); 
//    text(randomHello[3], random(width), random(height)); 
//    text(randomHello[4], random(width), random(height)); 
//    text(randomHello[5], random(width), random(height)); 
//    text(randomHello[6], random(width), random(height)); 
//    text(randomHello[7], random(width), random(height)); 

    //this lines is the same as doing ^
//    for (var i = 0; i < randomHello.length; i++){
//        text(randomHello[i], random(width), random(height)); 
//    }
//    
//}
//
//
//function draw (){
//    for (var i = 0; i < randomHello.length; i++)
//        text(randomHello[i], random(width), random(height)); 
//}







//Polling Example

var choices = {
    "Cake": 0, 
    "Candy": 0,
    "Pie" : 0,
    "Savory": 0
}; 
    
function setup () {
    createCanvas (400,100); 
}

function draw () {
    
}


function keyPressed() {

    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if (keyCode == 49) {
        choices["Cake"]++;
    } else if (keyCode == 50) {
        choices["Candy"]++;
    } else if (keyCode == 51) {
        choices["Pie"]++;
    } else if (keyCode == 52) {
        choices["Savory"]++;
    }


}


















