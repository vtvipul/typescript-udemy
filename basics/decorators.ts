// // class Boat {
// // 	color: string = "red";

// // 	// getter
// // 	get formattedColor(): string {
// // 		return `This boat is ${this.color} in color`;
// // 	}

// // 	@testDecorator
// // 	pilot(): void {
// // 		console.log(`${this.color} colored boat goes swooosh...`);
// // 	}

// // 	@testDecorator
// // 	testMethod(): void {
// // 		console.log("Called testMethod");
// // 	}
// // }

// // function testDecorator(target: any, key: string): void {
// // 	console.log("target--->", target);
// // 	console.log("key--->", key);
// // }

// // console.log(Boat.prototype)

// // // const boat = new Boat();
// // // // boat.pilot();
// // // boat.testMethod();

// // const car = {
// // 	make: "honda",
// // 	year: 2000,
// // };

// // const desc: PropertyDescriptor | undefined = Object.getOwnPropertyDescriptor(
// // 	car,
// // 	"year"
// // );

// // Object.defineProperty(car, "make", { writable: false });

// // car.make = "Maruti"

// // console.log(car)

// class Boat {
// 	@testDecorator
// 	material: string = "wood";

// 	constructor(public color: string) {}

// 	// applying decorator to catch errors
// 	// @catchErrors("Boat Sunk")
// 	pilot(@paramDecorator param1: string, @paramDecorator param2: number): void {
// 		console.log("Boat goes swoosh...");
// 		// throw new Error("THIS IS THE ERROR");
// 	}
// }

// // // decorator function
// // function catchErrors(target: any, key: string, desc: PropertyDescriptor): void {
// // 	const originalMethod = desc.value;

// // 	// giving new value to method
// // 	desc.value = (): void => {
// // 		try {
// // 			// calling original method under try block to catch errors
// // 			originalMethod();
// // 		} catch (e) {
// // 			console.error(`${key} method encountered an error
// // Reason: ${e}`);
// // 		}
// // 	};
// // }

// function catchErrors(msg: string) {
// 	return (target: any, key: string, desc: PropertyDescriptor) => {
// 		const originalMethod = desc.value;
// 		desc.value = () => {
// 			try {
// 				originalMethod();
// 			} catch (e) {
// 				console.error(msg, e);
// 			}
// 		};
// 	};
// }

// // new Boat("green").pilot();

// function testDecorator(target: any, key: string) {
// 	console.log("Target: ->", target);
// 	console.log("key: ->", key);
// }

// function paramDecorator(target: any, key: string) {
// 	console.log("Target: ->", target);
// 	console.log("key: ->", key);
// 	// console.log("Descriptor: ->", desc);
// }
