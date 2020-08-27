class Background {
  
  constructor() {
    this.x = 0;
    this.images;
  }

  drawBackground() {
    this.x--;
    this.images.forEach((picture) => {
      picture.x-= picture.speed;
      image(picture.src, picture.x, 0, width, height);
      image(picture.src, picture.x - width, 0, width, height);
      
      if (picture.x < 0) {
        picture.x = width;
      }
    });
    }
}
