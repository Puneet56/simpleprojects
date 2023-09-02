class Bird {
  constructor() {
    this.x = width / 4;
    this.y = height / 2;
    this.gravity = 1;
    this.velocity = 0;
    this.lift = -25;
  }

  show() {
    fill(0, 255, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, 30, 30);
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity * 1.8;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  up() {
    this.velocity += this.lift;
  }
}
