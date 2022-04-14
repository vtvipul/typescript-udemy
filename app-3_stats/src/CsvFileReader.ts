import fs from "fs";

export abstract class CsvFileReader<T> {
	private _data: T[];
	filename: string;

	constructor(filename: string) {
		this.filename = filename;
		this._data = [];
	}

	public abstract mapRow(row: string[]): T;

	public read(): void {
		this._data = fs
			.readFileSync(this.filename, { encoding: "utf-8" })
			.split("\n")
			.map((line: string) => line.split(","))
			.map((row: string[]) => this.mapRow(row));
	}

	public get data(): T[] {
		if (!this._data.length) {
			this.read();
		}
		return this._data;
	}
}
