var data = []

var m = 1;
var b = 0;

function setup() {
  createCanvas(400, 400);
}

function gradientDescent() {

  for (var i = 0; i < data.length; i++) {
    var x = data[i].x
    var y = data[i].y
    
    var guess = m * x + b;
    
    var error = guess - y;
    
    m = m + error * x;
    b = b + error;
