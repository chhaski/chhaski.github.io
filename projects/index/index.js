


let img;

function preload() {
  img = createImg("index/emptyvectors.gif");
  img.hide(); // Hides the HTML img element
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); // Set background to see the image clearly
  image(img, 0, 0, width, height); // Draw the HTML img on the canvas
}
