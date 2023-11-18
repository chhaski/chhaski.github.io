


// let img;

// function preload() {
//   img = createImg("projects/index/emptyvectors.gif"); 
//   //img.hide(); // Hides the HTML img element
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(255); // Set background to see the image clearly
//   image(img, 0, 0, width, height); // Draw the HTML img on the canvas
// }

let img;

function preload() {
  img = loadImage("projects/index/emptyvectors.gif"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ///image(img, 0, 0, width, height);
  img.position(50, 350);
}