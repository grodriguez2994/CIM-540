var currentInput = '';

var currentImage;

var boxHeight = 100;

var boxWidth = 1000;

//height
var boxCargo = 300;

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object

function setup() {
    createCanvas(3000, 6000);
    myRec.onEnd = showResult;
    myRec.start(); 

    noStroke();
}


function draw() {
    background(255);

    //    for loop

    for (var i = 0; i < currentInput.length; i++) {
        if (currentInput[i] == "a") {
            currentImage = color(219, 73, 133, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "b") {
            currentImage = color(22, 124, 124, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "c") {
            currentImage = color(71, 166, 221, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "d") {
            currentImage = color(197, 217, 45, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "e") {
            currentImage = color(129, 88, 164, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "f") {
            currentImage = color(100, 197, 180, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "g") {
            currentImage = color(101, 192, 129, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "h") {
            currentImage = color(220, 73,144, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "i") {
            currentImage = color(236, 29, 36, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "j") {
            currentImage = color(82, 129, 194, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "k") {
            currentImage = color(121, 193, 67, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "l") {
            currentImage = color(228, 229, 57, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "m") {
            currentImage = color(160, 138, 192, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "n") {
            currentImage = color(171, 89, 163, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "o") {
            currentImage = color(220, 156, 72, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "p") {
            currentImage = color(216, 110, 74, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "q") {
            currentImage = color(229, 216, 61, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "r") {
            currentImage = color(215, 69, 152, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "s") {
            currentImage = color(220, 175, 210, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "t") {
            currentImage = color(208, 43, 39, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "u") {
            currentImage = color(219, 73, 133, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "v") {
            currentImage = color(251, 223, 5, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "w") {
            currentImage = color(15, 138, 67, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "x") {
            currentImage = color(117, 147, 204, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "y") {
            currentImage = color(148, 88, 163, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else if (currentInput[i] == "z") {
            currentImage = color(225, 100, 38, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
             } else if (currentInput[i] == " ") {
            currentImage = color(225, 100, 38, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        } else {
            currentImage = color(255, 255, 255, 44);
            fill(currentImage);
            rect(100, (boxHeight * i) - 10, boxWidth / 2, boxCargo / 2);
        }

    }
    
  
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("say something", 140, 70);
    //text(currentInput, width/2, height/2 + 100);
    
    
}

function myInputEvent() {
    console.log('you are typing: ', this.value());
    currentInput = this.value();
}



function showResult() {
    if (myRec.resultValue == true) {
        //currentInput = "";
        background(192, 255, 192);
        text(myRec.resultString, width / 2, height / 2);
        console.log(myRec.resultString);
        currentInput = myRec.resultString;
    }
}