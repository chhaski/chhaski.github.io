
var gif, gif2, gif3, gif4, gif5, gif6, gif7, gif8;
var img;
var gifarray = [];
var gifarray2 = [];
var counter = 0;

function preload() {
  //sasha
  //gif = loadGif('gifs/c4gcha1.gif');
  gif = loadGif('https://media3.giphy.com/media/4gA9Xw4apikFVxAAYa/giphy.gif');
  gif2 = loadGif('https://media3.giphy.com/media/EM5PZ43ILMwVPpc7I0/giphy.gif');
  gif3 = loadGif('https://media4.giphy.com/media/xugE1KFOS0RrPpSjCN/giphy.gif');
  gif4 = loadGif('https://media3.giphy.com/media/vmjwSQ7SJ0oEewKTBv/giphy.gif');
  gif5 = loadGif('https://media0.giphy.com/media/xcKS5gwjOfYrJnCjrq/giphy.gif');
  gif6 = loadGif('https://media3.giphy.com/media/0qsgC2HVry1PrRuodF/giphy.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setFrameRate(30);
  //chaski
  // gif = loadGif('gifs/c4gcha1.gif');
  // gif2 = loadGif('gifs/c4gcha2.gif');
  // gif3 = loadGif('gifs/c4gcha3.gif');
  // gif4 = loadGif('gifs/c4gcha4.gif');
  // //sasha
  // gif5 = loadGif('gifs/c4gsa1.gif');
  // gif6 = loadGif('gifs/c4gsa2.gif');
  // gif7 = loadGif('gifs/c4gsa3.gif');
  // gif8 = loadGif('gifs/c4gsa4.gif');

  // gif.pause();
  // gif3.pause();
  // gif4.pause();
  // gif2.pause();
  // //cha
  // gif5.pause();
  // gif6.pause();
  // gif7.pause();
  // gif8.pause();

  gifarray.push(gif, gif2, gif3, gif4, gif5, gif6);
  //gifarray[counter].pause();
  //is there a way to randomly pull from an array? 
  gifarray2.push(gif6, gif5, gif4, gif3, gif2, gif);
  // gifarray[counter].pause();
}

function draw() {

  background(255);
  ///if (gif.loaded()) {

    console.log(counter);

  image(gifarray[counter], 150, 50);
  image(gifarray2[counter], 650, 50);
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



function pausegif() {
  gif.pause();
  gif3.pause();
  gif4.pause();
  gif2.pause();
  //cha
  gif5.pause();
  gif6.pause();
  gif7.pause();
  gif8.pause();
  console.log("iam Paused!");

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
  if (counter <5){
  counter++;
  }
  //if (counter >= gifarray.length()){
  if (counter >= 5) {
    counter = 0;
  }
}