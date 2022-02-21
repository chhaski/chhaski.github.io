/******************
Code forked from Vamoss (http://vamoss.com.br)
Original code link:
https://www.openprocessing.org/sketch/697891
******************/

const textToWrite = "sa_cha is the collaboration of chaski and sasha";
const SEGMENTS = 2;
let drawCounter = 0
let width = 1520;
var words = ["(b. 2015, American)", "or", "(b. 1971, Peruvian)", "or", "(b. 1915, someplace in the Old World)", "or" ];
var index = 0;
var imgs = [img1,img2,img3,img4];

let x = 100;
let y = 100;


function preload() {
    img1 = loadImage('cha.png');
    img2 = loadImage('sash.png');
    img3 = loadImage('lake.png');
    img4 = loadImage('tree.png');
  }

function setup() {
    createCanvas(width, width);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;

    let screenPct = min(height, width) / 5000;

    fontSize = screenPct * 40;
    INNER_RADIUS = screenPct * 200;
    RADIUS_VARIATION = screenPct * 250;

    //textLeading(20);
    textFont('Times New Roman');
    textSize(fontSize);
}


function draw() {
    //sbackground(255);


    //fill(0);
    //noStroke();
  
    
    //image(img1, 100, 50);
   //image(imgs[imgindex], 100, 200);

    drawCounter++

    copy(0, 0, width, width, 0, 1, width, width)
  
    for (let horizontalCounter = width; --horizontalCounter; horizontalCounter > 0) {
      let strokeColor = getRandomColor(horizontalCounter, drawCounter)
      stroke(strokeColor)
      point(horizontalCounter, 0)
    }

    push();
    textSize(32);
    fill(0);
   // textWrap(WORD);
    //text("sa_cha", 100, 200);
    //text(words[index], 100, 250);
    pop();


}

function getRandomColor(horizontalCounter, drawCounter) {
    let base, colorDifferentiator, minus, plus, strokeColor
  
    minus = horizontalCounter - drawCounter
    plus = horizontalCounter + drawCounter
  
    base = minus ^ plus
  
    colorDifferentiator = abs(drawCounter + Math.pow(base, 3))
  
    strokeColor = 'white'
    if (colorDifferentiator % 997 < 97) {
      strokeColor = 'black'
    }
  
    return color(strokeColor)
  }

  function mousePressed() {
    index = index + 1;
    // imgindex = imgindex +1;
  
    if (index == words.length) {
      index = 0;
    }
      
    // if (imgindex == imgs.length) {
    //     imgindex = 0;
    //   }
  }  
