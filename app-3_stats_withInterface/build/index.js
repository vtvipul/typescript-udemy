"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = require("./Summary");
const MatchReader_1 = require("./MatchReader");
Summary_1.Summary.WinAnalysisConsoleReport("Man United").buildAndPrintReport(MatchReader_1.MatchReader.MatchReaderFromCsvFile("./football.csv").matchData);
Summary_1.Summary.AvgGoalAnalysisConsoleReport("Man United").buildAndPrintReport(MatchReader_1.MatchReader.MatchReaderFromCsvFile("./football.csv").matchData);
// Summary.WinAnalysisHtmlReport("Man United", "win-report").buildAndPrintReport(
// 	MatchReader.MatchReaderFromCsvFile("./football.csv").matchData
// );
// Summary.AvgGoalAnalysisHtmlReport("Man United", "avg-goal-report").buildAndPrintReport(
// 	MatchReader.MatchReaderFromCsvFile("./football.csv").matchData
// );
