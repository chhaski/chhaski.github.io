
let img;

function preload() {
	img = createImg("desirepaths/desirepathsscroll.gif"); //
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//image(img, 0, 0);
	//img.filter(GRAY);
}

// function index(x, y) {
// 	return (x + y * img.width) * 4;
// }

function draw() {

	// img.loadPixels();
	// for (let y = 0; y < img.height - 1; y++) {
	// 	for (let x = 1; x < img.width - 1; x++) {

	// 		let oldr = img.pixels[index(x, y)];
	// 		let oldg = img.pixels[index(x, y) + 1];
	// 		let oldb = img.pixels[index(x, y) + 2];

	// 		let factor = 1;
	// 		let newr = round(factor * oldr / 255) * (255 / factor);
	// 		let newg = round(factor * oldg / 255) * (255 / factor);
	// 		let newb = round(factor * oldb / 255) * (255 / factor);

	// 		img.pixels[index(x, y)] = newr;
	// 		img.pixels[index(x, y) + 1] = newg;
	// 		img.pixels[index(x, y) + 2] = newb;

	// 		img.pixels[index(x + 1, y)] += (oldr - newr) * 7 / 16.0;
	// 		img.pixels[index(x + 1, y) + 1] += (oldr - newr) * 7 / 16.0;
	// 		img.pixels[index(x + 1, y) + 2] += (oldr - newr) * 7 / 16.0;

	// 		img.pixels[index(x - 1, y + 1)] += (oldr - newr) * 3 / 16.0;
	// 		img.pixels[index(x - 1, y + 1) + 1] += (oldr - newr) * 3 / 16.0;
	// 		img.pixels[index(x - 1, y + 1) + 2] += (oldr - newr) * 3 / 16.0;

	// 		img.pixels[index(x, y + 1)] += (oldr - newr) * 5 / 16.0;
	// 		img.pixels[index(x, y + 1) + 1] += (oldr - newr) * 5 / 16.0;
	// 		img.pixels[index(x, y + 1) + 2] += (oldr - newr) * 5 / 16.0;

	// 		img.pixels[index(x + 1, y + 1)] += (oldr - newr) * 1 / 16.0;
	// 		img.pixels[index(x + 1, y + 1) + 1] += (oldr - newr) * 1 / 16.0;
	// 		img.pixels[index(x + 1, y + 1) + 2] += (oldr - newr) * 1 / 16.0;


	// 	}
	// }
	// img.updatePixels();
	//image(img, 600, 0);
	img.position(1050, 550);
}