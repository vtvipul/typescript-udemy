"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const fileReader = new MatchReader_1.MatchReader("football.csv");
const content = fileReader.data;
let manuWinCount = 0;
content.forEach((line) => {
    if ((line[1] == "Man United" && line[5] == MatchResult_1.MatchResult.HomeWin) ||
        (line[2] == "Man United" && line[5] == MatchResult_1.MatchResult.AwayWin)) {
        manuWinCount++;
    }
});
console.log("Manchester United won", manuWinCount, "times.");
