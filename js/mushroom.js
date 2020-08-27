class Mushroom {
  constructor(img) {
    this.height = 70;
    this.width = 70;
    this.x = Math.random() * width + 450;
    this.y = height - this.height;
    this.image = img;
    this.imageIndex = 0;
  }

  collision(playerInfo) {
    let mushroomX = this.x + this.width / 2;
    let mushroomY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(mushroomX, mushroomY, playerX, playerY) < 70) {
      return true;
    }

    // if (this.x < 0) {
    //   return true;
    // }
  }

  drawMushroom() {
    this.x -= 4;
    if (frameCount % 5 == 0) {
      this.imageIndex++;
    }
    image(
      this.image[this.imageIndex % 7],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
