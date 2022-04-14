"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvgGoalAnalysis = exports.WinsAnalysis = void 0;
const MatchReader_1 = require("../MatchReader");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matchData) {
        let wincount = 0;
        matchData.forEach((row) => {
            if ((row[1] == this.teamName && row[5] == MatchReader_1.MatchResult.HomeWin) ||
                (row[2] == this.teamName && row[5] == MatchReader_1.MatchResult.AwayWin)) {
                wincount++;
            }
        });
        return `${this.teamName} won ${wincount} times.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
class AvgGoalAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matchData) {
        let totalGoals = 0;
        let matchesPlayed = 0;
        matchData.forEach((row) => {
            if (row[1] == this.teamName) {
                totalGoals += row[3];
                matchesPlayed++;
            }
            else if (row[2] == this.teamName) {
                totalGoals += row[4];
                matchesPlayed++;
            }
        });
        const avg = totalGoals / matchesPlayed;
        return `Avg goals per game by ${this.teamName} is ${avg}`;
    }
}
exports.AvgGoalAnalysis = AvgGoalAnalysis;
