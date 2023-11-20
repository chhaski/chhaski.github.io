//~confused geographies~
//3-d Random Walk with Orbit Controls
//By Chaski
//March 2021

//Orbit Controls:  
//Left-clicking and dragging rotates the camera position about the center of the sketch
//Right-clicking and dragging will pan the camera position without rotation 
//Using the mouse wheel (scrolling) will move the camera closer or further from the center of the sketch. 

//Two Walkers
let walker;
let walker2;

//Theta Variable will control speed of rotation adjustable by the slider
var theta = 0.0;
let slider;
let h1;
let h2;
let button;
let pause;
let playing = true;


function setup() {
 
  //createCanvas(windowWidth, windowHeight, WEBGL);
  let canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('sketch-holder'); // Attach the canvas to the specified div

  background(0);



  //Initializing walkers
  walker = new Walker(0, 0);
  walker2 = new Walker(0, 0.2);


  //Below is the control panel

  // Rotation Speed Slider
  slider = createSlider(0.0002, 0.02, 0.006, 0);
  slider.position(245, 135);
  slider.style('width', '80px');
  
  h1= createP("Rotation Rate:");
  h1.position(240, 100);
  h1.style('color:black');

  h1= createP("Restart:");
  h1.position(285,145);
  h1.style('color:black');
  
  
  h1= createP("Start/Stop Drawing:");
  h1.position(206,200);
  h1.style('color:black');
  
  h2= createP("Click and drag to move around the geometry. Scroll ↑ to zoom in and ↓ to zoom out");
  h2.position(367,25);
  h2.style('color:black');

  
  button = createButton('⟲');
  button.position(310, 180);
  button.mousePressed(change);
  button.style('color:black');
  
  pause = createButton('▹');
  pause.position(310, 235);
  pause.mousePressed(hold);
  pause.style('color:black');
  
}

function draw() {

  //Rotation Speed Slider is set equal to the theta value determining rotation 
  let val = slider.value();
  theta = val;


  // draw background
  background(255);

  orbitControl(1, 1, 0.2);

  //rotateY(frameCount * theta);
  rotateX(frameCount * theta / 2);
   walker.show();
   walker2.show();
  

if (playing) {
  walker.update();
  //walker.show();

  walker2.update();
 // walker2.show();
}

}
theta += 0.02;



  function change() {
    frameCount = 0
  walker = new Walker(0, 0);
  //walker2 = new Walker(0, 0.2);
  }

//Need help getting this function to work: it freezes the whole animation when I only want it to stop drawing new lines.
function hold() {
  if (playing) {
   // noLoop();
    pause.html(',,');
  } else {
    //loop();
    pause.html(' ▹ ');
  }
  playing = !playing;
}


 