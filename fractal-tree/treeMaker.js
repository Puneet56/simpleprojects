class Tree {
	constructor(begin, end, angle) {
		this.begin = begin;
		this.end = end;
		this.angle = angle;
		this.grown = false;
		this.strok = x;
		this.c = bcolor[c];
	}
	show() {
		strokeWeight(this.strok);
		stroke(this.c);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	branchA() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(this.angle);
		dir.mult(0.67);
		var newEnd = p5.Vector.add(this.end, dir);
		var right = new Tree(this.end, newEnd, this.angle, this.stroke);
		return right;
	}
	branchB() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-this.angle);
		dir.mult(0.67);
		var newEnd = p5.Vector.add(this.end, dir);
		var left = new Tree(this.end, newEnd, this.angle, this.stroke);
		return left;
	}
}
