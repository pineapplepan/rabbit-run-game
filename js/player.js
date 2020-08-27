class Player {
  constructor() {
    this.height = 190;
    this.width = 170;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.2;
    this.velocity = 0;
    this.image;
  }

  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    image(this.image, this.x, this.y, this.height, this.width);
  }

  jump() {
    console.log("this will be the jump");
    if (this.y === height - this.height) {
    this.velocity = -10;
  }
}
}
