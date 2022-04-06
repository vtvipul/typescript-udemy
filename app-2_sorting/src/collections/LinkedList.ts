import { ISortable, Sorter } from "../sorter";

class LNode {
	next: LNode | null = null;

	constructor(public value: number) {}
}

export class LinkedList extends Sorter {
	head: LNode | null;
	public length: number;

	constructor() {
		super();
		this.head = null;
		this.length = 0;
	}

	add(value: number): void {
		const node = new LNode(value);
		this.length += 1;

		if (this.head == null) {
			this.head = node;
			return;
		}

		let pointer: LNode | null = this.head;
		while (pointer.next != null) {
			pointer = pointer.next;
		}
		pointer.next = node;
	}

	at(index: number): LNode {
		// edge cases 1. list is empty (head==null) pointer.next wont work
		// 2. index to find is greater than length of the list

		let counter = 0;
		if (this.head == null) {
			throw new Error("Index out of bounds");
		} else {
			let pointer: LNode | null = this.head;
			while (pointer != null) {
				if (counter === index) {
					return pointer;
				}
				pointer = pointer.next;
				counter += 1;
			}
			throw new Error("Index out of bounds");
		}
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (this.head == null) {
			throw new Error("list is empty");
		} else {
			return this.at(leftIndex).value > this.at(rightIndex).value;
		}
	}

	swap(leftIndex: number, rightIndex: number): void {
		const temp = this.at(leftIndex).value;
		this.at(leftIndex).value = this.at(rightIndex).value;
		this.at(rightIndex).value = temp;
	}

	print(): void {
		if (this.head == null) {
			console.log("empty list");
		} else {
			const array: number[] = [];
			let pointer: LNode | null = this.head;
			while (pointer != null) {
				array.push(pointer.value);
				pointer = pointer.next;
			}
			console.log(array.join("   ->   "));
		}
	}
}
