var count = 1;
count = 'a';
var a;
a = 1;
a = true;
a = 'a';
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// Type Assertions
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
console.log(endsWithC);
