class Vector {
  constructor(firstPointCordinates = {x: 0, y: 0}, secondPointCordinates = {x: 0, y: 0} ) {
    try {
      if (firstPointCordinates.x && firstPointCordinates.y && secondPointCordinates.x && secondPointCordinates.y) {
        if (!isNaN(+firstPointCordinates.x) && !isNaN(+firstPointCordinates.y) && !isNaN(+secondPointCordinates.y) && !isNaN(+secondPointCordinates.y)) {
          this.distanceBetweenPoints = Math.sqrt(Math.pow((firstPointCordinates.x - secondPointCordinates.x), 2) + Math.pow((firstPointCordinates.y - secondPointCordinates.y), 2));
        } else {
          throw new Error('Points coordinates must be numbers');
        }
      } else {
        throw new Error('Points must have x and y properties')
      }
    } catch (error) {
      this.distanceBetweenPoints = 0;

      firstPointCordinates = { x: 0, y: 0};
      secondPointCordinates = { x: 0, y: 0};
    }

    this.x = (firstPointCordinates.x - secondPointCordinates.x) / (this.distanceBetweenPoints || 1);
    this.y = (firstPointCordinates.y - secondPointCordinates.y) / (this.distanceBetweenPoints || 1);
  }
}

module.exports = Vector;
