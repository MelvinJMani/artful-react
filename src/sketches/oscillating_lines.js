import Sketch from "react-p5";
import { Container } from 'react-bootstrap';
import { randomColor } from 'util/random'
const lines = 200 , lineHeights = [], lineSpeeds = [], lineColor = [];

const OscillatingLines = () => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 400).parent(canvasParentRef);
    for(let x = 0; x < lines; x++){
      const color = randomColor().main;
      const lineHeight = p5.random(p5.height);
      lineHeights[x] = lineHeight;
      lineSpeeds[x] = p5.random(-10, 10);
      lineColor[x] = color;
    }
  };

  const draw = p5 => {
    p5.background(32);
    for(let i = 0; i < lines; i++) {
      lineHeights[i] += lineSpeeds[i];

      if(lineHeights[i] < 0 || lineHeights[i] > p5.height) {
        lineSpeeds[i] *= -1;
      }
      console.log(p5.width)
      const x = p5.width * (i / lines);
      const lineWidth = p5.width / lines;

      p5.fill(lineColor[i]);
      p5.stroke(lineColor[i]);

      p5.rect(x, p5.height / 2 - lineHeights[i] / 2, lineWidth, lineHeights[i] / 2);

      p5.fill(lineColor[i]);
      p5.stroke(lineColor[i]);
      p5.rect(x, p5.height / 2,lineWidth, lineHeights[i] / 2);
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

export default OscillatingLines;
