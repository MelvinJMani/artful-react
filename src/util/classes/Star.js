import { star } from "util/shapes";
import { randomColor } from "util/random";

const Star = function (p5) {
  this.p5 = p5;
  const { width, height } = p5; //Width and Height of the canvas
  this.x = this.p5.random(-width, width);
  this.y = this.p5.random(-height, height);
  this.z = this.p5.random(width);
  this.pz = this.z;
  this.color = randomColor().main;

  this.update = function(speed) {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = this.p5.random(-width, width);
      this.y = this.p5.random(-height, height);
      this.pz = this.z;
    }
  };

  this.show = function() {
    this.p5.fill(this.color);
    this.p5.noStroke();

    const sx = this.p5.map(this.x / this.z, 0, 1, 0, width);
    const sy = this.p5.map(this.y / this.z, 0, 1, 0, height);

    const r = this.p5.map(this.z, 0, width, 16, 0);

    star(this.p5, sx, sy, r/2, r*2, 5);

    const px = this.p5.map(this.x / this.pz, 0, 1, 0, width);
    const py = this.p5.map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    this.p5.stroke(255);
    this.p5.line(px, py, sx, sy);
  };
}

export default Star
