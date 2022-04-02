import "reflect-metadata";

// const car = {
// 	make: "honda",
// 	year: 2000,
// };

// Reflect.defineMetadata("canDrive", true, car);
// console.log(Reflect.getMetadata("canDrive", car));

// Reflect.defineMetadata("country", "japan", car, "make");

// console.log(Reflect.getMetadata("country", car, "make"));

// class Plane {
// 	color: string = "red";

// 	@markFunction
// 	fly(): void {
// 		console.log("Vrrrrrrrrrrrrrrrrrrrrrr");
// 	}
// }

// // markFunction decorator
// function markFunction(target: Plane, key: string) {
// 	Reflect.defineMetadata("secret", 123, target, key);
// }

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

// class Plane {
// 	color: string = "red";

// 	@markFunction("/users/permissions/root")
// 	fly(): void {
// 		console.log("vrrrrrrrrrrr...");
// 	}
// }

// function markFunction(secretInfo: string) {
// 	return function (target: any, key: string): void {
// 		Reflect.defineMetadata("secret", secretInfo, target, key);
// 	};
// }

// console.log(Reflect.getMetadata("secret", Plane.prototype, "fly"));
// console.log(typeof Plane);
@printMetadata
class Plane {
	color: string = "red";

	@markFunction("something_secret")
	pilot(): void {
		console.log("vrrrrrr......");
	}
}

function markFunction(secret: string) {
	return function (target: any, key: string) {
		Reflect.defineMetadata("secret", secret, target, key);
	};
}

// console.log(Reflect.getMetadata("secret", Plane.prototype, "pilot"));

function printMetadata(target:any){
	console.log(target.prototype)
	for (let key in target.prototype){
		console.log(key)
		console.log("----------")
	}
}









