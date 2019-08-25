import Circle from './circle';
import CircleMover from './circleMover';

const parentCircle = new Circle({ x: 200, y: 200 }, 200);
const childCircle = new Circle({ x: 1000, y: 200 }, 20);

parentCircle.draw();
childCircle.draw();

const circleMover = new CircleMover(parentCircle, childCircle);
