import Sketch from "react-p5";
import { Container } from 'react-bootstrap';
import { randomColor, randomNumber } from 'util/random'

let x = 0, y = 0;

const TenPrint = () => {
  let color = randomColor();
  let strokeWidth = randomNumber(1, 15);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 400).parent(canvasParentRef);
    p5.background(color.main);
  };

  const draw = (p5) => {
    p5.stroke(color.secondary);
    p5.strokeWeight(strokeWidth);
    if (p5.random(1) > 0.5) {
      p5.line(x, y, x+20, y+20);
    } else {
      p5.line(x, y+20, x+20, y);
    }
    x += 20;
    if (x > p5.width) {
      x = 0;
      y += 20;
    }

    if (y > p5.height) {
      color = randomColor()
      p5.background(color.main);
      p5.stroke(color.secondary);
      strokeWidth = randomNumber(1, 15);
      p5.strokeWeight(strokeWidth);
      x = 0;
      y = 0;
    }
	};
  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <Sketch setup={setup} draw={draw} />
      </div>
    </Container>
  )
}

export default TenPrint
