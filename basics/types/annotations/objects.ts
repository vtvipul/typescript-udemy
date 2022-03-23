const person = {
	_name: "someName",
	age: 26,
	designation: "programmer",
	address: {
		house_no: "someHouse",
		lane: "someLane",
		city: "someCity",
		state: "someState",
		country: "someCountry",
	},
	coordinates: {
		long: 100,
		lat: 101,
	},

	setAge(age: number): void {
		this.age = age;
	},
};

const {
	_name,
	age,
	designation,
}: { _name: string; age: number; designation: string } = person;

const {
	address: { house_no, lane, city, state, country },
}: {
	address: {
		house_no: string;
		lane: string;
		city: string;
		state: string;
		country: string;
	};
} = person;

console.log(`
${_name}
${age}
${designation}
${house_no}
${lane}
${city}
${state}
${country}
`)