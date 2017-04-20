function setup() {
    createCanvas(300, 600);
    var foo = new P5.SpeechRec();
    foo.onResult = showResult
    foo.start();
    
    var foo = new P5.Speech(); // speech synthesis object
    foo.speak('hi there');
}

function draw() {
  
}

function showResult()
{
   console.log(foo.resultString); // log the result
}
