import fs from "fs";
import { DataReader } from "./DataReader";

export class CsvFileReader implements DataReader {
	private _data: string[][] = [];

	constructor(public filename: string) {}

	read(): void {
		this._data = fs
			.readFileSync(this.filename, { encoding: "utf-8" })
			.split("\n")
			.map((row) => row.split(","));
	}

	public get data(): string[][] {
		if (!this._data.length) {
			this.read();
		}
		return this._data;
	}
}
