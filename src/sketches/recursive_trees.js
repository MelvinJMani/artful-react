import Sketch from "react-p5";
import { Container } from 'react-bootstrap';

const RecursiveTree = () => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.noLoop();
  }

  const draw = p5 => {
    const { width , height } = p5;
    p5.background(200);

    p5.translate(width/2, height/2 + 200);
    createBranch(100, p5);
  }

  const createBranch = ( length, p5 ) => {
    p5.push();
    if(length > 10){
      p5.strokeWeight(p5.map(length, 10, 100, 1, 15));
      p5.stroke(70, 40, 20);
      p5.line(0, 0, 0, -length);
      p5.translate(0, -length);
      p5.rotate(p5.random(-20, -30));
      createBranch(length * p5.random(0.7, 0.9), p5);
      p5.rotate(p5.random(50, 60));
      createBranch(length * p5.random(0.7, 0.9), p5);
    }else{
      const r = 80 + p5.random(-20, 20);
      const g = 120 + p5.random(-20, 20);
      const b = 40 + p5.random(-20, 20);
      p5.fill(r, g, b, 150);
      p5.noStroke();
      p5.beginShape();
      for(let i = 45; i < 135 ; i++){
        let r = 15 ;
        let x = r * p5.cos(i);
        let y = r * p5.sin(i);
        p5.vertex(x, y);
      }
      for(let i = 135; i > 45 ; i--){
        let r = 15 ;
        let x = r * p5.cos(i);
        let y = r * p5.sin(-i) + 20;
        p5.vertex(x, y);
      }
      p5.endShape(p5.CLOSE);
      //p5.ellipse(0, 0, 10);
    }
    p5.pop();
  }

  return (
    <Container>
      <div className='starter-template text-center mt-5'>
        <Sketch setup={setup} draw={draw} />
      </div>
    </Container>
  )

}

export default RecursiveTree;
