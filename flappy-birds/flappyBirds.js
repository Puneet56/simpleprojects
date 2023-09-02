let pipes = [];

function setup() {
	createCanvas(500, 800);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(51);
	noStroke();
	fill(100, 100, 255);
	rect(0, 0, 500, 600);
	fill(255, 165, 0);
	rect(0, 600, 500, 200);
	bird.show();
	bird.update();
	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}
	for (pipe of pipes) {
		pipe.show();
	}

	textSize(80);
	stroke(0);
	strokeWeight(10);
	text(pipes.length - 1, 230, 100);
	gameOver();

	if (bird.y >= height) {
		noLoop();
		strokeWeight(4);
		text("GAME OVER", 5, 400);
	}
}

function keyPressed() {
	if (key == " ") {
		bird.up();
	}
}

function gameOver() {
	for (pipe of pipes) {
		if (bird.x + 5 >= pipe.x && bird.x - 5 <= pipe.x + 30) {
			if (
				bird.y - 5 <= pipe.a ||
				bird.y + 5 >= height - pipe.b ||
				bird.y >= height
			) {
				noLoop();
				strokeWeight(4);
				text("GAME OVER", 5, 400);
			}
		}
	}
}
