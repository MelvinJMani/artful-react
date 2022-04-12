import Sketch from "react-p5";
import { Container } from 'react-bootstrap';
import { isPrime } from 'util/numbers'

const PrimeSpiral = () => {
  let x, y, px, py , step = 1, stepSize = 10, numSteps = 1, state = 0, turnCounter = 1, totalSteps;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 750).parent(canvasParentRef);
    p5.background("#000");
    const cols = p5.width / stepSize;
    const rows = p5.height / stepSize;
    totalSteps = cols * rows;
    //center of the canvas
    x = p5.width / 2;
    y = p5.height / 2;
    px = x;
    py = y;
  }

  const draw = p5 => {
    if(isPrime(step)){
      p5.fill("#FFF")
    }else{
      p5.fill("#C0392B")
    }
    p5.circle(px,py,stepSize * 0.5);
    px = x;
    py = y;

    switch (state) {
      case 0: x += stepSize;
          break;
      case 1: y -= stepSize;
          break;
      case 2: x -= stepSize;
          break;
      case 3: y += stepSize;
          break;
    }

    if (step % numSteps === 0) {
      state = (state + 1) % 4;
      turnCounter++;
      if (turnCounter % 2 === 0) {
        numSteps++;
      }
    }
    step++;
    //Stop
    if (step > totalSteps+1) {
      p5.noLoop();
    }
   }

  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <Sketch setup={setup} draw={draw} />
      </div>
    </Container>
  )

}

export default PrimeSpiral;
