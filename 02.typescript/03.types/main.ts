let count = 1;
count = 'a';

let a: any;
a = 1;
a = true;
a = 'a';

let b: boolean;
let c: string;
let d: number;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a'];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;

// Type Assertions
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
console.log(endsWithC);
