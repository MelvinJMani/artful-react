import Sketch from "react-p5";
import { Container } from 'react-bootstrap';

const MovingShadow = () => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.colorMode(p5.HSB);
    p5.rectMode(p5.CENTER);

    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(20);
  }

  const draw = p5 => {
    const { width , height, mouseX, mouseY } = p5;
    p5.background(207, 7, 99);

    let offsetX = p5.map(mouseX, 0, width, 20, -20);
    let offsetY = p5.map(mouseY, 0, height, 20, -20);

    p5.drawingContext.shadowOffsetX = offsetX;
    p5.drawingContext.shadowOffsetY = offsetY;
    p5.drawingContext.shadowBlur = 32;
    p5.drawingContext.shadowColor = p5.color(207, 7, 70);
    p5.rect(width/2, height/2 , 300, 300, 30);
  }

  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <Sketch setup={setup} draw={draw} />
      </div>
    </Container>
  )

}

export default MovingShadow;
