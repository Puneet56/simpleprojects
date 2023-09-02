var x,
	y,
	a = 0;
var r = 100;
var h = 0;

var p = [];
function setup() {
	createCanvas(1000, 300);
	angleMode(DEGREES);
}

function draw() {
	translate(120, 150);
	background(255, 100, 10);
	noFill();
	strokeWeight(2);
	ellipse(0, 0, 2 * r, 2 * r);
	fill(0);

	ellipse(0, 0, 10, 10);
	fill(255, 100, 10);

	x = r * cos(a);
	y = r * sin(a);
	p.unshift(y);

	line(0, 0, x, y);
	fill(0);
	ellipse(x, y, 20, 20);

	line(120, -r, 120, r);
	line(120, 0, 1000, 0);
	a += 2;
	if (a === 360) {
		a = 0;
	}
	line(x, y, 120, y);
	beginShape();
	for (i = 0; i < p.length; i++) {
		vertex(120 + i, p[i]);
	}
	noFill();
	endShape();
	if (p.length > 880) {
		p.pop();
	}
}
