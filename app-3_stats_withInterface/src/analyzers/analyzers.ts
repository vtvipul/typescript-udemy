import { MatchData, MatchResult } from "../MatchReader";

export interface Analyzer {
	run(matchData: MatchData[]): string;
}

export class WinsAnalysis implements Analyzer {
	constructor(public teamName: string) {}

	run(matchData: MatchData[]): string {
		let wincount = 0;
		matchData.forEach((row) => {
			if (
				(row[1] == this.teamName && row[5] == MatchResult.HomeWin) ||
				(row[2] == this.teamName && row[5] == MatchResult.AwayWin)
			) {
				wincount++;
			}
		});
		return `${this.teamName} won ${wincount} times.`;
	}
}

export class AvgGoalAnalysis implements Analyzer {
	constructor(public teamName: string) {}
	run(matchData: MatchData[]): string {
		let totalGoals = 0;
		let matchesPlayed = 0;

		matchData.forEach((row) => {
			if (row[1] == this.teamName) {
				totalGoals += row[3];
				matchesPlayed++;
			} else if (row[2] == this.teamName) {
				totalGoals += row[4];
				matchesPlayed++;
			}
		});
		const avg = totalGoals / matchesPlayed;
		return `Avg goals per game by ${this.teamName} is ${avg}`;
	}
}
