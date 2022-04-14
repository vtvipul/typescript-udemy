import { CsvFileReader } from "./CsvFileReader";
import { DataReader } from "./DataReader";
import { stringToDate } from "./utils";

export enum MatchResult {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
	private _matchData: MatchData[] = [];
	
	constructor(public reader: DataReader) {}

	public static MatchReaderFromCsvFile(filename:string):MatchReader{
		return new MatchReader(new CsvFileReader(filename))
	}

	public load(): void {
		this._matchData = this.reader.data.map((row) => {
			return [
				stringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult,
				row[6],
			];
		});
	}

	public get matchData(): MatchData[] {
		if (!this._matchData.length) {
			this.load();
		}
		return this._matchData;
	}
}
