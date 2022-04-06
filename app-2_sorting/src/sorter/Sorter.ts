export abstract class Sorter {
	// abstract method

	public abstract length: number;
	public abstract compare(leftIndex: number, rightIndex: number): boolean;
	public abstract swap(leftIndex: number, rightIndex: number): void;

	// sorting method with bubble sort algorithm
	public sort(): void {
		const length = this.length;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
