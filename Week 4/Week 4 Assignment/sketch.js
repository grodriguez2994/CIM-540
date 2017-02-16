var eColor = 0;
var ballDir = 0;
var counter = 0;
var ballDir = false;

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(eColor);
    fill(eColor);

    if (counter <= 0) {
        ballDir = true;
    }


    if (counter >= height) {
        ballDir = false;
    }


    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1;
    }


    if (mouseY < height / 2) {
        ballDir = false;
    } else {
        ballDir = true;
    }



    if (mouseY > height / 2) {
        eColor = color(252, 129, 177);
    } else {
        eColor = color(252, 174, 71);
    }

    ellipse(width / 2, counter, 50, 50);

}