class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error('must be more than 0');
        this._x = value;
    }
    getDistance(another) {
        // ...
    }
}
let point = new Point(1, 2);
point.x = 5;
point.draw();
