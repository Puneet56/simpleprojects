class flor {
	constructor(x, y, w, h, a) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.a = a;
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
			isStatic: true,
			angle: this.a,
		});
		World.add(myengine.world, this.body);
	}

	show() {
		stroke(255);
		var pos = this.body.position;
		var angle = this.body.angle;
		fill(255);
		push();
		translate(pos.x, pos.y);
		rectMode(CENTER);
		rotate(angle);
		rect(0, 0, this.w, this.h);
		pop();
	}
}
