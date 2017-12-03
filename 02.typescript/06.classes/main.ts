import { Point } from './point';

let point = new Point(1, 2);
point.x = 5;
point.draw();
// tsc main.ts --target es2016 && node main.js