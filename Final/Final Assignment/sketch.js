var currentInput = '';

var img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26;

var currentImage;

var boxHeight = 100;

var boxWidth = 1000;

//height
var boxCargo = 300;

var currentInput = new p5.SpeechRec(); // new P5.SpeechRec object

function setup() {
    createCanvas(3000, 6000);
    
        textSize(32);
		textAlign(CENTER);
    	text("say something", width/2, height/2);
		currentInput.onResult = showResult;
		currentInput.start();

    img = loadImage("images/1.png");
    img2 = loadImage("images/2.png");
    img3 = loadImage("images/3.png");
    img4 = loadImage("images/4.png");
    img5 = loadImage("images/5.png");
    img6 = loadImage("images/6.png");
    img7 = loadImage("images/7.png");
    img8 = loadImage("images/8.png");
    img9 = loadImage("images/9.png");
    img10 = loadImage("images/10.png");
    img11 = loadImage("images/11.png");
    img12 = loadImage("images/12.png");
    img13 = loadImage("images/13.png");
    img14 = loadImage("images/14.png");
    img15 = loadImage("images/15.png");
    img16 = loadImage("images/16.png");
    img17 = loadImage("images/17.png");
    img18 = loadImage("images/18.png");
    img19 = loadImage("images/19.png");
    img20 = loadImage("images/20.png");
    img21 = loadImage("images/21.png");
    img22 = loadImage("images/22.png");
    img23 = loadImage("images/23.png");
    img24 = loadImage("images/24.png");
    img25 = loadImage("images/25.png");
    img26 = loadImage("images/26.png");

    var inp = createInput('');
    inp.input(myInputEvent);

    inp.position(10, 10);
}


function draw() {
    background(255);

//    if (currentInput == "a") {
//        image(img, 0, height / 2, img.width / 2, img.height / 2);
//    } else if (currentInput == "b") {
//        image(img2, 0, height / 2, img.width / 2, img.height / 2);
//    }


//    for loop
    
        for(var i = 0; i < currentInput.length; i++){
            
          if (currentInput[i] == "a") {
              currentImage = img;
          } else if (currentInput[i] == "b") {
             currentImage = img2;
          } else if (currentInput[i] == "c") {
             currentImage = img3;
        } else if (currentInput[i] == "d") {
             currentImage = img4;
             } else if (currentInput[i] == "e") {
             currentImage = img5;
              } else if (currentInput[i] == "f") {
             currentImage = img6;
          } else if (currentInput[i] == "g") {
             currentImage = img7;
        } else if (currentInput[i] == "h") {
             currentImage = img8;
             } else if (currentInput[i] == "i") {
             currentImage = img9;
              } else if (currentInput[i] == "j") {
             currentImage = img10;
          } else if (currentInput[i] == "k") {
             currentImage = img11;
        } else if (currentInput[i] == "l") {
             currentImage = img12;
             } else if (currentInput[i] == "m") {
             currentImage = img13;
              } else if (currentInput[i] == "n") {
             currentImage = img14;
          } else if (currentInput[i] == "o") {
             currentImage = img15;
        } else if (currentInput[i] == "p") {
             currentImage = img16;
             } else if (currentInput[i] == "q") {
             currentImage = img17;
              } else if (currentInput[i] == "r") {
             currentImage = img18;
          } else if (currentInput[i] == "s") {
             currentImage = img19;
        } else if (currentInput[i] == "t") {
             currentImage = img20;
             } else if (currentInput[i] == "u") {
             currentImage = img21;
              } else if (currentInput[i] == "v") {
             currentImage = img22;
          } else if (currentInput[i] == "w") {
             currentImage = img23;
        } else if (currentInput[i] == "x") {
             currentImage = img24;
             } else if (currentInput[i] == "y") {
             currentImage = img25;
             } else if (currentInput[i] == "z") {
             currentImage = img26;
             }
          
          //image(0,(boxHeight * i) - 10, width, height);
            
            image(currentImage, 100, (boxHeight * i) -10, boxWidth/2, boxCargo/2);
            
            
            //currentImage[i].display(); 
    }
    

    //console.log(currentInput.length);
}

function myInputEvent() {
   console.log('you are typing: ', this.value());
    currentInput = this.value();

} 



//function showResult()
//	{
//		if(currentInput.resultValue==true) {
//			console.log(currentInput.resultString);
//		}
//	}


	function showResult()
	{
		if(currentInput.resultValue==true) {
			background(192, 255, 192);
			text(currentInput.resultString, width/2, height/2);
			console.log(currentInput.resultString);
		}
	}