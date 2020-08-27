class Obstacle {
  constructor(img) {
    this.height = 50;
    this.width = 50;
    this.x = width;
    this.y = (Math.random() * height) / 1.5;
    this.images = img;
    this.score = 10;
    this.timerValue = 30;
  }

  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
      return true;
    }
  }

  drawObstacle() {
    this.x -= 4;
    image(this.images, this.x, this.y, this.width, this.height);
    // text(`Score: ${game.score} / ${this.score}`, 20, 40);
    // textSize(45);
    // textFont("Monogram");
    // fill(242, 130, 208);
    // stroke(4);
  }
}
