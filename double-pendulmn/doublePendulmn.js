var l1 = 200;
var l2 = 150;
var x1;
var y1;
var x2;
var y2;
var m1 = 30;
var m2 = 30;
var a1;
var a2;
var v1 = 0;
var v2 = 0;
var ac1 = 0;
var ac2 = 0;
var g = 1;
var tracing = [];
function setup() {
	a1 = PI / 1.5;
	a2 = PI / 1.5;

	createCanvas(800, 1200);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(2);
	translate(width / 2, height / 3);
	x1 = l1 * sin(a1);
	y1 = l1 * cos(a1);

	x2 = x1 + l2 * sin(a2);
	y2 = y1 + l2 * cos(a2);
	line(0, 0, x1, y1);
	line(x1, y1, x2, y2);
	fill(255, 0, 0);
	ellipse(x1, y1, m1);
	ellipse(x2, y2, m2);

	tracing.push(createVector(x2, y2));
	noFill();
	strokeWeight(3);
	stroke(0, 100, 200, 200);
	beginShape();
	for (v of tracing) {
		vertex(v.x, v.y);
	}
	endShape();

	ac1 =
		(-g * (2 * m1 + m2) * sin(a1) -
			m2 * g * sin(a1 - 2 * a2) -
			2 * sin(a1 - a2) * m2 * (v2 * v2 * l2 + v1 * v1 * l1 * cos(a1 - a2))) /
		(l1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));

	ac2 =
		(2 *
			sin(a1 - a2) *
			(v1 * v1 * l1 * (m1 + m2) +
				g * (m1 + m2) * cos(a1) +
				v2 * v2 * l2 * m2 * cos(a1 - a2))) /
		(l2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));

	v1 += ac1;
	v2 += ac2;
	a1 += v1;
	a2 += v2;
}
