const createUniverse = (cols, rows) =>
	new Array(cols).fill(0).map(() => new Array(rows).fill(0));

class Universe {
	constructor(cols, rows, cellSize) {
		this.cols = cols;
		this.rows = rows;
		this.cellSize = cellSize;

		this.cells = new Array(this.cols)
			.fill(0)
			.map(() => new Array(this.rows).fill(0));
	}

	seedLife() {
		this.cells = new Array(this.cols)
			.fill(0)
			.map(() => new Array(this.rows).fill(0).map(() => floor(random(2))));
	}

	drawCells() {
		for (let x = 0; x < this.cells.length; x++) {
			let col = this.cells[x];
			for (let y = 0; y < col.length; y++) {
				if (col[y]) {
					fill(0);
					rect(x * this.cellSize, y * this.cellSize, this.cellSize);
				}
			}
		}
	}

	getAliveNeighbours(x, y) {
		let sum = 0;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				let colIndex = (x + i + this.cols) % this.cols;
				let rowIndex = (y + j + this.rows) % this.rows;
				sum += this.cells[colIndex][rowIndex];
			}
		}

		return sum - this.cells[x][y];
	}

	generateNextGeneration() {
		let next = new Array(this.cols)
			.fill(0)
			.map(() => new Array(this.rows).fill(0));

		for (let x = 0; x < this.cols; x++) {
			for (let y = 0; y < this.rows; y++) {
				let alive = this.cells[x][y] === 1 ? true : false;

				if (
					alive &&
					(this.getAliveNeighbours(x, y) === 2 ||
						this.getAliveNeighbours(x, y) === 3)
				) {
					next[x][y] = 1;
				} else if (!alive && this.getAliveNeighbours(x, y) === 3) {
					next[x][y] = 1;
				} else {
					next[x][y] = 0;
				}
			}
		}

		this.cells = next;
	}
}

let universe;

function setup() {
	let cellSize = 10;
	let cols = Math.floor((windowWidth * 0.9) / cellSize);

	let rows = Math.floor((windowHeight * 0.9) / cellSize);

	createCanvas(cols * cellSize, rows * cellSize);

	universe = new Universe(cols, rows, cellSize);

	universe.seedLife();
}

function draw() {
	frameRate(60);
	background(220);
	universe.drawCells();
	universe.generateNextGeneration();
}

function mousePressed(e) {
	if (e.target.tagName === "CANVAS") {
		universe.seedLife();
	}
}
