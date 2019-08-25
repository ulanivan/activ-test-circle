var expect = require('expect.js');

var Vector = require('../src/vector');

describe('Vector', function() {
  it('should return standard values if arguments were not passed', function() {
    var expectedVector = {
      distanceBetweenPoints: 0,
      x: 0,
      y: 0
    }

    expect(new Vector()).to.eql(expectedVector);
  });

  it('should return zero values if arguments are wrong', function() {
    var expectedVector = {
      distanceBetweenPoints: 0,
      x: 0,
      y: 0
    }

    expect(new Vector('text', 'text')).to.eql(expectedVector);
    expect(new Vector(1, 1)).to.eql(expectedVector);
    expect(new Vector({x: 'text', y: 'text' }, {x: 'text', y: 'text'})).to.eql(expectedVector);
  });

  it('should calculate distance between points right', function() {
    expect(new Vector().distanceBetweenPoints).to.be(0);
    expect(new Vector({ x: 4, y: 4 }, { x: 4, y: 4 }).distanceBetweenPoints).to.be(0);
    expect(new Vector({ x: 2, y: 3 }, { x: 5, y: 7 }).distanceBetweenPoints).to.be(5);
    expect(new Vector({ x: 7, y: 15 }, { x: 2, y: 3 }).distanceBetweenPoints).to.be(13);
  });

  it('should calculate vector direction right', function() {
    expect(new Vector({ x: 3, y: 3 }, { x: 3, y: 3 }).x).to.be(0);
    expect(new Vector({ x: 3, y: 3 }, { x: 3, y: 3 }).y).to.be(0);

    expect(new Vector({ x: 2, y: 3 }, { x: 5, y: 7 }).x).to.be(-0.6);
    expect(new Vector({ x: 2, y: 3 }, { x: 5, y: 7 }).y).to.be(-0.8);
    
    expect(new Vector({ x: 7, y: 15 }, { x: 2, y: 3 }).x.toFixed(2)).to.be('0.38');
    expect(new Vector({ x: 7, y: 15 }, { x: 2, y: 3 }).y.toFixed(2)).to.be('0.92');
  });
});