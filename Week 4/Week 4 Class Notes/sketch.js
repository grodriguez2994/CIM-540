//Example 1 In Class: 

var counter = 0
var ballDir = true;

function setup() {
    createCanvas(600, 100);
}


function draw() {
    background(255);
    //counter = counter + 1; 

    // if (counter < width){
    //  counter = counter + 1; 
    //}

    if (counter < 0) {
        //limit one  
        ballDir = true;
    }

    if (counter > width) {
        //limit two
        ballDir = false;
    }

    //    if (ballDir == true){
    //        counter = counter + 1;
    //    }
    //    
    //    if (ballDir == false){
    //        counter = counter - 1;
    //    }

    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1;
    }


    if (counter >= 0 && counter <= 200) {
        fill("blue");
    } else if (counter > 200 && counter <= 400) {
        fill("green");
    } else if (counter > 400 && counter <= width) {
        fill("red");
    } else {
        fill("yellow");
    }


    // if(counter > width){
    // counter = 0    
    //}

    ellipse(counter, height / 2, 25, 25);

}

////hw step 1 do this vertically, step 2 make section move that way like example 1 above
////Example 2 In Class: 
//
//var eColor = 0; 
//var counter = 0; 
//var bgColor = "white";
//
//function setup() {
//    createCanvas(400, 400);
////    eColor = color(235,122,79); 
//}
//
//
//function draw() {
////    background(bgColor);
//    fill(eColor);
//    ellipse(width/2,height/2,200,200);
//    
//    if (mouseX > width/2){
//      eColor = color(200,262,15);   
//    }else{
//        eColor = color(123,45,222);
//    }
//    
//    if(counter ==1){
//        bgColor = "orange"; 
//    }else if (counter == 2){
//        bgColor = "pink"; 
//    }else if (counter == 3){
//  bgColor = "red";
//    }else{bgColor ="white";
//         }
//    }


//    if (counter > 3) {
//    counter = 0;
//    }

//
//function mousePressed() {
//    counter = counter + 1;
//    console.log (counter); 
//}


//Example 3  In Class: 
//
//var colorArray = ["white", "green", "pink", "purple", "blue", "orange", "yellow"]; 
//var counter = 0 
//
//function setup() {
//    createCanvas (400,400); 
//    
//    console.log (colorArray [2]); 
//    
//    console.log(colorArray.length); 
//}
//
//
//function draw() {
//    background(colorArray[counter]); 
//}
//
//
//function mousePressed (){
//    counter = counter + 1; 
//    
//    if (counter > colorArray.length - 1){
//        counter = 0;
//    }
//    
//}
//







