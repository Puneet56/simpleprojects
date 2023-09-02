var a = -300;
var angle = 0;
function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	fill(255, 0, 0);
	translate(300, 300);
	ellipse(0, 0, 600, 600);
	angle += 4;

	a = map(sin(angle + 1 * 30), -1, 1, -270, 270);

	rotate(30);
	line(-300, 0, 300, 0);
	fill(255);
	if (frameCount > 300) {
		ellipse(a, 0, 60, 60);
	}
	a = map(sin(angle + 2 * 30), -1, 1, -270, 270);

	rotate(30);
	line(-300, 0, 300, 0);
	fill(255);
	if (frameCount > 600) {
		ellipse(a, 0, 60, 60);
	}
	a = map(sin(angle + 3 * 30), -1, 1, -270, 270);

	rotate(30);
	line(-300, 0, 300, 0);
	fill(255);
	if (frameCount > 900) {
		ellipse(a, 0, 60, 60);
	}
	a = map(sin(angle + 4 * 30), -1, 1, -270, 270);

	rotate(30);
	line(-300, 0, 300, 0);
	fill(255);
	if (frameCount > 1200) {
		ellipse(a, 0, 60, 60);
	}
	a = map(sin(angle + 5 * 30), -1, 1, -270, 270);

	rotate(30);
	line(-300, 0, 300, 0);
	fill(255);
	if (frameCount > 1500) {
		ellipse(a, 0, 60, 60);
	}
	a = map(sin(angle + 6 * 30), -1, 1, -270, 270);

	rotate(30);
	line(-300, 0, 300, 0);
	fill(255);
	ellipse(a, 0, 60, 60);

	a = map(sin(angle + 6 * 30), -1, 1, -270, 270);
}
