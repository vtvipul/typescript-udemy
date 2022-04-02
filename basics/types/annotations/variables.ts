// let apples: number = 5; // if we have declaration and assignment in the same line then we don't need
// // type annotations
// let speed: string = "speed";
// let hasName: boolean = true;
// let nothingMuch: null = null;
// let nothing: undefined = undefined;

let apples = 5; // if we have declaration and assignment in the same line then we don't need
// type annotations
// let speed = "speed";
// let hasName = true;
// let nothingMuch = null;
// let nothing = undefined;

// // built in objects
// let now: Date = new Date();

// // arrays
// let colors: string[] = ["red", "green", "blue"];
// let ages: number[] = [1, 2, 3];
// let truths: boolean[] = [true, false, true];

// // classes
// class Car {}

// let car: Car = new Car();

// // object literals
// let point: { x: number; y: number } = {
// 	x: 10,
// 	y: 9,
// };

// functions
const logNumber: (i: number) => void = (i) => {
	console.log("Number = ", i);
};

// when to use type annotations
// 1. when there's a function which returns an "any" type of value

// json.parse() example

// type COORDINATE = {
// 	x: number;
// 	y: number;
// };

// const coordinateJson: string = '{"x":10, "y":15}';
// const coordinateObject1: COORDINATE = JSON.parse(coordinateJson);
// const coordinateObject2: { x: number; y: number } = JSON.parse(coordinateJson);
// console.log(coordinateObject1);
// console.log(coordinateObject2);

// variable can be of more than two types
// let numberAboveZero: undefined | number;

// const arr = [-10, -2, -4, 6, -1];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) {
// 		numberAboveZero = arr[i];
// 	}
// }

// console.log(numberAboveZero);

