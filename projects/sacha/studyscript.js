
var gif, gif2, gif3, gif4, gif5, gif6, gif7;
var img;
var gifarray = [];
var gifarray2 = [];
var counter = 0;

function preload() {
  //gif = loadGif('gifs/c4gcha1.gif');

  gif = loadGif('https://media3.giphy.com/media/4gA9Xw4apikFVxAAYa/giphy.gif');
  gif2 = loadGif('https://media3.giphy.com/media/EM5PZ43ILMwVPpc7I0/giphy.gif');
  gif3 = loadGif('https://media4.giphy.com/media/xugE1KFOS0RrPpSjCN/giphy.gif');
  gif4 = loadGif('https://media3.giphy.com/media/vmjwSQ7SJ0oEewKTBv/giphy.gif');
  gif5 = loadGif('https://media0.giphy.com/media/xcKS5gwjOfYrJnCjrq/giphy.gif');
  gif6 = loadGif('https://media4.giphy.com/media/6PRxSk48IIlU97VXv4/giphy.gif');
  gif7 = loadGif('https://media3.giphy.com/media/rnIuObh12x6LqU4FS5/giphy.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   //left
  gifarray.push(gif3, gif4,gif, gif2,  gif5, gif6, gif7);
  //how to randomly pull from an array? 
  //right
  gifarray2.push(gif4, gif3, gif6, gif5,  gif2, gif, gif7);
  // gifarray[counter].pause();
}

function draw() {

  background(255);
  ///if (gif.loaded()) {
  console.log(counter);
  //left
  image(gifarray[counter], 100, 50);
  //right
  image(gifarray2[counter], 550, 50);

  
  drawGrid(20, 1);
  //blendMode(DIFFERENCE);

  //image(gifarray[counter], 250, 100);

  // image(gif, 0, 50);
  // //THE GRID:
  // translate(1500, 0);
  // image(gif2,0,50);
  // translate(1250,0);
  // image(gif3,0,50);
  // translate(1250, 0);
  // //image(gif4, 0, 50);
  // pop();
  // push();
  // //scale(0.2);
  // image(gif5, 250, 550);
  // translate(1500, 0);
  // image(gif6,0,550);
  // translate(1250,0);
  // //image(gif7,0,550);
  // translate(1250, 0);
  // pop();
  // image(gif4, 0, 50);
}

function mouseMoved() {
  // if (gif.loaded() && !gif.playing()){
  //   var totalFrames = gif.totalFrames();
  //   var frame = int(map(mouseX, 0, width, 0, totalFrames));
  //   gif.frame(frame);
  // }
  // if (gifarray[counter].loaded() && !gifarray[counter].playing()){
  var totalFrames = gifarray[counter].totalFrames();
  var frame = int(map(mouseX, 0, width, 0, totalFrames));
  gifarray[counter].frame(frame);
  // var totalFrames2 = gifarray2[counter].totalFrames();
  // var frame = int(map(mouseY, 0, height, 0, totalFrames2));
  // gifarray2[counter].frame(frame);
  //}
}

function mousePressed() {
  // if (gif.playing()) {
  //   gif.pause();
  // } else {
  //   gif.play();
  // }
  var gifarray = [];
  if (counter < 7) {
    counter++;
  }

  if (counter >= 7) {
    counter = 0;
  }
}

function drawGrid(cellSize, alpha) {
 // stroke(0, [alpha]);
 //stroke(128 + sin(frameCount*0.01) * 128);
 stroke(mouseY+sin(frameCount*0.03));
  //Vertical Lines
  for (var x = 0; x < width - 210; x += cellSize) {
    line(x, 0, x, height);
  }

  //Horizontal Lines
  for (var y = 0; y < height; y += cellSize) {
    line(0, y, width - 212, y);
  }

}