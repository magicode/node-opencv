var opencv = require('./lib/opencv')
  , assert = require('assert')

console.log(opencv.version)

console.log(new opencv.Matrix().empty())

console.log(new opencv.Image('./examples/mona.jpg').empty())