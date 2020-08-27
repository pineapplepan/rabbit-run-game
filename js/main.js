const game = new Game();
let song;
let gameStart = false;
let paused = false;
let gameOver = false;

function preload() {
  game.preloadGame();
  song = loadSound("./assets/music.mp3");
}

function setup() {
  createCanvas(800, 500);
  game.setupGame();
}

function draw() {
  game.drawGame();
}

function keyPressed() {
  // console.log(keyCode)
  if (keyCode === 32) {
    game.player.jump();
    // song.play();
  }

  if (gameStart === false && keyCode === 32) {
    gameStart = true;
    song.play();
  }
  if (gameStart === true && frameCount > 9780 && !song.isPlaying()) {
    song.play();
  }
  if (gameOver === true && gameStart === false && keyCode === 13) {
    gameStart = true;
    song.play();
  }
  if (keyCode === 13) {
    document.location.reload();
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
