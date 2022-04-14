import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";
import { report } from "process";

Summary.WinAnalysisConsoleReport("Man United").buildAndPrintReport(
	MatchReader.MatchReaderFromCsvFile("./football.csv").matchData
);

Summary.AvgGoalAnalysisConsoleReport("Man United").buildAndPrintReport(
    MatchReader.MatchReaderFromCsvFile("./football.csv").matchData
);

// Summary.WinAnalysisHtmlReport("Man United", "win-report").buildAndPrintReport(
// 	MatchReader.MatchReaderFromCsvFile("./football.csv").matchData
// );

// Summary.AvgGoalAnalysisHtmlReport("Man United", "avg-goal-report").buildAndPrintReport(
// 	MatchReader.MatchReaderFromCsvFile("./football.csv").matchData
// );

