import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const fileReader = new MatchReader("football.csv");
const content = fileReader.data;

let manuWinCount = 0;

content.forEach((line) => {
	if (
		(line[1] == "Man United" && line[5] == MatchResult.HomeWin) ||
		(line[2] == "Man United" && line[5] == MatchResult.AwayWin)
	) {
		manuWinCount++;
	}
});

console.log("Manchester United won", manuWinCount, "times.");
