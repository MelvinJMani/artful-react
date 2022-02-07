import Sketch from "react-p5";
import { Container } from 'react-bootstrap';
import { randomColor } from 'util/random'

const MouseRipple = () => {
  let circleX, circleY, circleSize , color = randomColor();

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.noFill();
    p5.strokeWeight(5);
    circleX = p5.width / 2;
    circleY = p5.height / 2;
    circleSize = 0;
  }

  const draw = p5 => {
    p5.background(color.main);
    circleSize += 10;
    p5.stroke(color.secondary);
    p5.circle(circleX, circleY, circleSize);
    p5.circle(circleX, circleY, circleSize * .75);
    p5.circle(circleX, circleY, circleSize * .5);
  }

  const mousePressed = p5 => {
    //Change color
    color = randomColor();
    p5.background(color.main);

    circleX = p5.mouseX;
    circleY = p5.mouseY;
    circleSize = 0;
  }


  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>
      </div>
    </Container>
  )

}

export default MouseRipple;
