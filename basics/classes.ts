// class Vehicle {
// 	constructor(public color: string) {}

// 	protected honk(): string {
// 		return "beep beep";
// 	}
// }

// class Car extends Vehicle {
// 	private drive(): string {
// 		return "vroom";
// 	}

// 	startDriveProcess(): void {
// 		console.log(this.drive(), this.honk());
// 	}
// }

// const car = new Car();

// car.startDriveProcess()

// console.log(car.color)

// class Parent {
// 	constructor(public someVar: string) {}
// }

// class Child extends Parent{
//     constructor(someVar:string, public someOtherVar:string){
//         super(someVar)
//     }
// }

// const child = new Child("SomeVariableInitialized...", "someOtherVariableInitialized...")

// console.log(child.someVar, child.someOtherVar)

// class One {
// 	one: string;
// 	two: number;
// 	three: boolean;
// 	four: (number | string)[];
// }

// class Two {
// 	two: number;
// 	five: string;
// 	six: number[];
// }

// class Three {
// 	constructor(obj: One | Two) {
//         console.log(obj.six)
//     }
// }
