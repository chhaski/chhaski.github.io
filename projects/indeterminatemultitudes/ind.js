// noprotect

var scl = 8;
var xoffset, yoffset, zoffset = 0.0;
var cols, rows;
var alph = ["0","O","|",".","/", ":","╲"];

function preload() {
  //myFont = loadFont('assets/inconsolata.otf');
}

function setup() {
  background(255);

  createCanvas(600, 600);

  cols = floor(width / scl);
  rows = floor(height / scl);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  textSize(scl);
}

function draw() {
  background(255);

  xoffset = 0;

  for (var x = 0; x < cols; x++) {
    yoffset = 0;
    for (var y = 0; y < rows; y++) {
      noiseDetail(2, 0.5);
			var flow = noise(xoffset, yoffset, zoffset);
      var index = round(map(flow, -1, 1, 0, alph.length));

			push();
    	translate(x * scl, y * scl);
      text(alph[index], 0, 0, scl, scl);     
      pop();

      yoffset += 0.07;
    }

    xoffset += 0.05;
  }

  zoffset += 0.04;
}