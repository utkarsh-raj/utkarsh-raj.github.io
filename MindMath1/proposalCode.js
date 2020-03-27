// randomly generated N = 5 length array 0 <= A[N] <= 99 (ES6)

Array.from({length: 5}, () => Math.floor(Math.random() * 99));

var numbers = [];
for (var i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random() * 99));
}

// Set the viewport measures
var width = window.innerWidth;
var height = window.innerHeight;

// Design the new Konva Stage
var stage = new Konva.Stage({
container: 'container',
width: width,
height: height
});

// The new Konva Layer
var layer = new Konva.Layer();

// Add the right Triangle outline
var rightTriangleOutline = new Konva.Line({
	name: "rightTriangle",
	points: [0, 0, 0, 200, 100, 100],
	stroke: 'black',
	strokeWidth: 5,
	closed: true,
	x: 40,
	y: 100,
	offsetX: 20,
	offsetY: 60,
	dash: [6, 2]
});

// Add the shape to the layer
layer.add(rightTriangle);

// Add the layer to the stage
stage.add(layer);

var house = [
    {
      name: "LargeRightTriangle1",
      x: 50,
      y: 100,
      offsetX: 50,
      offsetY: 100,
      rotation: 0,
      points: [0, 0, 0, 200, 100, 100],
      // stroke: "black",
      // strokeWidth: 3,
      fill: "orange",
      closed: true,
      draggable: true
    },
    {
      name: "LargeRightTriangle2",
      x: 100,
      y: 50,
      offsetX: 100,
      offsetY: 50,
      rotation: 0,
      points: [0, 0, 200, 0, 100, 100],
      // stroke: "black",
      // strokeWidth: 3,
      fill: "green",
      closed: true,
      draggable: true
    },
    {
      name: "MediumRightTriangle1",
      x: 175,
      y: 175,
      offsetX: -25,
      offsetY: -25,
      rotation: 0,
      points: [0, 0, 0, -100, -100, 0],
      fill: "red",
      closed: true,
      draggable: true
    },
    {
      name: "SmallRightTriangle1",
      x: 175,
      y: 50,
      offsetX: -25,
      offsetY: 50,
      rotation: 0,
      points: [0, 0, 0, 100, -50, 50],
      fill: "brown",
      closed: true,
      draggable: true
    },
    {
      name: "SmallRightTriangle2",
      x: 100,
      y: 125,
      offsetX: 0,
      offsetY: 25,
      rotation: 0,
      points: [0, 0, 50, 50, -50, 50],
      fill: "darkblue",
      closed: true,
      draggable: true
    },
    {
      name: "Square1",
      x: 150,
      y: 100,
      offsetX: 50,
      offsetY: 0,
      rotation: 0,
      points: [0, 0, 50, -50, 100, 0, 50, 50],
      fill: "yellow",
      closed: true,
      draggable: true
    },
    {
      name: "Parallelogram1",
      x: 75,
      y: 175,
      offsetX: 25,
      offsetY: 25,
      rotation: 0,
      points: [0, 0, 100, 0, 50, 50, -50, 50],
      fill: "lightblue",
      closed: true,
      draggable: true
    }
  ]

var nearOutline = function (shape, outline) {
	var threshold = 50;

	if (shape.rotation === outline.rotation) {
		if (Math.abs(shape.x - outline.x) <= threshold) && (Math.abs(shape.y - outline.y) <= threshold) {
			return true;
		}
		else {
			return false;
		}
	}
}