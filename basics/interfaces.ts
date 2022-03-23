// interface Vehicle {
// 	name: string;
// 	year: number;
// 	broken: boolean;
// 	summary(): string;
// }

// const oldCivic = {
// 	name: "civic",
// 	year: 2000,
// 	broken: true,

//     summary(){
//         return `Name of vehicle:${this.name}
// Year of manufacture: ${this.year}
// Is it broken: ${this.broken}
// `
//     }
// };

// const printVehicle = (vehicle: Vehicle) => {
// 	console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

interface Reportable {
	summary(): string;
}

const vehicle = {
	name: "someVehicleName",
	model: "someModel",
	year: 2000,
	working: true,

	summary(): string {
		return `name:           ${this.name}
model:          ${this.model}
year:           ${this.year}
working:        ${this.working}`;
	},
};

const drink = {
	name: "tea",
	color: "brown",
	sugarContent: 40,
	carbonated: false,

	summary(): string {
		return `name:           ${this.name}
color:          ${this.color}
sugarContent:   ${this.sugarContent}
carbonated:     ${this.carbonated}`;
	},
};

const reportSummary = (item: Reportable): void => {
	console.log(item.summary());
};

console.log("--------------------------------------")
reportSummary(vehicle)
console.log("--------------------------------------")
reportSummary(drink)
console.log("--------------------------------------")