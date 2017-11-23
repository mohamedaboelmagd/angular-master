"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.x = 5;
point.draw();
// tsc main.ts --target es2016 && node main.js 
