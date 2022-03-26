import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	show(div: HTMLDivElement) {
		const tableNode = document.createElement("table");
		const r0 = tableNode.insertRow(0);
		const c00 = r0.insertCell(0);
		const c01 = r0.insertCell(1);
		const c02 = r0.insertCell(2);
		const c03 = r0.insertCell(3);
		c00.innerHTML = `Company Name`;
		c01.innerHTML = `CatchPhrase`;
		c02.innerHTML = `Latitude`;
		c03.innerHTML = `Longitude`;
		const r1 = tableNode.insertRow(1);
		const c10 = r1.insertCell(0);
		const c11 = r1.insertCell(1);
		const c12 = r1.insertCell(2);
		const c13 = r1.insertCell(3);
		c10.innerHTML = `${this.companyName}`;
		c11.innerHTML = `${this.catchPhrase}`;
		c12.innerHTML = `${this.location.lat}`;
		c13.innerHTML = `${this.location.lng}`;
		div.appendChild(tableNode);
		// tableNode.insertRow(1)
		// tableNode.insertRow(2)
	}

	markerContent(): string {
		return `Name: ${this.companyName}
CatchPhrase: ${this.catchPhrase}
Latitude: ${this.location.lat}
Longitude: ${this.location.lng}`;
	}
}
