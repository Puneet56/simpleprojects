class Pipe {
  constructor() {
    this.x = width;
    this.a = random(150, height - 200);
    this.b = height - 150 - this.a;
  }

  show() {
    stroke(0);
    fill(255);
    strokeWeight(2);
    rect(this.x, -1, 30, this.a + 1);
    rect(this.x, this.a + 150, 30, this.b + 1);
    this.x -= 4;
  }
}
