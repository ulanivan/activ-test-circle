const Vector = require('./vector');

const OFFSET_NEAR_BORDER = 5;

class CircleMover {
  constructor(parentCircle, childCircle) {
    if (childCircle.radius >= parentCircle.radius / 2) {
      childCircle.setRadius(parentCircle.radius / 5);
    }

    this.parentCircle = parentCircle;
    this.childCircle = childCircle;
    
    this.childCircle.setCoordinates({x: parentCircle.coordinates.x, y: parentCircle.coordinates.y});

    this.parentCircle.domReference.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
    this.parentCircle.domReference.addEventListener('mouseout', this.mouseOverHandler.bind(this), false);
  }

  mouseMoveHandler(event) {
    const mouseCoordinates = {
      x: event.offsetX,
      y: event.offsetY
    }

    const moveVector = new Vector(mouseCoordinates, this.childCircle.coordinates);

    const isChildCircleNearBorder = Math.pow((this.childCircle.coordinates.x - this.parentCircle.coordinates.x), 2) + Math.pow((this.childCircle.coordinates.y - this.parentCircle.coordinates.y), 2) > Math.pow(this.parentCircle.radius - this.childCircle.radius, 2);

    if (moveVector.distanceBetweenPoints < this.parentCircle.radius) {

      if (!isChildCircleNearBorder) {
        this.childCircle.move(moveVector, 2);
      } else {
        if(moveVector.distanceBetweenPoints < this.childCircle.radius + OFFSET_NEAR_BORDER) {
          this.childCircle.move(moveVector, -this.childCircle.radius * 2);
        }
      }
    }
  }

  mouseOverHandler(event) {
    console.log('wow');
    const mouseCoordinates = {
      x: event.offsetX,
      y: event.offsetY
    }

    const moveVector = new Vector(mouseCoordinates, this.childCircle.coordinates);
    this.childCircle.move(moveVector, this.childCircle.radius);
  }
}

module.exports = CircleMover;
