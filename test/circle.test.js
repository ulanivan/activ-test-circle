var expect = require('expect.js');

var Circle = require('../src/circle');

describe('Circle', function() {
  it('should return standard values if dont have input arguments', function() {
    var expectedCircle = {
      coordinates: {
        x: 100,
        y: 100
      },

      radius: 100
    }

    expect(expectedCircle).to.eql(new Circle());
  });

  it('should return standard radius if it was not passed', function() {
    var expectedCircle = {
      coordinates: {
        x: 100,
        y: 100
      },

      radius: 100
    }

    expect(expectedCircle).to.eql(new Circle({ x: 100, y: 100 }));
  });

  it('should return standard radius when radius is zero or less', function() {
    var circle = new Circle({ x: 100, y: 100 }, 0);
      
    expect(circle.radius).to.be(100);
  });

  it('should return standard radius when it has wrong type', function () {
    var circle = new Circle({x: 100, y: 100}, 'text');

    expect(circle).to.be.eql(new Circle());
  });

  it('should return standard coordinates when they has wrong type', function () {
    var circle = new Circle({x: 'text', y: 'text'}, 100);

    expect(circle).to.be.eql(new Circle());
  });
});