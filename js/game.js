class Game {
  constructor() {
    this.obstacles = [];
    this.mushrooms = [];
    this.score = 0;
    this.timerValue = 60;
  }

  preloadGame() {
    this.backgroundImgs = [
      {
        src: loadImage("../assets/background/plx-1.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("../assets/background/plx-2.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("../assets/background/plx-3.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("../assets/background/plx-4.png"),
        x: 0,
        speed: 4,
      },
      {
        src: loadImage("../assets/background/plx-5.png"),
        x: 0,
        speed: 5,
      },
    ];
    this.playerImg = loadImage("../assets/player/player.gif");
    this.obstaclesImg = [
      { src: loadImage("../assets/obstacles/heart001.png") },
      { src: loadImage("../assets/obstacles/heart002.png") },
      { src: loadImage("../assets/obstacles/heart003.png") },
      { src: loadImage("../assets/obstacles/heart004.png") },
    ];
    this.mushroomImg = [];
    for (let i = 1; i <= 7; i++) {
      this.mushroomImg.push(loadImage(`assets/mushroom/mushroom${i}.png`));
    }
  }

  setupGame() {
    // this.obstacle = new Obstacle();
    // this.obstacle.image = this.coinImg;

    // setInterval(this.timeIt, 1000);
    this.background = new Background();
    this.background.images = this.backgroundImgs;
    this.player = new Player();
    this.player.image = this.playerImg;
    this.mushroom = new Mushroom();
    this.obstacle = new Obstacle();
    this.obstacle.images = this.obstaclesImg[this.getRandomObstacle()].src;
  }

  getRandomObstacle() {
    return Math.floor(Math.random() * this.obstaclesImg.length);
  }

  drawTimer() {
    console.log("hello", this.timerValue);
    if (frameCount % 60 == 0) {
      this.timerValue--;
    }

    text(`Score: ${this.score} / ${this.obstacle.score}`, 20, 40);
    textSize(45);
    textFont("Monogram");
    fill(242, 130, 208);
    stroke(4);
    text(`Time: ${this.timerValue}`, 20, 80);
    textSize(45);
    textFont("Monogram");
    fill(242, 130, 208);
    stroke(4);
  }

  // timeIt = () => {
  //   console.log(this.timerValue);
  //   if (this.timerValue > 0) {
  //     this.timerValue--;
  //   }
  // };

  drawGame() {
    clear();
    this.background.drawBackground();
    this.player.drawPlayer();

    // this.drawTimer();

    // this.obstacle.drawObstacle();

    if (frameCount % 60 === 0) {
      this.obstacles.push(
        new Obstacle(this.obstaclesImg[this.getRandomObstacle()].src)
      );
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
    });

    if (frameCount % 180 === 0) {
      this.mushrooms.push(new Mushroom(this.mushroomImg));
    }

    this.mushrooms.forEach((mushroom) => {
      mushroom.drawMushroom();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player)) {
        this.score++;
        return false;
      } else {
        return true;
      }
    });

    this.mushrooms = this.mushrooms.filter((mushroom) => {
      if (mushroom.collision(this.player)) {
        this.score--;
        return false;
      } else {
        return true;
      }
    });

    if (gameStart === false) {
      push();
      textSize(40);
      textAlign(CENTER);
      text("Hey there!\n\nPress SPACE to start", 400, 250);
      pop();
    }

    if (this.timerValue === 0 && this.score < 10) {
      push();
      textSize(80);
      textAlign(CENTER);
      text(`GAME OVER`, 400, 250);
      textSize(40);
      text("Press ENTER to restart", 400, 400);
      gameOver = true;
      song.stop();
      noLoop();
      pop();
    }

    if (this.timerValue === 0 && this.score >= 10) {
      push();
      textSize(80);
      textAlign(CENTER);
      text(`CONGRATS!`, 450, 250);
      text(`🎉🎉🎉`, 450, 330);
      text(`YOU WON!!`, 450, 410);
      textSize(40);
      text("Press ENTER to restart", 450, 500);
      gameOver = true;
      song.stop();
      noLoop();
      pop();
    }
    this.drawTimer();
  }
}
