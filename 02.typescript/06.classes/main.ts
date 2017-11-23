class Point {
    constructor(private _x?: number, private _y?: number){
    }
    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);       
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if(value < 0)
            throw new Error('must be more than 0');
        this._x = value;
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(1, 2);
point.x = 5;
point.draw();
// tsc main.ts --target es2016 && node main.js