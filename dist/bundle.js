/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
  function Circle() {
    var coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 100, y: 100 };
    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    _classCallCheck(this, Circle);

    try {
      //Set coordinates values if they are right
      if (coordinates.x && coordinates.y) {
        if (!isNaN(+coordinates.x) && !isNaN(+coordinates.y)) {
          this.coordinates = coordinates;
        } else {
          throw new Error('Coordinates must be numbers');
        }
      } else {
        throw new Error('Coordinates must be object with x and y properties');
      }

      //Set radius if it values more than zero and not the string
      if (typeof +radius == 'number') {
        if (radius > 0) {
          this.radius = +radius;
        } else {
          throw new Error('Radius must be only more than zero');
        }
      } else {
        throw new Error('Radius must be only a number');
      }
    } catch (error) {
      this.coordinates = {
        x: 100,
        y: 100
      };

      this.radius = 100;
    }
  }

  _createClass(Circle, [{
    key: 'setRadius',
    value: function setRadius(newRadius) {
      this.radius = newRadius;

      this.domReference.setAttribute('r', newRadius);
    }
  }, {
    key: 'setCoordinates',
    value: function setCoordinates(newCoordinates) {
      this.coordinates = newCoordinates;

      this.domReference.setAttribute('cx', newCoordinates.x);
      this.domReference.setAttribute('cy', newCoordinates.y);
    }

    //Draw circle in the DOM

  }, {
    key: 'draw',
    value: function draw() {
      var circleElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

      circleElement.setAttribute('cx', this.coordinates.x);
      circleElement.setAttribute('cy', this.coordinates.y);
      circleElement.setAttribute('r', this.radius);

      this.domReference = document.getElementById('canvas').appendChild(circleElement);
    }

    //Move circle by vector of moving

  }, {
    key: 'move',
    value: function move(vector, moveSpeed) {
      this.coordinates.x -= vector.x * moveSpeed;
      this.coordinates.y -= vector.y * moveSpeed;

      this.domReference.setAttribute('cx', this.coordinates.x);
      this.domReference.setAttribute('cy', this.coordinates.y);
    }
  }]);

  return Circle;
}();

module.exports = Circle;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = __webpack_require__(3);

var OFFSET_NEAR_BORDER = 5;

var CircleMover = function () {
  function CircleMover(parentCircle, childCircle) {
    _classCallCheck(this, CircleMover);

    if (childCircle.radius >= parentCircle.radius / 2) {
      childCircle.setRadius(parentCircle.radius / 5);
    }

    this.parentCircle = parentCircle;
    this.childCircle = childCircle;

    this.childCircle.setCoordinates({ x: parentCircle.coordinates.x, y: parentCircle.coordinates.y });

    this.parentCircle.domReference.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
    this.parentCircle.domReference.addEventListener('mouseout', this.mouseOverHandler.bind(this), false);
  }

  //Move child circle out of cursor


  _createClass(CircleMover, [{
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(event) {
      var mouseCoordinates = {
        x: event.offsetX,
        y: event.offsetY
      };

      //Get move vector by current mouse and child circle coordinates
      var moveVector = new Vector(mouseCoordinates, this.childCircle.coordinates);

      //Check if child circle near parent circle border
      var isChildCircleNearBorder = Math.pow(this.childCircle.coordinates.x - this.parentCircle.coordinates.x, 2) + Math.pow(this.childCircle.coordinates.y - this.parentCircle.coordinates.y, 2) > Math.pow(this.parentCircle.radius - this.childCircle.radius, 2);

      //Move child circle if distance between them less than parent circle radius
      if (moveVector.distanceBetweenPoints < this.parentCircle.radius) {

        //If child circle isn't near the border it escapes from cursor
        if (!isChildCircleNearBorder) {
          this.childCircle.move(moveVector, 2);
        } else {
          //If it near parent circle border it jumps through cursor
          if (moveVector.distanceBetweenPoints < this.childCircle.radius + OFFSET_NEAR_BORDER) {
            this.childCircle.move(moveVector, -this.childCircle.radius * 2);
          }
        }
      }
    }

    //Move child circle if cursor is on it

  }, {
    key: 'mouseOverHandler',
    value: function mouseOverHandler(event) {
      console.log('wow');
      var mouseCoordinates = {
        x: event.offsetX,
        y: event.offsetY
      };

      var moveVector = new Vector(mouseCoordinates, this.childCircle.coordinates);
      this.childCircle.move(moveVector, this.childCircle.radius);
    }
  }]);

  return CircleMover;
}();

module.exports = CircleMover;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Circle = __webpack_require__(0);
var CircleMover = __webpack_require__(1);

var parentCircle = new Circle({ x: 200, y: 200 }, 200);
var childCircle = new Circle({ x: 1000, y: 200 }, 20);

parentCircle.draw();
childCircle.draw();

var circleMover = new CircleMover(parentCircle, childCircle);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector() {
  var firstPointCordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };
  var secondPointCordinates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };

  _classCallCheck(this, Vector);

  try {
    //Calculate distance between points if points have right properties and coordinates are numbers
    if (firstPointCordinates.x && firstPointCordinates.y && secondPointCordinates.x && secondPointCordinates.y) {
      if (!isNaN(+firstPointCordinates.x) && !isNaN(+firstPointCordinates.y) && !isNaN(+secondPointCordinates.y) && !isNaN(+secondPointCordinates.y)) {
        this.distanceBetweenPoints = Math.sqrt(Math.pow(firstPointCordinates.x - secondPointCordinates.x, 2) + Math.pow(firstPointCordinates.y - secondPointCordinates.y, 2));
      } else {
        throw new Error('Points coordinates must be numbers');
      }
    } else {
      throw new Error('Points must have x and y properties');
    }
  } catch (error) {
    this.distanceBetweenPoints = 0;

    firstPointCordinates = { x: 0, y: 0 };
    secondPointCordinates = { x: 0, y: 0 };
  }

  //Calculate vector direction
  this.x = (firstPointCordinates.x - secondPointCordinates.x) / (this.distanceBetweenPoints || 1);
  this.y = (firstPointCordinates.y - secondPointCordinates.y) / (this.distanceBetweenPoints || 1);
};

module.exports = Vector;

/***/ })
/******/ ]);