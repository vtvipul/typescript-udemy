// this file has its name starting with Capital letter U because generally
// when we are exporting something from a ts file we make sure that it
// starts with capital letter to help developers know which files are
// exporting

import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	show(div: HTMLDivElement) {
		const tableNode = document.createElement("table");
		const headings = tableNode.insertRow(0);
		const hcell1 = (headings.insertCell(0).innerHTML = "UserName");
		const hcell2 = (headings.insertCell(1).innerHTML = "Latitude");
		const hcell3 = (headings.insertCell(2).innerHTML = "Longitude");

		const row1 = tableNode.insertRow(1);
		const rcell1 = (row1.insertCell(0).innerHTML = `${this.name}`);
		const rcell2 = (row1.insertCell(1).innerHTML = `${this.location.lat}`);
		const rcell3 = (row1.insertCell(2).innerHTML = `${this.location.lng}`);

		div.appendChild(tableNode);
	}

	markerContent(): string {
		return `Name: ${this.name}
Latitude: ${this.location.lat}
Longitude: ${this.location.lng}`;
	}
}
