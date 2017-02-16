var eColor = 0; 
var ballDir = 0; 
var counter = 0; 
var ballDir = true; 

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(eColor);
    fill(eColor);
    counter = counter + 1; 
    
    
     ellipse(width/2, height /2, 50, 50);
    
    
    if (mouseX > width/2){
      eColor = color(252,129,177);   
    }else{
        eColor = color(252,174,71);            
    }
}


//              
//    if (mouseX > width/2){
//      counter = counter + 1;   
//    }else{
//         counter = counter - 1;   
//    }
//    
    
    
//     if (counter <= 0 && counter <= 200) {
//        ellipse(counter = counter + 1);
//    } else {
//       ellipse(counter = counter - 1); }

    



    

//
//    // if (counter < width){
//    //  counter = counter + 1; 
//    //}
//
//    if (counter < 0) {
//        //limit one  
//        ballDir = true;
//    }
//
//    if (counter > width) {
//        //limit two
//        ballDir = false;
//    }
//
//    //    if (ballDir == true){
//    //        counter = counter + 1;
//    //    }
//    //    
//    //    if (ballDir == false){
//    //        counter = counter - 1;
//    //    }
//
//   
//
//