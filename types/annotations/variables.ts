let apples: number = 5;
let speed: string = "speed";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ["red", "green", "blue"];
let ages: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {}

let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
	x: 10,
	y: 9,
};

// functions
const logNumber: (i: number) => void = (i) => {
	console.log("Number = ", i);
};
