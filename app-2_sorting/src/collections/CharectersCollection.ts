import { ISortable, Sorter } from "../sorter";

export class CharectersCollection extends Sorter {
	constructor(private data: string) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number): void {
		const charecters = this.data.split("");

		const temp = charecters[leftIndex];
		charecters[leftIndex] = charecters[rightIndex];
		charecters[rightIndex] = temp;

		this.data = charecters.join("");
	}

	get collection(): string {
		return this.data;
	}
}
