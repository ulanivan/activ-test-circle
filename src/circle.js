class Circle {
  constructor(coordinates = { x: 100, y: 100 }, radius = 100) {
    try {
      if (coordinates.x && coordinates.y) {
        if (!isNaN(+coordinates.x) && !isNaN(+coordinates.y)) {
          this.coordinates = coordinates;
        } else {
          throw new Error('Coordinates must be numbers');
        }
      } else {
        throw new Error('Coordinates must be object with x and y properties');
      }
      
      if (typeof +radius == 'number') {
        if (radius > 0) {
          this.radius = +radius;
        } else {
          throw new Error('Radius must be only more than zero');
        }
      } else {
        throw new Error('Radius must be only a number');
      }
    } catch(error) {
      this.coordinates = {
        x: 100,
        y: 100
      }

      this.radius = 100;
    }
  }

  setRadius(newRadius) {
    this.radius = newRadius;

    this.domReference.setAttribute('r', newRadius);
  }

  setCoordinates(newCoordinates) {
    this.coordinates = newCoordinates;

    this.domReference.setAttribute('cx', newCoordinates.x);
    this.domReference.setAttribute('cy', newCoordinates.y);
  }

  draw() {
    const circleElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    
    circleElement.setAttribute('cx', this.coordinates.x);
    circleElement.setAttribute('cy', this.coordinates.y);
    circleElement.setAttribute('r', this.radius);

    this.domReference = document.getElementById('canvas').appendChild(circleElement);
  }

  move(vector, moveSpeed) {
    this.coordinates.x -= vector.x * moveSpeed;
    this.coordinates.y -= vector.y * moveSpeed;

    this.domReference.setAttribute('cx', this.coordinates.x);
    this.domReference.setAttribute('cy', this.coordinates.y);
  }
}

module.exports = Circle;
