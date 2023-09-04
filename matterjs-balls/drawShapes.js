class Shape {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.body = Bodies.circle(this.x, this.y, this.w, {
			restitution: 0.6,
			friction: 0,
		});
		World.add(myengine.world, this.body);
		this.color = [random(255), random(255), random(255)];
	}

	show() {
		stroke(255);
		var pos = this.body.position;
		var angle = this.body.angle;
		fill(this.color[0], this.color[1], this.color[2]);
		push();
		translate(pos.x, pos.y);
		rectMode(CENTER);
		rotate(angle);
		ellipse(0, 0, this.w * 2);
		pop();
	}
}
