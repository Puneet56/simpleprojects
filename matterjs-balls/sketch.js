var Engine = Matter.Engine,
	//Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies;

var myengine;
var myshapes = [];
var f = [];
function setup() {
	createCanvas(800, 1000);
	// create an engine
	myengine = Engine.create();
	Engine.run(myengine);
	f[0] = new flor(
		width / 3.5,
		height * 0.25,
		width * 0.7,
		height * 0.02,
		PI / 8
	);
	f[1] = new flor(
		width / 1.2,
		height * 0.55,
		width * 0.7,
		height * 0.02,
		-PI / 8
	);
	f[2] = new flor(
		width / 3.5,
		height * 0.9,
		width * 0.65,
		height * 0.02,
		PI / 8
	);
	for (i = 0; i < 30; i++) {
		myshapes.push(
			new Shape(random(width / 7, width / 1.2), random(0, 50), random(10, 20))
		);
	}
}

function draw() {
	background(51);

	for (shape of myshapes) {
		shape.show();
	}
	rectMode(CENTER);
	fill(255);
	for (i of f) {
		i.show();
	}
}

function mousePressed() {
	myshapes.push(new Shape(mouseX, mouseY, random(10, 20)));
}

if (myshapes.length > 50) {
	myshapes.pop();
}
