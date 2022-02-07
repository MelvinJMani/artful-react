import Sketch from "react-p5";
import { Container } from 'react-bootstrap';

const rows = 10, columns = 10;
const fadeSpeed = 0.5;
let cells = [], randomBlue , randomGreen ;


const FadingGrid = () => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    //Creating 2D array
    randomBlue = p5.floor(p5.random(255));
    randomGreen = p5.floor(p5.random(255));

    for (let r = 0; r < rows; r++) {
      cells[r] = [];
      for (let c = 0; c < columns; c++) {
        cells[r][c] = 0;
      }
    }
  }

  const draw = p5 => {
    const cellWidth = p5.width / columns;

    const rowRandom = p5.floor(p5.random(rows));
    const columnRandom = p5.floor(p5.random(columns));

    cells[rowRandom][columnRandom] = 250;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        cells[r][c] -= fadeSpeed;
        cells[r][c] = p5.constrain(cells[r][c], 0, 255);

        const y = p5.height * (r / rows);
        const x = p5.width * (c / columns);
    	  p5.fill(cells[r][c], randomGreen, randomBlue);
        p5.rect(x, y, cellWidth, p5.height);
      }
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

export default FadingGrid;
