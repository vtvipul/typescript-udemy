// class ArrayOfNumbers {
// 	constructor(public collection: number[]) {}

// 	get(index: number) {
// 		return this.collection[index];
// 	}
// }

// const a = new ArrayOfNumbers([1, 2, 3, 4, 5]);
// console.log(a.get(1))
// console.log(a.get(3))

// class ArrayOfStrings{
// 	constructor(public collection:string[]){}

// 	get(index:number){
// 		return this.collection[index]
// 	}
// }

// const s = new ArrayOfStrings(["a", "b", "c", "d"])
// console.log(s.get(1))

// class List<T> {
// 	constructor(public collection: T[]) {}
// 	get(index: number): T {
// 		return this.collection[index];
// 	}
// }

// const listOfNums = new List<number>([1, 2, 3, 4, 5]);
// console.log(listOfNums.get(1));

// const listOfStrs = new List<string>(["a", "b", "c"]);
// console.log(listOfStrs.get(2));

// generics using function
// const log = <T>(arr: T[]) => {
// 	arr.forEach((element: T) => {
// 		console.log(element);
// 	});
// };

// log([1, 2, 3, 4, 5, 6, 7]);

// log(["a", "b", "c", "d"]);

// Generics constraints

// interface Printable {
// 	print(): void;
// }

// class One {
// 	print(): void {
// 		console.log("I am class One");
// 	}
// }

// class Two {
// 	print(): void {
// 		console.log("I am class Two");
// 	}
// }

// const callPrint1 = <T extends Printable>(element: T[]) => {
// 	element.forEach((obj) => {
// 		obj.print();
// 	});
// };

// function callPrint2<T extends Printable>(arrObj: T[]) {
// 	arrObj.forEach((obj) => {
// 		obj.print();
// 	});
// }

// callPrint1([new One(), new Two(), new One(), new Two()]);

// callPrint2([new One(), new Two(), new One(), new Two()]);

