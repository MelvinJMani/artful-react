import Sketch from "react-p5";
import { Container } from 'react-bootstrap';
import Star from "util/classes/Star";


const StarRain = () => {
  var stars = [], speed;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 400).parent(canvasParentRef);
    p5.background("#000");
    //Create star array
    for (let i = 0; i < 800; i++) {
      stars.push(new Star(p5));
    }
  };

  const draw = p5 => {
    speed = p5.map(p5.mouseX, 0, p5.width, 0, 100);
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2);
    for (let i = 0; i < stars.length; i++) {
      stars[i].update(speed);
      stars[i].show();
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

export default StarRain
