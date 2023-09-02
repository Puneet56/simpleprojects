let yoff = 0;
let start = 0;
let inc = 0.01;
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(51);
	fill(255);
	yoff = start;
	beginShape();
	for (let x = 0; x < width; x++) {
		let y = noise(yoff) * height;
		yoff += inc;
		stroke(255);
		vertex(x, y);
	}

	noFill();
	endShape();
	start += inc;
}
